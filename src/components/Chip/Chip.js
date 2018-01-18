import Colorable from '~/mixins/color';
import Toggleable from '~/mixins/toggleable';

export default {
  name: 'vt@chip',

  mixins: [Colorable, Toggleable],

  props: {
    close: Boolean,
    disabled: Boolean,
    label: Boolean,
    outline: Boolean,

    // Used for selects/tagging
    selected: Boolean,
    sm: Boolean,
    textColor: String,
    value: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      defaultContextColor: this.outline ? void(0) : 'light',
    }
  },

  computed: {
    classes() {
      const classes = this.addColorClasses({
        'vc@chip--disabled': this.disabled,
        'vc@chip--selected': this.selected,
        'vc@chip--label': this.label,
        'vc@chip--outline': this.outline,
        'vc@chip--sm': this.sm,
        'vc@chip--removable': this.close,
      })

      return (this.textColor || this.outline)
        ? this.addColorClasses(classes, this.textColor || this.color)
        : classes
    }
  },

  methods: {
    genClose(h) {
      const data = {
        staticClass: 'vc@chip__close',
        on: {
          click: e => {
            e.stopPropagation();
            this.$emit('input', false);
          }
        }
      };

      return h('div', data, [
        h('vc@icon', 'times-circle')
      ])
    },
    genContent(h) {
      const children = [this.$slots.default];

      this.close && children.push(this.genClose(h));

      return h('span', {
        staticClass: 'vc@chip__content',
      }, children)
    }
  },

  render(h) {
    const data = {
      staticClass: 'vc@chip',
      'class': this.classes,
      attrs: { tabindex: this.disabled ? -1 : 0 },
      directives: [{
        name: 'show',
        value: this.isActive,
      }],
      on: this.$listeners,
    }

    return h('span', data, [this.genContent(h)]);
  }
}