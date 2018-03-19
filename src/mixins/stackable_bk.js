export default {
  inject: ['$appStackContainer'],

  props: {
    value: Boolean,
    transition: {
      type: String,
      default: 'vc@fade',
    },
    leaveWithRemove: {
      type: Boolean,
      default: true,
    },
    // stackLeft: Number,
    // stackRight: Number,
    // stackTop: Number,
    // stackBottom: Number,
    // stackWidth: Number,
    // stackHeight: Number,
  },

  data() {
    return {
      innerValue: this.value,
      stackVisible: false,
      $content: null,
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
    isActiveOrVisible() { return this.isActive || this.stackVisible },
  },

  watch: {
    value(val) {
      this.isActive = val;
    },
    innerValue(val) {
      this.$emit('activate', val);
    },
  },

  methods: {
    genTransition(children) {
      return this.$createElement('transition', {
        props: {
          name: this.transition,
        },

        on: {
          'before-enter': e => {
            this.stackVisible = true;
            this.$emit('activate');
          },
          'after-leave': e => {
            this.stackVisible = false;
            this.$emit('activate');
          },
        },
      }, children);
    },

    renderContext(h) {
      const vnode = this.render(this.$createElement);
      if (vnode) {
        vnode.data.directives = vnode.data.directives || [];
        if (!vnode.data.directives.find(directive => directive.name === 'show')) {
          vnode.data.directives.push({name: 'show', value: this.isActive});
        }
      }
      return this.genTransition([vnode]);
    },
  },

  created() {
    this.$appStackContainer && this.$appStackContainer.attach(this);
  },

  beforeDestroy() {
    this.$appStackContainer && this.$appStackContainer.detach(this);
  },

  render(h) {
    if (this.isActive) this.stackVisible = true;
    this.$emit('render');

    if (this.renderActivator) {
      return this.renderActivator(h);
    }
  },
}