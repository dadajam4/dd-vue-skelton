<script>



const ROTATE_AMMOUNT_CHECKER = /^\d+$/;

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
    rotate: {
      type: [String, Number, Boolean],
    },
  },

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
    const hasLoopRotate = props.rotate === '' || props.rotate === true;
    const hasAmmountRotate = !hasLoopRotate && props.rotate !== false;
    if (hasAmmountRotate) {
      const rotateAmmount = ROTATE_AMMOUNT_CHECKER.test(props.rotate) ? parseInt(props.rotate, 10) + 'deg' : props.rotate;
      data.style = {
        'transform': `rotate(${rotateAmmount})`,
      };
    }

    const classes = {
      [myClassName]: true,
      [`${myClassName}-${iconName}`]: true,
      [`${myClassName}--sm`]: props.sm,
      [`${myClassName}--md`]: props.md,
      [`${myClassName}--lg`]: props.lg,
      [`${myClassName}--xl`]: props.xl,
      [`${myClassName}--left`]: props.left,
      [`${myClassName}--right`]: props.right,
      [`${myClassName}--rotate`]: hasAmmountRotate,
      [`${myClassName}--loop-rotate`]: hasLoopRotate,
      [`${myClassName}--clickable`]: data.on && data.on.click,
    }

    data.staticClass = data.staticClass || '';
    const iconClasses = Object.keys(classes).filter(k => classes[k]).join(' ');
    iconClasses && (data.staticClass += ` ${iconClasses}`);

    return h('i', data, children);
  },
}
</script>
