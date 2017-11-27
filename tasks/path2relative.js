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
        if (!/\.html$/.test(row.filename)) continue;

        const dirMapStr   = row.dir.replace(replaceRe, '');
        const levelMatchs = dirMapStr.match(/\//g);
        const level       = levelMatchs ? levelMatchs.length : 0;
        const base        = level === 0 ? './' : '../'.repeat(level);

        let html = fs.readFileSync(row.filepath, 'utf-8');
        const baseTagMatch = html.match(/<base href="(.*?)">/);
        const htmlTagMatch = html.match(/<html (.*?)>/);
        const headTagMatch = html.match(/<head (.*?)>/);
        let replaceBase;

        if (baseTagMatch) {
          html = html.replace(baseTagMatch[0], '');

          if (headTagMatch) {
            html = html.replace(headTagMatch[0], `${headTagMatch[0]}<base href="${base}">`);
          } else {
            html = html.replace(htmlTagMatch[0], `${htmlTagMatch[0]}<base href="${base}">`);
          }

          replaceBase = '';
        } else {
          replaceBase = base;
        }

        html = html.replace(/ src="\//g, ` src="${replaceBase}`);
        html = html.replace(/ href="\//g, ` href="${replaceBase}`);
        html = html.replace(/url\(\//g, `url(${replaceBase}`);
        fs.writeFileSync(row.filepath, html);
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
