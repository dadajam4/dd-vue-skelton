<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      イベント日程を設定可能です。

      <dl>
        <dt>events</dt>
        <dd>
          イベント日を設定できます。受け付ける値は Array, Object{ value, color }, String のいずれかです。
        </dd>
      </dl>

      <dl>
        <dt>event-color</dt>
        <dd>
          イベント日のカラーを設定可能です。デフォルトは <var>warning</var> です。<br>
          このカラーはオブジェクトでイベント日を指定する場合、 <code>color</code> キーで上書き可能です。
        </dd>
      </dl>
    </template>

    <vt@date-picker-fragment
      cancellable
      holiday-color="red"
      :events="myEvents"
      event-color="indigo"
    >
      <vt@input v-model="picked">
        <vt@icon>$ui.icons.calendar</vt@icon>
      </vt@input>
    </vt@date-picker-fragment>
  </docs-example>
</template>

<script>
export default {
  data() {
    const dt = new Date();
    return {
      picked: null,
      currentYear: dt.getFullYear(),
      currentMonth: dt.getMonth() + 1,
      currentDay: dt.getDate(),
    }
  },

  computed: {
    myEvents() {
      return [
        `${this.currentYear}-${this.currentMonth}-1`,
        `${this.currentYear}-${this.currentMonth}-2`,
        `${this.currentYear}-${this.currentMonth}-3`,
        {
          value: `${this.currentYear}-${this.currentMonth}-15`,
          color: 'green',
        },
      ];
    },
  },
}
</script>
