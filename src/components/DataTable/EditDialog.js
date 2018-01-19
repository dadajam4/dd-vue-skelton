export default {
  name: 'vt@edit-dialog',

  data() {
    return {
      isActive: false,
      isSaving: false,
    }
  },

  props: {
    cancelText: {
      default: 'Cancel',
    },
    lg: Boolean,
    lazy: Boolean,
    saveText: {
      default: 'Save',
    },
    transition: {
      type: String,
      default: 'slide-x-reverse-transition',
    },
  },

  watch: {
    isActive(val) {
      val &&
        this.$emit('open') &&
        setTimeout(this.focus, 50) // Give DOM time to paint

      if (!val) {
        !this.isSaving && this.$emit('cancel')
        this.isSaving && this.$emit('close')
        this.isSaving = false
      }
    }
  },

  methods: {
    cancel() {
      this.isActive = false;
    },
    focus() {
      const input = this.$refs.content.querySelector('input');
      input && input.focus();
    },
    save() {
      this.isSaving = true;
      this.isActive = false;
      this.$emit('save');
    },
    genButton(fn, text) {
      return this.$createElement('vt@btn', {
        props: {
          flat: true,
          color: 'primary',
          // light: true,
        },
        on: { click: fn },
      }, text)
    },
    genActions() {
      return this.$createElement('div', {
        'class': 'vc@small-dialog__actions',
      }, [
        this.genButton(this.cancel, this.cancelText),
        this.genButton(this.save, this.saveText),
      ])
    },
    genContent() {
      return this.$createElement('div', {
        on: {
          keydown: e => {
            e.keyCode === 27 && this.cancel();
            e.keyCode === 13 && this.save();
          }
        },
        ref: 'content',
      }, [this.$slots.input]);
    }
  },

  render(h) {
    return h('vt@menu', {
      'class': 'vc@small-dialog',
      props: {
        contentClass: 'vc@small-dialog__content',
        transition: this.transition,
        origin: 'top right',
        right: true,
        value: this.isActive,
        closeOnContentClick: false,
        lazy: this.lazy,
      },
      on: {
        input: val => (this.isActive = val),
      }
    }, [
      h('a', {
        slot: 'activator',
      }, this.$slots.default),
      this.genContent(),
      this.lg ? this.genActions() : null,
    ])
  }
}