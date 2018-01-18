const config      = require('app-root-path').require('/config');
const gulp        = require('gulp');
const path        = require('path');
const plumber     = require('gulp-plumber');
const svgmin      = require('gulp-svgmin');
const iconfontCss = require('gulp-iconfont-css');
const iconfont    = require('gulp-iconfont');
const Notifier    = require('dd-notifier');
const chalk       = require('chalk');



function svgIconTask(task, params = {}) {
  return new Promise((resolve, reject) => {
    const DEST_PATH          = path.join(params.dest, params.fontName);
    const FONT_RELATIVE_PATH = path.relative(params.cssEntryPath, DEST_PATH);

    const stream = gulp.src(path.join(params.src, '*.svg'))
      .pipe(svgmin())
      .pipe(plumber())
      .pipe(iconfontCss({
        fontName  : params.fontName,
        path      : params.template,
        targetPath: `./${params.fontName}.scss`,
        fontPath  : FONT_RELATIVE_PATH + '/',
        cssClass  : params.fontName,
      }))
      .pipe(iconfont({
        fontName        : params.fontName,
        formats         : ['ttf', 'eot', 'woff', 'woff2', 'svg'],
        appendCodepoints: false,
        descent   : params.descent || 0,
      }))
      .on('error', function() {
        if (task.notify) {
          new Notifier('danger', {
            subtitle: `${task.description}`,
            message : '失敗しました。',
          });
        }
        console.log(chalk.red(`${task.description} 失敗しました。`));
      })
      .pipe(gulp.dest(DEST_PATH))
      .on('end', function() {
        if (task.notify) {
          new Notifier('success', {
            subtitle: `${task.description}`,
            message : '完了しました。',
          });
        }
        console.log(chalk.green(`${task.description} 完了しました。`));
        resolve();
      });
  });
}



module.exports = svgIconTask;
