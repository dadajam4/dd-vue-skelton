
const getObjectClasses = classes => {
  if (typeof classes === 'object') return classes;
  classes = classes || '';
  const classNames = classes.replace(/\s+/, ' ').trim().split(' ');
  classes = {};
  for (let className of classNames) {
    classes[className] = true;
  }
  return classes;
}

const simpleMargeTargets = ['attrs', 'props', 'domProps'];

export default function mergeComponentOptions(baseOptions = {}, mergeOptions) {
  const mergedOptions = Object.assign({}, baseOptions);

  // staticClass
  if (mergeOptions.staticClass) {
    mergedOptions.staticClass = ((mergedOptions.staticClass || '') + ' ' + mergeOptions.staticClass).replace(/\s+/, ' ').trim();
  }

  // class
  if (mergeOptions.class) {
    mergedOptions.class = Object.assign({}, getObjectClasses(mergedOptions.class), getObjectClasses(mergeOptions.class));
  }

  // style
  if (mergeOptions.style) {
    mergedOptions.style = Object.assign({}, mergedOptions.style, mergeOptions.style);
  }

  // directives
  if (mergeOptions.directives) {
    mergedOptions.directives = [
      ...(mergedOptions.directives || []),
      ...mergeOptions.directives,
    ];
  }

  // listeners
  if (mergeOptions.on) {
    mergedOptions.on = mergedOptions.on || {};
    for (let name in mergeOptions.on) {
      const cb = mergeOptions.on[name];
      const originCb = mergeOptions.on[name];
      mergeOptions.on[name] = e => {
        if (cb(e) !== false && originCb) originCb(e);
      }
    }
  }

  // attrs, props, domProps
  for (let key in simpleMargeTargets) {
    if (mergeOptions[key]) {
      mergedOptions[key] = mergedOptions[key] || {};
      for (let name in mergeOptions[key]) {
        mergedOptions[key][name] = mergeOptions[key][name];
      }
    }
  }

  return mergedOptions;
}