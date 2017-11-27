const Notifier = require('dd-notifier');
const chalk    = require('chalk');



class DDTaskFlow {



  /**
   * constructor
   */
  constructor(context, key, flows, parent) {
    this.context = context;
    this.key     = key;
    this.parent  = parent;
    this.flows   = flows;
    this.notify  = context.notify.flow === undefined ? true : context.notify.flow;
  }



  /**
   * フローを実行する
   */
  async run(opt = {}) {
    if (opt.isChildMode) {
      console.log(chalk.cyan(`Child Flow Starting '${this.key}'`));
    } else {
      console.log(chalk.cyan(`
*************************
DDTaskFlow Starting
Target: ${this.key}
*************************
      `));
    }

    for (let tasks of this.flows) {
      tasks = Array.isArray(tasks) ? tasks : [tasks];
      const promiseList = tasks.map(task => {
        let index, taskOptions = {};

        if (typeof task === 'string') {
          index = task;
        } else {
          index = task.name;
          taskOptions = task.options || taskOptions;
        }

        if (/^@/.test(index)) {
          const flowKey   = index.replace(/^@/, '');
          const childFlow = this.context.flows[flowKey];
          return childFlow.run(Object.assign({}, opt, {isChildMode: true}));
        } else {
          return this.context.task(index, taskOptions);
        }
      });
      if (promiseList.length) await Promise.all(promiseList);
    }

    if (opt.isChildMode) {
      console.log(chalk.cyan(`Child Flow Finish '${this.key}'`));
    } else {
      console.log(chalk.cyan(`
DDTaskFlow Finish
Target: ${this.key}
-------------------------
      `));
      new Notifier('success', {
        subtitle: `フロー ${this.key}`,
        message : '完了しました。',
      });
    }
  }
}



module.exports = DDTaskFlow;
