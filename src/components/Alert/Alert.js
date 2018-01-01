import Colorable from '~/mixins/colorable';
import Toggleable from '~/mixins/toggleable';
import Transitionable from '~/mixins/transitionable';

export default {
  name: 'vt@alert',

  mixins: [Colorable, Toggleable, Transitionable],

  props: {
    dismissible: Boolean,
    icon: String,
    outline: Boolean,
    type: {
      type: String,
      validator (val) {
        return [
          'info',
          'danger',
          'success',
          'warning'
        ].includes(val)
      }
    }
  },

  data: () => ({
    defaultColor: 'danger'
  }),

  computed: {
    classes() {
      const colorProp = (this.type && !this.color) ? 'type' : 'computedColor';
      const classes = {
        'vc@alert--dismissible': this.dismissible,
        'vc@alert--outline': this.outline
      }

      return this.outline ? this.addTextColorClassChecks(classes, colorProp)
        : this.addBackgroundColorClassChecks(classes, colorProp)
    },
    computedIcon() {
      if (this.icon || !this.type) return this.icon;

      switch (this.type) {
        case 'info': return 'info-circle'
        case 'danger': return 'warning'
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