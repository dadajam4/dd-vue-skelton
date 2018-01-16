export default {
  name: 'vt@page',

  functional: true,

  props: {
    id: String,
  },

  render: (h, { props, data, children }) => {
    const tag = props.tag || 'main';

    data.staticClass = (`vc@page ${data.staticClass || ''}`).trim();

    if (props.id) {
      data.domProps = data.domProps || {};
      data.domProps.id = props.id;
    }
    // if (data.attrs) {
    //   const classes = [];

    //   Object.keys(data.attrs).forEach(key => {
    //     const value = data.attrs[key];

    //     if (typeof value === 'string') classes.push(`vc@${key}`);
    //     else if (value) classes.push(`vc@${key}`);
    //   })

    //   if (classes.length) data.staticClass += ` ${classes.join(' ')}`;
    //   delete data.attrs;
    // }

    return h(tag, data, children);
  }
}