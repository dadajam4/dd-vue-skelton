<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      <code>vm.$ui.confirm</code> メソッドをコールする事でプログラムから確認ダイアログを表示できます。
    </template>

    <vt@btn color="info" @click.stop="$ui.confirm('This is alert!')">Confirm!!!</vt@btn>
    <vt@btn color="info" @click.stop="click2">Promise</vt@btn>
  </docs-example>
</template>

<script>
export default {
  methods: {
    async click2() {
      const result = await this.$ui.confirm('This is alert!');
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
