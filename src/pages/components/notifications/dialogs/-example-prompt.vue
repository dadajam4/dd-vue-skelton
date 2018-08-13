<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      <code>vm.$prompt</code> メソッドをコールする事でプログラムから入力ダイアログを表示できます。
    </template>

    <vt@btn color="info" @click.stop="$prompt()">入力</vt@btn>
    <vt@btn color="info" @click.stop="click2">Promise</vt@btn>
  </docs-example>
</template>

<script>
export default {
  methods: {
    async click2() {
      // const h = this.$createElement;
      const result = await this.$prompt('入力してください', {
        input: {
          props: {
            label: '検索ワード',
            placeholder: 'うまいボー',
          },
          children: [
            h('vt@icon', null, '$ui.icons.search'),
          ],
        },
      });
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
