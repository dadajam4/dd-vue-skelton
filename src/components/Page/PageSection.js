import { capitalize } from '~/helpers';



export default {
  name: 'vt@page-section',

  functional: true,

  props: {
    id: String,
    title: String,
  },

  render: (h, { props, data, children, slots }) => {
    let title;

    if (props.title !== undefined) {
      title = props.title || slots().header;
      if (!title && props.id) {
        title = capitalize(props.id.replace(/-/g, ' '));
      }
    } else {
      title = slots().header;
    }

    if (title) {
      const TitleTag = props.titleTag || 'h2';
      children.unshift(
        <TitleTag class="vc@page__section-header">{title}</TitleTag>
      );
    }

    const TagName = props.tag || 'section';

    data.staticClass = (`vc@page__section ${data.staticClass || ''}`).trim();

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

    return h(TagName, data, children);
  }
}