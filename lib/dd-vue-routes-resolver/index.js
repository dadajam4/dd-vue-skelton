const fs = require('fs');



const toLabel = str => str.replace(/-/g, ' ');



module.exports = function(routes, resolve) {

  // アンカーリンク
  const ANCHOR_POINT_STR = 'data-anchor-point';
  const ANCHOR_POINT_RE  = new RegExp('<(.*)?' + ANCHOR_POINT_STR + '(.*)?>', 'g');

  routes.forEach(route => {
    const source       = fs.readFileSync(route.component, 'utf8');
    const anchors      = [];
    const anchorMatchs = source.replace(/<!--[\s\S]*?-->/, '').replace(/[\n\r]/g, '').replace(/</g, '\n<').match(ANCHOR_POINT_RE);

    anchorMatchs && anchorMatchs.forEach(match => {
      const idMatch = match.match(/ id="(.*?)"/);

      if (!idMatch) return;

      const id         = idMatch[1];
      const labelMatch = match.match(new RegExp(ANCHOR_POINT_STR + '="(.*?)"'));
      const label      = toLabel(labelMatch ? labelMatch[1] : id);
      anchors.push({id, label});
    });

    route.meta = route.meta || {};
    route.meta.anchors = anchors;

    // return new Promise((resolve, reject) => {
    //   fs.readFile(route.component, 'utf8', (err, source) => {
    //     if (err) return reject(err);

    //     if (source.match(ANCHOR_VAR_RE)) {
    //       const anchors = [];
    //       const anchorMatchs = source.replace(/<!--[\s\S]*?-->/, '').replace(/[\n\r]/g, '').replace(/</g, '\n<').match(ANCHOR_POINT_RE);

    //       anchorMatchs && anchorMatchs.forEach(match => {
    //         const idMatch = match.match(/ id="(.*?)"/);

    //         if (!idMatch) return;

    //         const id = idMatch[1];
    //         const labelMatch = match.match(new RegExp(ANCHOR_POINT_STR + '="(.*?)"'));
    //         const label = labelMatch ? labelMatch[1] : id;
    //         anchors.push({id, label});
    //       });
    //       console.log(anchors);
    //       return resolve(anchors);
    //       // source = source.replace(/<script([\s\S]*?)>/, '<script$1>' + '\nconst ' + ANCHOR_VAR_NAME + ' = ' + JSON.stringify(anchors) + ';\n');
    //     }
    //   });
    // });
  });

  // await Promise.all(promiseList);
  // return resolve(routes);
  console.log(routes);
  return routes;
}