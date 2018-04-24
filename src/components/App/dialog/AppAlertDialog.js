import AppDialog from './app-dialog';



export default {
  name: 'vt@app-alert-dialog',

  mixins: [AppDialog],

  render(h) {
    return this.genDialog();
  },
}
