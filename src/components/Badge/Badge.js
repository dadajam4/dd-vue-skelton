// Mixins
import Colorable from '~/mixins/color';
import Toggleable from '~/mixins/toggleable';



export default {
  name: 'vt@badge',

  mixins: [Colorable, Toggleable],

  props: {
    bottom: Boolean,
    layerColor: {
      type: String,
      default: 'brand-primary',
    },
    left: Boolean,
    overlap: Boolean,
    transition: {
      type: String,
      default: 'vc@fab-transition',
    },
    value: {
      default: true,
    }
  },

  computed: {
    classes() {
      return {
        'vc@badge--bottom': this.bottom,
        'vc@badge--left': this.left,
        'vc@badge--overlap': this.overlap,
      }
    },
  },

  render(h) {
    const isClickable = !!this.$listeners['click-badge'];
    const badgeTag    = isClickable ? 'button' : 'span';
    const badgeOption = {
      staticClass: 'vc@badge__badge' + (isClickable ? ' vc@badge__badge--clickable' : ''),
      'class': this.addColorClasses(),
      attrs: this.attrs,
      directives: [{
        name: 'show',
        value: this.isActive
      }]
    };
    if (isClickable) {
      badgeOption.domProps = {type: 'button'}
      badgeOption.on = {
        click: e => {
          return this.$emit('click-badge', e);
        },
      };
    }

    const badge = this.$slots.badge ? [h(badgeTag, badgeOption, this.$slots.badge)] : null;

    return h('span', {
      staticClass: 'vc@badge',
      'class': this.classes,
    }, [
      this.$slots.default,
      h('transition', {
        props: {
          name: this.transition,
        }
      }, badge)
    ])
  }
}