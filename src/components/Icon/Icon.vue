<script>



export default {
  name: 'vt@icon',

  functional: true,

  props: {
    sm: Boolean,
    md: Boolean,
    lg: Boolean,
    xl: Boolean,
    left: Boolean,
    right: Boolean,
    rotate: Boolean,
  },



  // computed: {
  //   classes() {
  //     return {
  //       'vc@icon': true,
  //     }
  //   },
  // },



  render(h, { props, data, children = [] }) {
    let iconName = '';
    if (children.length) {
      iconName = children.pop().text;
    } else if (data.domProps && data.domProps.textContent) {
      iconName = data.domProps.textContent;
      delete data.domProps.textContent;
    } else if (data.domProps && data.domProps.innerHTML) {
      iconName = data.domProps.innerHTML;
      delete data.domProps.innerHTML;
    }

    const myClassName = 'vc@icon';

    const classes = {
      [myClassName]                 : true,
      [`${myClassName}-${iconName}`]: true,
      [`${myClassName}--sm`]        : props.sm,
      [`${myClassName}--md`]        : props.md,
      [`${myClassName}--lg`]        : props.lg,
      [`${myClassName}--xl`]        : props.xl,
      [`${myClassName}--left`]      : props.left,
      [`${myClassName}--right`]     : props.right,
      [`${myClassName}--rotate`]    : props.rotate,
    }

    data.staticClass = data.staticClass || '';
    const iconClasses = Object.keys(classes).filter(k => classes[k]).join(' ');
    iconClasses && (data.staticClass += ` ${iconClasses}`);

    return h('i', data, children);
  },
}
</script>