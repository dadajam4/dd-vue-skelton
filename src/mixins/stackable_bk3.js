import { mergeComponentOptions } from '~/util';



export default {
  name: 'vt@stackable',

  props: {
    value: Boolean,
    activator: {
      type: [String, Object, Function],
    },
    slotActivatorVNode: {
      type: Object,
    },
    activatorAction: {
      type: String,
      default: 'toggle',
    },
    transition: {
      type: String,
      default: 'vc@menu-transition',
    },
    hiddenWithRemove: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      innerValue: this.value,
      $activator: null,
    }
  },

  computed: {
    isActive: {
      get() { return this.innerValue },
      set(val) {
        this.innerValue = val;
        this.$emit('input', val);
      },
    },
  },

  watch: {
    value(val) {
      this.innerValue = val;
    },
  },

  mounted() {
    this.setupActivator();
    this.initStack();
    this.$emit('mounted', this);
  },

  deactivated() {
    this.isActive = false;
  },

  beforeDestroy() {
    this.resetActivator();
    this.resetStack();
    this.$emit('beforeDestroy', this);
  },

  beforeDestroy() {
    this.$emit('beforeDestroy', this);
  },

  methods: {
    resetStack() {
      if (!this.$el) return;

      // IE11 Fix
      try {
        this.$el.parentNode.removeChild(this.$el);
      } catch (e) {}
    },

    initStack() {
      if (
        this._isDestroyed
        || !this.$el
      ) return;

      const $target = this.$app.$el;

      if (!$target) {
        console.warn(`Unable to locate target vt@app`, this);
        return;
      }

      $target.insertBefore(
        this.$el,
        $target.firstChild
      )
    },

    getPropActivator() {
      let $activator;
      if (typeof this.activator === 'string') {
        $activator = this.$parent.$el.querySelector(this.activator);
      } else if (typeof this.activator === 'function') {
        $activator = this.activator(this);
      } else {
        $activator = this.activator.$el || this.activator;
      }
      return $activator;
    },

    setupActivator() {
      this.$activator = this.activator ? this.getPropActivator() : this.slotActivatorVNode && this.slotActivatorVNode.elm;

      if (!this.$activator || this.$activator.__ddActivatorClickCallBack) return;
      const callback = e => this[this.activatorAction](e);
      this.$activator.__ddActivatorClickCallBack = callback;
      this.$activator.addEventListener('click', callback, false);
    },

    resetActivator() {
      if (this.$activator && this.$activator.__ddActivatorClickCallBack) {
        this.$activator.removeEventListener('click', this.$activator.__ddActivatorClickCallBack, false);
        this.$activator.__ddActivatorClickCallBack = null;
        delete this.$activator.__ddActivatorClickCallBack;
      }
    },

    toggle(e) {
      this.isActive = !this.isActive;
    },

    genTransition(children) {
      const h = this.$createElement;
      return h('transition', {
        props: {
          name: this.transition,
        },
      }, children);
    },

    genStack(tag, data, children) {
      const h = this.$createElement;
      const $stack = (!this.hiddenWithRemove || this.isActive) && h(tag, mergeComponentOptions({
        staticClass: 'vc@app-stack',
        props: {
          value: this.isActive,
          transition: this.transition,
          hiddenWithRemove: this.hiddenWithRemove,
        },

        directives: [
          {name: 'show', value: this.isActive},
        ],
      }, data), children);

      return this.genTransition([$stack]);
    },
  },
}