<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      <code>type</code> 属性に <var>month</var> を指定する事で月を選択させる事ができます。<br>
      この場合においても <code>allowed-dates</code> 属性などで許可する範囲を制限できます。
    </template>

    <vt@date-picker-fragment
      cancellable
      type="month"
      :allowed-dates="allowed"
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
    }
  },

  computed: {
    allowed() {
      const dates = [];
      for (let i = 0; i < 6; i++) {
        dates.push(`${this.currentYear - 1}-${i + 7}`);
      }

      for (let i = 0; i < 6; i++) {
        dates.push(`${this.currentYear}-${i + 1}`);
      }
      return dates;
    },
  },
}
</script>
