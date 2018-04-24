import AppAlertDialog from './dialog/AppAlertDialog';
import AppConfirmDialog from './dialog/AppConfirmDialog';
import AppPromptDialog from './dialog/AppPromptDialog';

export default {
  name: 'vt@app-dialog-container',

  components: {
    'my-alert': AppAlertDialog,
    'my-confirm': AppConfirmDialog,
    'my-prompt': AppPromptDialog,
  },

  data() {
    return {
      incrementForId: 0,
      stacks: [],
    }
  },

  methods: {
    getNewId() {
      const id = this.incrementForId;
      this.incrementForId = this.incrementForId + 1;
      return id;
    },
    push(data) {
      this.$util.blurActiveElement();

      return new Promise(resolve => {
        const stack = Object.assign({ id: this.getNewId(), resolve }, data);
        this.stacks.push(stack);
      });
    },
    removeStack(stack) {
      const index = this.stacks.indexOf(stack);
      if (index !== -1) this.stacks.splice(index, 1);
    },
  },

  render(h) {
    const children = this.stacks.map(stack => {
      const $dialog = h(`my-${stack.type}`, {
        props: {
          data: stack,
        },
        on: {
          resolve: e => {
            stack.resolve(e);
          },
          close: () => {
            this.removeStack(stack);
          },
        },
        key: stack.id,
      });
      return $dialog;
    });

    return h('div', {
      staticClass: 'vc@app-dialog-container',
    }, children);
  },
}
