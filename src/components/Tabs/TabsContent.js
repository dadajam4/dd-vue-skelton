export default {
  name: 'vt@tabs-content',

  props: {
    id: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    transition: {
      type: [Boolean, String],
      default: 'vc@tab-transition',
    },
    reverseTransition: {
      type: [Boolean, String],
      default: 'vc@tab-reverse-transition',
    },
  },

  data() {
    return {
      isActive: false,
      isReverse: false,
    }
  },

  computed: {
    classes() {
      return {
        'vc@tabs__content': true,
      }
    },

    computedTransition() {
      return this.isReverse ? this.reverseTransition : this.transition;
    },
  },

  methods: {
    toggle(isActive, hasTransition, isReverse) {
      this.isReverse = isReverse;
      this.$el.style.transition = !hasTransition ? 'none' : null;
      this.isActive = isActive;
    },
  },

  render(h) {
    const $content = h('div', {
      class: this.classes,
      attrs: {
        id: this.id,
      },
      directives: [{
        name: 'show',
        value: this.isActive,
      }],
    }, [this.$slots.default]);

    return h('transition', {
      props: { name: this.computedTransition },
    }, [$content]);
  },
}