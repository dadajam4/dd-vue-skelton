import Colorable from '~/mixins/color';
import Toggleable from '~/mixins/toggleable';
import Transitionable from '~/mixins/transitionable';



export default {
  name: 'vt@alert',

  mixins: [Colorable, Toggleable, Transitionable],

  props: {
    dismissible: Boolean,
    icon: String,
  },

  data: () => ({
    defaultContextColor: 'error',
  }),

  computed: {
    classes() {
      const classes = this.addContextColorClasses({
        'vc@alert--dismissible': this.dismissible,
        'vc@alert--outline': this.outline,
      });

      return classes;
    },
    computedIcon() {
      if (this.icon || !this.computedContextColor) return this.icon;

      switch (this.computedContextColor) {
        case 'info': return 'info-circle'
        case 'error': return 'warning'
        case 'success': return 'check-circle'
        case 'warning': return 'exclamation'
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