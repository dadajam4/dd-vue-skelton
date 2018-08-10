import Colorable from '~/mixins/colorable';
import Toggleable from '~/mixins/toggleable';
import Transitionable from '~/mixins/transitionable';



export default {
  name: 'vt@alert',

  mixins: [Colorable, Toggleable, Transitionable],

  props: {
    dismissible: Boolean,
    icon: String,
    value: {
      default: true,
    },
    color: {
      type: String,
      default: 'error',
    },
  },

  // data: () => ({
  //   defaultContextColor: 'error',
  // }),

  computed: {
    classes() {
      const classes = this.addColorClasses({
        'vc@alert--dismissible': this.dismissible,
        'vc@alert--outline': this.outline,
      });

      return classes;
    },
    computedIcon() {
      if (this.icon || !this.color) return this.icon;

      switch (this.color) {
        case 'info': return '$ui.icons.info'
        case 'error': return '$ui.icons.error'
        case 'success': return '$ui.icons.success'
        case 'warning': return '$ui.icons.warning'
      }
    }
  },

  render(h) {
    const children = [h('div', {staticClass: 'vc@alert__body'}, this.$slots.default)];

    if (this.computedIcon) {
      children.unshift(h('vt@icon', {
        'class': 'vc@alert__icon'
      }, this.computedIcon));
    }

    if (this.dismissible) {
      const close = h('a', {
        'class': 'vc@alert__dismissible',
        on: { click: () => this.$emit('input', false) }
      }, [
        h('vt@icon', {
          props: {
            right: true,
          }
        }, 'times')
      ])

      children.push(close);
    }

    const alert = h('div', {
      staticClass: 'vc@alert',
      'class': this.classes,
      directives: [{
        name: 'show',
        value: this.isActive,
      }],
      on: this.$listeners,
    }, children)

    if (!this.transition) return alert;

    return h('transition', {
      props: {
        name: this.transition,
        origin: this.origin,
        mode: this.mode,
      }
    }, [alert]);
  }
}
