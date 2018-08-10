<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      <code>vm.$confirm</code> メソッドをコールする事でプログラムから確認ダイアログを表示できます。
    </template>

    <vt@btn color="info" @click.stop="$confirm('This is alert!')">Confirm!!!</vt@btn>
    <vt@btn color="info" @click.stop="click2">Promise</vt@btn>
  </docs-example>
</template>

<script>
export default {
  methods: {
    async click2() {
      const result = await this.$confirm('This is alert!');
      const body = (
        <div>
          payload: <code>{JSON.stringify(result)}</code>
        </div>
      );
      this.$alert(body);
    },
  },
}
</script>
