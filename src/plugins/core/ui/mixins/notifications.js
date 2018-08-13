export default {
  name: 'vt@ui-notifications',

  methods: {
    alert() {
      return this.$app.alert(...arguments);
    },
    confirm() {
      return this.$app.confirm(...arguments);
    },
    prompt() {
      return this.$app.prompt(...arguments);
    },
  },
}
