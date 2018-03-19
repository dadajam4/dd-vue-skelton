import Menuable from '~/mixins/menuable';



export default {
  name: 'vt@menu',

  mixins: [Menuable],

  props: {
    transition: {
      type: String,
      default: 'vc@menu-transition',
    },
  },

  computed: {
    classes() {
      return {
        'vc@menu': true,
        'vc@menu--active': this.isActive,
      }
    },
  },

  methods: {
    render(h) {
      return h('div', {
        class: this.classes,
      }, this.$slots.default);
    },
  },
}