const loaderUtils = require('loader-utils');



module.exports = function(source, map) {
  this.cacheable();

  const options = loaderUtils.getOptions(this);

  const ddSources      = {};
  const ddSourceMatchs = source.match(/<dd-source([\s\S]*?)>([\s\S]*?)<\/dd-source>/g);

  ddSourceMatchs && ddSourceMatchs.forEach(ddSourceMatch => {
    const head        = ddSourceMatch.match(/<dd-source([\s\S]*?)>/)[0];//<dd-source id="hoge" immediately>
    const id          = head.match(/ id="(.*?)"/)[1];
    const immediately = head.match(/ immediately>?/);

    let body = ddSourceMatch.match(/<dd-source([\s\S]*?)>([\s\S]*?)<\/dd-source>/)[2];
    body = body.replace(/^\n+/, '').replace(/\n+$/, '');

    let minIndent = '';
    body.split('\n').forEach(row => {
      if (/^[\n\r\s\t]*$/.test(row)) return;
      const myIndent = row.match(/^[\s\t]*/);
      if (myIndent[0].length > minIndent.length) minIndent = myIndent;
    });

    const minIndentRe = new RegExp('^' + minIndent);
    body = body.split('\n').map(row => row.replace(minIndentRe, '')).join('\n').trim();

    ddSources[id] = body;
    source = source.replace(ddSourceMatch, immediately ? body : '');
  });

  const ddSourceDumpMatchs = source.match(/\{\{ddSourceDump\.(.*?)\}\}/g);
  ddSourceDumpMatchs && ddSourceDumpMatchs.forEach(ddSourceDumpMatch => {
    const idMatch  = ddSourceDumpMatch.match(/\{\{ddSourceDump\.((?!\s).*?)\}\}/)[1];
    const id       = idMatch.replace(/!$/, '');
    const isEscape = !!idMatch.match(/!$/);

    let body = ddSources[id] || '';

    if (isEscape) {
      body = body.replace(/[&'`"<>]/g, match => {
        return {
          '&': '&amp;',
          "'": '&#x27;',
          '`': '&#x60;',
          '"': '&quot;',
          '<': '&lt;',
          '>': '&gt;',
        }[match];
      });
    }

    source = source.replace(ddSourceDumpMatch, body);
  });

  // <dd-example is="●●●●●" />
  // <dd-example is="●●●●●">●●●●●</dd-example>
  // /<dd-example ([\s\S]*?)\/>/
  // /<dd-example ([\s\S]*?)>([\s\S]*?)<\/dd-example>/
  const docsExampleMatchs = source.match(/<dd-example (([\s\S]*?)>([\s\S]*?)<\/dd-example>|([\s\S]*?)\/>)/g);
  if (docsExampleMatchs) {
    const exampleImporters = [];
    const componentSettings = [];
    docsExampleMatchs && docsExampleMatchs.forEach(docsExampleMatch => {
      const is  = docsExampleMatch.match(/ is="(.*?)"/)[1];
      const tag = `my-example-${is}`;
      const importerName = `__${tag.replace(/-/g, '_')}`;
      const fileName = `-example-${is}.vue`;
      const tmpl = `
        <${tag} id="${is}" data-anchor-point />
      `;
      exampleImporters.push(`import ${importerName} from './${fileName}';`);
      componentSettings.push([`'${tag}': ${importerName}`]);
      source = source.replace(docsExampleMatch, tmpl);
    });

    source = source.replace('<script>', '<script>\n' + exampleImporters.join(''));
    if (source.match(/\n  components: \{/)) {
      source = source.replace(/(\n  components: \{)/, '$1' + componentSettings.join(','));
    } else {
      source = source.replace(/(\nexport default \{)/, '$1' + `components: {${componentSettings.join(',')}},`);
    }
  }

  this.callback(null, source, map);
};