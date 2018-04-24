export default function createSimpleFunctional(c, opts = {}) {
  opts = typeof opts === 'string' ? {el: opts} : opts;
  const el = opts.el || 'div';
  const name = c.replace(/__/g, '-');
  const classProps = opts.classProps || {};
  const props = {};
  for (const prop in classProps) {
    props[prop] = Boolean;
  }

  return {
    name: `vt@${name}`,
    functional: true,

    props,

    render: (h, { data, children, props }) => {
      let tagName = el;
      if (data.attrs && data.attrs.tag) {
        tagName =  data.attrs.tag;
        delete data.attrs.tag;
      }
      const baseClassName = `vc@${c}`;
      data.staticClass = (`${baseClassName} ${data.staticClass || ''}`).trim();
      const propClasses = [];
      for (const prop in classProps) {
        if (props[prop]) {
          const define = classProps[prop];
          const className = define === true ? `${baseClassName}--${prop}` : define;
          propClasses.push(className);
        }
      }
      if (propClasses.length) data.staticClass += ' ' + propClasses.join(' ');
      return h(tagName, data, children);
    },
  }
}
