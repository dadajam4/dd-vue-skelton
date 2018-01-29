const config      = require('app-root-path').require('/config');
const gulp        = require('gulp');
const path        = require('path');
const fs          = require('fs');
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

    const checkMap = {icon: false, info: false};
    const check = type => {
      checkMap[type] = true;
      if (checkMap.icon && checkMap.info) {
        return onSuccess();
      }
    }

    const onSuccess = () => {
      if (task.notify) {
        new Notifier('success', {
          subtitle: `${task.description}`,
          message : '完了しました。',
        });
      }
      console.log(chalk.green(`${task.description} 完了しました。`));
      resolve();
    }

    const onError = err => {
      if (task.notify) {
        new Notifier('danger', {
          subtitle: `${task.description}`,
          message : '失敗しました。',
        });
      }
      console.log(chalk.red(`${task.description} 失敗しました。`));
      reject(err);
    }

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
        fontName          : params.fontName,
        formats           : ['ttf', 'eot', 'woff', 'woff2', 'svg'],
        appendCodepoints  : false,
        fixedWidth        : params.fixedWidth === undefined ? true : params.fixedWidth,
        centerHorizontally: params.centerHorizontally === undefined ? true : params.centerHorizontally,
        descent           : params.descent || 0,
      }))
      .on('glyphs', function(glyphs, options) {
        const info = {
          fontName: params.fontName,
          cssClass: params.fontName,
          glyphs,
        };

        fs.writeFile(path.join(DEST_PATH, `${params.fontName}.json`), JSON.stringify(info), err => {
          if (err) return onError(err);
          return check('info');
        });
      })
      .on('error', function(err) {
        return onError(err);
      })
      .pipe(gulp.dest(DEST_PATH))
      .on('end', function() {
        return check('icon');
      });
  });
}



module.exports = svgIconTask;
