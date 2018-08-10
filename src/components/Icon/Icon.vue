<script>
import { getObjectValueByPath } from '~/util';

const ICONS_PREFIX = '$ui.icons.';
const ROTATE_AMMOUNT_CHECKER = /^\d+$/;

const FA5_PREFIXES = ['fas', 'far', 'fal', 'fab'];
function isFontAwesome5(iconType) {
  return FA5_PREFIXES.some(val => iconType.includes(val))
}

export default {
  name: 'vt@icon',

  functional: true,

  props: {
    xs: Boolean,
    sm: Boolean,
    md: Boolean,
    lg: Boolean,
    xl: Boolean,
    xxl: Boolean,
    left: Boolean,
    right: Boolean,
    rotate: {
      type: [String, Number, Boolean],
    },
  },

  render(h, { parent, props, data, children = [] }) {
    const newChildren = [];
    let iconType, iconName = '';
    if (children.length) {
      iconName = children.pop().text;
    } else if (data.domProps && data.domProps.textContent) {
      iconName = data.domProps.textContent;
      delete data.domProps.textContent;
    } else if (data.domProps && data.domProps.innerHTML) {
      iconName = data.domProps.innerHTML;
      delete data.domProps.innerHTML;
    }

    if (iconName.startsWith(ICONS_PREFIX)) {
      iconName = getObjectValueByPath(parent, iconName, iconName);
    }

    const delimiterIndex = iconName.indexOf('-');
    const isCustomIcon = delimiterIndex > -1;
    if (isCustomIcon) {
      iconType = iconName.slice(0, delimiterIndex);
      if (isFontAwesome5(iconType)) iconType = '';
    } else {
      iconType = 'material-icons';
      newChildren.push(iconName);
    }

    const myClassName = 'vc@icon';
    const hasSpin = props.rotate === '' || props.rotate === true;
    const hasRotate = !hasSpin && props.rotate !== false;
    if (hasRotate) {
      const rotateAmmount = ROTATE_AMMOUNT_CHECKER.test(props.rotate) ? parseInt(props.rotate, 10) + 'deg' : props.rotate;
      data.style = {
        'transform': `rotate(${rotateAmmount})`,
      };
    }

    const classes = {
      [myClassName]: true,
      'notranslate': true,
      [iconName]: isCustomIcon,
      [iconType]: true,
      [`${myClassName}--xs`]: props.xs,
      [`${myClassName}--sm`]: props.sm,
      [`${myClassName}--md`]: props.md,
      [`${myClassName}--lg`]: props.lg,
      [`${myClassName}--xl`]: props.xl,
      [`${myClassName}--xxl`]: props.xxl,
      [`${myClassName}--left`]: props.left,
      [`${myClassName}--right`]: props.right,
      [`${myClassName}--rotate`]: hasRotate,
      [`${myClassName}--spin`]: hasSpin,
      [`${myClassName}--clickable`]: data.on && data.on.click,
    }

    data.staticClass = data.staticClass || '';
    const iconClasses = Object.keys(classes).filter(k => classes[k]).join(' ');
    iconClasses && (data.staticClass += ` ${iconClasses}`);

    return h('i', data, newChildren);
  },
}
</script>
