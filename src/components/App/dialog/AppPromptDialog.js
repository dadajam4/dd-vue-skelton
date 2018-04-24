import AppDialog from './app-dialog';



export default {
  name: 'vt@app-prompt-dialog',

  mixins: [AppDialog],

  data() {
    return {
      input: null,
    }
  },

  computed: {
    inputData() { return this.data.input || {} },
  },

  methods: {
    genForm() {
      const h = this.$createElement;
      const $input = h('vt@input', {
        props: Object.assign({
          value: this.input,
        }, this.inputData.props),
        on: {
          input: e => {
            this.input = e;
          },
        },
        ref: 'input',
      }, this.inputData.children || []);
      const $form = h('form', {
        on: {
          submit: e => {
            e.preventDefault();
            this.resolve(this.input);
          },
        },
      }, [$input]);
      return $form;
    },
  },

  render(h) {
    return this.genDialog(this.genForm());
  },
}
