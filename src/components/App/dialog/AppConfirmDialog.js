import AppDialog from './app-dialog';



export default {
  name: 'vt@app-confirm-dialog',

  mixins: [AppDialog],

  render(h) {
    return this.genDialog();
  },
}
