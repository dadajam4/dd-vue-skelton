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
    // offsetTop: 0,
    // scrollHeight: 0,
}

const getDimensionDefaults = () => {
  return Object.assign({}, dimensionDefaults);
}

const dimensionsDefaults = {
  activator: getDimensionDefaults(),
  content: getDimensionDefaults(),
}

const getDimensionsDefaults = () => {
  return Object.assign({}, dimensionsDefaults);
}



export default Object.assign({
  name: 'vt@stackable',

  provide() {
    const data = {
      $parentStack: this,
    };
    return data;
  },

  inject: {
    $appStackContainer: {from: '$appStackContainer'},
    $parentStack: {from: '$parentStack', default: null},
  },

  props: {

    // states
    value: Boolean,

    // activator
    activator: {
      type: [String, Object, Function],
    },
    activatorAction: {
      type: String,
      default: 'toggle',
    },

    // position
    fixed: Boolean,

    // advance
    transition: {
      type: String,
      default: 'vc@menu-transition',
    },
    closeOnEsc: Boolean,
    closeWithRemove: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      innerValue: this.value,
      isExistNode: !this.closeWithRemove || this.value,
      $activator: null,
      zIndex: 0,
      isVisible: false,
      detached: false,
      dimensions: getDimensionsDefaults(),
    }
  },

  computed,
  watch,
  methods,
}, lifecycles);