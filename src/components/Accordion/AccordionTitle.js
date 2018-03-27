import Colorable from '~/mixins/color';



export default {
  name: 'vt@accordion-title',

  mixins: [Colorable],

  props: {
    tag: {
      type: String,
      default: 'div',
    },
    icon: String,
    wrap: {
      type: Boolean,
      default: true,
    },
    dense: Boolean,
    accordion: Object,
    contentClass: String,
  },

  computed: {
    classes() {
      return this.addColorClasses({
        'vc@accordion__title': true,
      });
    },
    hasIconSpace() { return this.icon !== undefined },
    hasIcon() { return !!this.icon },
    isStyled() { return this.accordion.styled },
  },

  render(h) {
    const $tileContent = h('vt@tile-content', null, [h('vt@tile-title', {
      staticClass: this.contentClass,
    }, this.$slots.default)]);
    const $angle = h('vt@icon', {
      staticClass: 'vc@accordion__title__angle',
    }, 'angle-down');
    const $angleAction = h('vt@tile-action', null, [$angle])

    const tileChildren = [$tileContent];

    if (this.hasIconSpace || this.isStyled) {
      this.hasIconSpace && tileChildren.unshift(h('vt@tile-action', null, this.hasIcon ? [h('vt@icon', null, this.icon)] : []));
      tileChildren.push($angleAction);
    } else {
      tileChildren.unshift($angleAction);
    }

    const $tile = h('vt@tile', {
      class: this.classes,
      props: {
        tag: this.tag,
        wrap: this.wrap,
        dense: this.dense,
      },
      on: {
        click: e => {
          this.accordion.toggle();
        },
      },
    }, tileChildren);

    return $tile;
  }
}