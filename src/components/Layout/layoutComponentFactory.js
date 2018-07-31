export default function layoutComponentFactory(name) {
  return {
    name: `vt@${name}`,

    functional: true,

    props: {
      id: String,
      tag: {
        type: String,
        default: 'div',
      }
    },

    render: (h, { props, data, children }) => {
      data.staticClass = (`vc@${name} ${data.staticClass || ''}`).trim();

      if (data.attrs) {
        const classes = [];

        Object.keys(data.attrs).forEach(key => {
          const value = data.attrs[key];

          if (typeof value === 'string') classes.push(`vc@${key}`);
          else if (value) classes.push(`vc@${key}`);
        })

        if (classes.length) data.staticClass += ` ${classes.join(' ')}`;
        delete data.attrs;
      }

      if (props.id) {
        data.domProps = data.domProps || {};
        data.domProps.id = props.id;
      }

      return h(props.tag, data, children);
    }
  }
}
