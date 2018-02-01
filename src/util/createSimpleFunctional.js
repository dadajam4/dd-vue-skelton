export default function createSimpleFunctional(c, el = 'div') {
  const name = c.replace(/__/g, '-');

  return {
    name: `vt@${name}`,
    functional: true,

    render: (h, { data, children }) => {
      let tagName = el;
      if (data.attrs && data.attrs.tag) {
        tagName =  data.attrs.tag;
        delete data.attrs.tag;
      }
      data.staticClass = (`vc@${c} ${data.staticClass || ''}`).trim();
      return h(tagName, data, children);
    },
  }
}
