const fs       = require('fs');
const FileUtil = require('dd-file-util');
const Notifier = require('dd-notifier');
const chalk    = require('chalk');



function path2relativeTask(task, params = {}) {
  return new Promise((resolve, reject) => {
    try {
      const list = FileUtil.getPathList(params.src);
      const replaceRe = new RegExp('^' + params.src);

      for (let row of list) {
        if (!/\.(html|js)$/.test(row.filename)) continue;

        const dirMapStr   = row.dir.replace(replaceRe, '');
        const levelMatchs = dirMapStr.match(/\//g);
        const level       = levelMatchs ? levelMatchs.length : 0;
        const base        = level === 0 ? './' : '../'.repeat(level);

        let doc = fs.readFileSync(row.filepath, 'utf-8');
        const baseTagMatch = doc.match(/<base href="(.*?)">/);
        const htmlTagMatch = doc.match(/<html (.*?)>/);
        const headTagMatch = doc.match(/<head (.*?)>/);
        let replaceBase;

        if (baseTagMatch) {
          doc = doc.replace(baseTagMatch[0], '');

          if (headTagMatch) {
            doc = doc.replace(headTagMatch[0], `${headTagMatch[0]}<base href="${base}">`);
          } else if (htmlTagMatch) {
            doc = doc.replace(htmlTagMatch[0], `${htmlTagMatch[0]}<base href="${base}">`);
          }

          replaceBase = '';
        } else {
          replaceBase = base;
        }

        doc = doc.replace(/ src="\//g, ` src="${replaceBase}`);
        doc = doc.replace(/ href="\//g, ` href="${replaceBase}`);
        doc = doc.replace(/url\(\//g, `url(${replaceBase}`);

        doc = doc.replace(/\/?\$\$base\$\$/g, replaceBase);

        fs.writeFileSync(row.filepath, doc);
      }

      if (task.notify) {
        new Notifier('success', {
          subtitle: `${task.description}`,
          message : '完了しました。',
        });
      }
      console.log(chalk.green(`${task.description} 完了しました。`));

      resolve();
    } catch(e) {
      if (task.notify) {
        new Notifier('danger', {
          subtitle: `${task.description}`,
          message : '失敗しました。',
        });
      }

      console.log(chalk.red(`${task.description} 失敗しました。`));
      console.log(e);
      reject(e);
    }
  });
}



module.exports = path2relativeTask;
