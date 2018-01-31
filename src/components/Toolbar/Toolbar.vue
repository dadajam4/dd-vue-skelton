<script>
import Colorable from '~/mixins/color';


export default {
  name: 'vt@toolbar',

  mixins: [Colorable],

  props: {
    tag: {
      type: String,
      default: 'nav',
    },
  },



  computed: {
    classes() {
      return this.addColorClasses({
        'vc@toolbar': true,
      });
    },

    bodyClasses() {
      return {
        'vc@toolbar__body': true,
      }
    },
  },

  methods: {
  },

  render(h) {
    const children = this.$slots.default;
    // children.forEach(child => {
    //   child.data = child.data || {};
    //   child.data.staticClass = ((child.data.staticClass || '') + ' vc@toolbar__content').trim();
    // });

    return h(this.tag, {class: this.classes}, [
      h('div', {class: this.bodyClasses}, children),
    ]);
  },
}
</script>