import Colorable from '~/mixins/colorable';



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
    activeIconClass: String,
    to: true,
    href: true,
    linkActiveClass: String,
  },

  computed: {
    classes() {
      return this.addColorClasses({
        'vc@accordion__title': true,
      });
    },
    hasIconSpace() { return this.icon !== undefined },
    hasIcon() { return !!this.icon },
    isStyled() { return this.accordion.isStyled },
    isActive() { return this.accordion.isActive },
    isNowrap() { return this.accordion.isTitleNowrap || !this.wrap },
    isWrap() { return !this.isNowrap },
    hasLink() { return !!(this.to || this.href) },
  },

  render(h) {
    const $tileContent = h('vt@tile-content', null, [h('vt@tile-title', {
      staticClass: this.contentClass,
    }, this.$slots.default)]);
    const $angle = h('vt@icon', {
      staticClass: 'vc@accordion__title__angle',
    }, '$ui.icons.expand');
    const $angleAction = h('vt@tile-action', null, [$angle])

    const tileChildren = [$tileContent];

    if (this.hasIconSpace || this.isStyled) {
      if (this.hasIconSpace) {
        const actionChildren = this.hasIcon ? [h('vt@icon', {
          staticClass: this.isActive && this.activeIconClass,
        }, this.icon)] : [];
        tileChildren.unshift(h('vt@tile-action', null, actionChildren));
      }
      tileChildren.push($angleAction);
    } else {
      tileChildren.unshift($angleAction);
    }

    const $tile = h('vt@tile', {
      class: this.classes,
      props: {
        tag: this.tag,
        wrap: this.isWrap,
        dense: this.dense,
        to: this.to,
        href: this.href,
        activeClass: this.linkActiveClass,
      },
      nativeOn: {
        click: e => {
          this.accordion.toggle();
          this.$emit('click', e);
        },
      },
      on: {
        click: e => {},
      },
      // on: {
      //   click: e => {
      //     this.accordion.toggle();
      //   },
      // },
    }, tileChildren);

    return $tile;
  }
}
