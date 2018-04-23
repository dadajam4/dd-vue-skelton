import computed from './stack-computed';
import watch from './stack-watchers';
import methods from './stack-methods';
import lifecycles from './stack-lifecycles';



const dimensionDefaults = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: 0,
  height: 0,
}

const getDimensionDefaults = () => {
  return Object.assign({}, dimensionDefaults);
}

const getDimensionsDefaults = () => {
  return {
    activator: getDimensionDefaults(),
    content: getDimensionDefaults(),
  }
}

const provide = function() {
  const data = {
    $parentStack: this,
  };
  return data;
}

const inject = {
  $appStackContainer: {from: '$appStackContainer'},
  $parentStack: {from: '$parentStack', default: null},
};

const props = {

  // states
  value: Boolean,
  disabled: Boolean,

  // activator
  activator: {
    type: [String, Object, Function],
  },
  activatorAction: {
    type: String,
    default: 'toggle',
  },
  openOnClick: {
    type: Boolean,
    default: true,
  },
  openOnHover: Boolean,
  openHoverDelay: {
    type: [String, Number],
    default: 0,
  },
  closeHoverDelay: {
    type: [String, Number],
    default: 200,
  },
  contextmenu: Boolean,

  // position
  fixed: Boolean,
  absolute: Boolean,
  top: Boolean,
  left: Boolean,
  right: Boolean,
  bottom: Boolean,
  offsetX: Boolean,
  offsetY: Boolean,
  x: [String, Number],
  y: [String, Number],
  nudgeTop: [String, Number],
  nudgeBottom: [String, Number],
  nudgeLeft: [String, Number],
  nudgeRight: [String, Number],
  allowOverflow: Boolean,
  switchOffsetOverflow: Boolean,
  adjustActivatorCenter: Boolean,
  overflowMargin: {
    type: [String, Number],
    default: 20,
  },

  // size
  adjustActivatorWidth: {
    type: Boolean,
    default: true,
  },
  minWidth: [String, Number],
  maxWidth: [String, Number],
  nudgeWidth: [String, Number],

  // advance
  transition: {
    type: String,
    default: 'vc@menu-transition',
  },
  origin: {
    type: String,
    default: 'top left',
  },
  closeOnEsc: Boolean,
  closeOnContentClick: {
    type: Boolean,
    default: true,
  },
  closeWithRemove: {
    type: Boolean,
    default: false,
  },
  closeOnOutsideClick: {
    type: Boolean,
    default: true,
  },
  backdrop: {
    type: Boolean,
  },
};

const data = function() {
  return {
    innerValue: this.value,
    isExistNode: !this.closeWithRemove || this.value,
    $activator: null,
    absoluteX: 0,
    absoluteY: 0,
    zIndex: 0,
    isVisible: false,
    contentIsActive: false,
    detached: false,
    dimensions: getDimensionsDefaults(),
    pageYOffset: 0,
    delayTimers: [],
  }
}

export default function(type) {
  const mixin = Object.assign({
    name: `vt@${type}-stackable`,
    provide,
    inject,
    props,
    data,
    computed,
    watch,
    methods,
  }, lifecycles);

  return mixin;
}
