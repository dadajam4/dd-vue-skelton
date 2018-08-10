export default {
  name: 'vt@page-intro',

  functional: true,

  render: (h, { props, data, children }) => {
    const tag = props.tag || 'section';

    data.staticClass = (`vc@page__intro ${data.staticClass || ''}`).trim();

    if (props.id) {
      data.domProps = data.domProps || {};
      data.domProps.id = props.id;
    }

    return h(tag, data, children);
  }
}
