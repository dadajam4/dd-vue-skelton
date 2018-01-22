import BackgroundColorable from '~/mixins/color/backgroundColorable';



export default {
  name: 'vt@tabs-trigger',

  mixins: [BackgroundColorable],

  props: {
    id: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    activeColor: String,
  },

  data() {
    return {
      isActive: false,
    }
  },

  computed: {
    classes() {
      return {
        'vc@tabs__trigger': true,
        'vc@tabs__trigger--active': this.isActive,
      }
    },
  },

  methods: {
    onClick(e) {
      e.preventDefault();
      this.$emit('click', this);
    },

    toggle(isActive, hasTransition) {
      this.$refs.bar.style.transition = !hasTransition ? 'none' : null;
      this.isActive = isActive;
    },
  },

  render(h) {
    const $bar = h('span', {
      staticClass: 'vc@tabs__trigger__bar',
      class: this.getBackgroundColorClasses('activeColor'),
      ref: 'bar',
    });

    return h('a', {
      class: this.classes,
      attrs: {
        href: '#' + this.id,
      },
      on: {
        click: e => this.onClick(e),
      },
    }, [this.$slots.default, $bar]);
  },
}