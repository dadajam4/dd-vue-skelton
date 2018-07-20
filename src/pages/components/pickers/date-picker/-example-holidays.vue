<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      休日表示設定をいくつか行う事が可能です。

      <dl>
        <dt>holidays</dt>
        <dd>
          カスタムで休日を設定できます。受け付ける値は String, Array, Function のいずれかです。
        </dd>
      </dl>

      <dl>
        <dt>holiday-weeks</dt>
        <dd>
          休日となる固定曜日を設定可能です。
        </dd>
      </dl>

      <dl>
        <dt>holiday-color</dt>
        <dd>
          休日を表記する際のカラーを指定可能です。
        </dd>
      </dl>
    </template>

    <vt@date-picker-fragment
      cancellable
      holiday-color="red"
      :holiday-weeks="[0, 6]"
      :holidays="info => info.day > 25"
    >
      <vt@input v-model="picked">
        <vt@icon>calendar</vt@icon>
      </vt@input>
    </vt@date-picker-fragment>
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      picked: null,
    }
  },
}
</script>
