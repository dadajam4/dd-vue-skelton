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
      const label = (labelMatch ? labelMatch[1] : id).replace(/-/g, ' ');
      anchors.push({id, label});
    });

    source = source.replace(/<script([\s\S]*?)>/, '<script$1>' + '\nconst ' + ANCHOR_VAR_NAME + ' = ' + JSON.stringify(anchors) + ';\n');
  }

  this.callback(null, source, map);
};