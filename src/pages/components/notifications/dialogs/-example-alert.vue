<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      <code>vm.$ui.alert</code> メソッドをコールする事でプログラムからアラートダイアログを表示できます。
    </template>

    <vt@btn color="info" @click.stop="$ui.alert('This is alert!')">Alert!!!</vt@btn>
    <vt@btn color="info" @click.stop="click2">Promise</vt@btn>
  </docs-example>
</template>

<script>
export default {
  methods: {
    async click2() {
      const result = await this.$ui.alert('This is alert!');
      const body = (
        <div>
          payload: <code>{JSON.stringify(result)}</code>
        </div>
      );
      this.$ui.alert(body);
    },
  },
}
</script>
