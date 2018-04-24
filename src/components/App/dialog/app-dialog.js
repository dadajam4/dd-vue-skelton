export default {
  name: 'vt@app-dialog',

  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      resolved: false,
    }
  },

  computed: {
    type() { return this.data.type },
    body() { return this.data.body },
    title() { return this.data.title },
    maxWidth() { return this.data.maxWidth || 500 },
    scrollable() { return this.data.scrollable === undefined ? true : this.data.scrollable },
    persistent() { return this.data.persistent === undefined ? false : this.data.persistent },
    routable() { return this.data.routable === undefined ? true : this.data.routable },
    ok() { return this.data.ok || 'OK' },
    cancel() { return this.data.cancel || 'キャンセル' },
    isAlert() { return this.type === 'alert' },
    isConfirm() { return this.type === 'confirm' },
    isPrompt() { return this.type === 'prompt' },
    hasCancel() { return this.isConfirm || this.isPrompt },
  },

  watch: {
    $route() {
      if (!this.routable) return;
      this.resolve();
    },
  },

  methods: {
    async resolve(payload) {
      if (this.resolved) return;
      this.resolved = true;

      this.$emit('resolve', payload);
      await this.$refs.dialog.close();
      this.$emit('close');
    },

    onAction(type) {
      if (this.resolved) return;
      let payload;

      if (this.type === 'prompt') {
        payload = type === 'ok' ? this.input : false;
      } else {
        payload = type === 'ok' ? true : false;
      }
      this.resolve(payload);
    },

    resolveEmpty() {
      if (this.resolved) return;
      this.resolve();
    },

    genAction(type) {
      const h = this.$createElement;
      return h('vt@btn', {
        props: {
          textColor: 'info',
        },
        on: {
          click: e => {
            e.stopPropagation();
            this.onAction(type);
          },
        },
        ref: type,
      }, [this[type]]);
    },

    genActions() {
      const h = this.$createElement;
      const actions = [h('vt@spacer')];
      if (this.hasCancel) {
        actions.push(this.genAction('cancel'));
      }
      actions.push(this.genAction('ok'));
      return h('vt@card-actions', {props: {divider: true}}, actions);
    },

    genDialog(children) {
      const h = this.$createElement;

      const bodyChildren = [];
      if (this.body) bodyChildren.push(this.body);
      if (children) bodyChildren.push(children);

      const $body = h('vt@card-text', null, bodyChildren);
      const cardChildren = [$body, this.genActions()];
      if (this.title) {
        cardChildren.unshift(h('vt@card-title', {props: {divider: true}}, [this.title]));
      }

      const $card = h('vt@card', null, cardChildren);

      return h('vt@dialog', {
        props: {
          maxWidth: this.maxWidth,
          persistent: this.persistent,
          scrollable: this.scrollable,
        },
        on: {
          esc: this.resolveEmpty,
          'click-outside-close': this.resolveEmpty,
        },
        ref: 'dialog',
      }, [$card]);
    },
  },

  mounted() {
    this.$refs.dialog.show();

    let $focusTarget;
    if (this.isPrompt) {
      $focusTarget = this.$refs.input;
    } else if (this.hasCancel) {
      $focusTarget = this.$refs.cancel;
    } else {
      $focusTarget = this.$refs.ok;
    }

    this.$nextTick(() => {
      if ($focusTarget) $focusTarget.focus();
    });
  },
}
