const babelLoaderSettings = {
  query: {

    // presetもbabel7になったらenvに変えよう
    // だけどnuxtがbabel7を使うようにならんといけん、、かな？
    presets: [
      'es2015',
      'stage-0',
      // ['env', {
      //   targets: {
      //     browsers: [
      //       'last 2 versions',
      //       'ie >= 11',
      //       'Android >= 4.4',
      //       'safari >= 8',
      //     ],
      //   },
      // }],
    ],
    plugins: [
      'transform-runtime', // babel7になったらenvに変えよう
      'transform-vue-jsx',
    ],
  },
  get queryString() {
    let rows = [];
    for (const key in this.query) {
      const values = this.query[key];
      if (typeof values === 'string') {
        rows.push(`${key}=${values}`);
      } else {
        values.forEach(value => {
          rows.push(`${key}[]=${value}`);
        });
      }
    }
    return rows.join(',');
  },
};



module.exports = babelLoaderSettings;
