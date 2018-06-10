export default function(type) {
  const name = 'vt@date-picker-' + type;

  return {
    name,

    functional: true,

    props: {
      cancellable: Boolean,
    },

    render(h, { data, listeners, parent, props }) {
      const { model } = data;
      const { value } = model;
      const cancellable = props.cancellable;

      const $picker = h('vt@date-picker', {
        props: {
          value,
          cancellable,
        },
        on: {
          input: model.callback,
        },
      });

      return h('vt@' + type, {
        props: {
          adjustActivatorWidth: false,
          offsetY: true,
          switchOffsetOverflow: true,
          closeOnContentClick: false,
          closeOnEsc: true,
          // activatorAction: null,
          // disabled: this.disabled,
          // switchOffsetOverflow: this.switchOffsetOverflow || this.autocomplete || this.multiple,
        },
      }, [$picker]);
    },
  }
}
