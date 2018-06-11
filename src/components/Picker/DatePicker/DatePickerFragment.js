export default {
  name: 'vt@date-picker-fragment',

  functional: true,

  props: {
    // type: {
    //   type: String,
    //   default: 'menu',
    // },
    cancellable: Boolean,
    dialog: Boolean,
  },

  render(h, { children, data, props }) {
    const { attrs } = data;
    const $input = children.find(c => c.componentOptions && c.componentOptions.tag === 'vt@input');
    const inputProps = $input.componentOptions.propsData;
    const inputListeners = $input.componentOptions.listeners;
    const { value } = inputProps;
    const { dialog, cancellable } = props;
    const type = dialog ? 'dialog' : 'menu';

    if (inputProps.readonly === undefined) inputProps.readonly = true;

    const $picker = h('vt@date-picker', {
      props: {
        value,
        cancellable,
        ...attrs,
      },
      on: {
        input: inputListeners.input,
      },
    });

    const $stack = h('vt@' + type, {
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

    const $stackFragment = h(`vt@${type}-fragment`, {}, [$input, $stack]);

    return $stackFragment;
  },
}
