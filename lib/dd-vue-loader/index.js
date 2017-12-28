const loaderUtils = require('loader-utils');



module.exports = function(source, map) {
  this.cacheable();

  const options = loaderUtils.getOptions(this);

  source = source
    .replace(/vn@/g, options.vue.nameSpace)
    .replace(/vt@/g, options.vue.nameSpace + '-')
    .replace(/<vt-/g, `<${options.vue.nameSpace}-`)
    .replace(/<\/vt-/g, `</${options.vue.nameSpace}-`)
    .replace(/vc@/g, options.css.prefix);



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
    // const filterMatchs = ddSourceDumpMatch.replace(/\}\}$/, '').replace(/\s/g, '').split('|');

    // filterMatchs.shift();
    // filterMatchs.forEach(filter => {

    // });

    source = source.replace(ddSourceDumpMatch, body);
  });

  // アンカーリンク
  // @TODO: this.resourcePathによる分岐は今はラフ、、、
  // 後でオプション指定させるか別ローダに切り出す
  if (this.resourcePath.match(/\/src\/pages\/(.*?)\.vue$/)) {
    const ANCHOR_VAR_NAME  = '$_anchors';
    const ANCHOR_POINT_STR = 'data-anchor-point';
    const ANCHOR_POINT_RE  = new RegExp('<(.*)?' + ANCHOR_POINT_STR + '(.*)?>', 'g');

    const anchors = [];
    const anchorMatchs = source.replace(/<!--[\s\S]*?-->/, '').replace(/[\n\r]/g, '').replace(/</g, '\n<').match(ANCHOR_POINT_RE);

    anchorMatchs && anchorMatchs.forEach(match => {
      const idMatch = match.match(/ id="(.*?)"/);

      if (!idMatch) return;

      const id = idMatch[1];
      const labelMatch = match.match(new RegExp(ANCHOR_POINT_STR + '="(.*?)"'));
      const label = labelMatch ? labelMatch[1] : id;
      anchors.push({id, label});
    });

    source = source.replace(/<script([\s\S]*?)>/, '<script$1>' + '\nconst ' + ANCHOR_VAR_NAME + ' = ' + JSON.stringify(anchors) + ';\n');
  }

  this.callback(null, source, map);
};