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

    children = children || [];

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

    return h(TagName, data, children);
  }
}
