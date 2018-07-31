<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      <code>allowed-dates</code> 属性を利用する事で選択可能な日付を限定できます。 <br>
      String, Array, Function のいずれかを利用してください。
      <code>ex. ['2018-3-1', '2018-1', ...] or info => (info.value === '2012-02-11')</code>
    </template>

    <vt@row>
      <vt@col v-bind="columnBinding">
        <vt@date-picker-fragment
          cancellable
          :allowed-dates="`${currentYear}-${currentMonth}`"
        >
          <vt@input v-model="picked1">
            <vt@icon>calendar</vt@icon>
          </vt@input>
        </vt@date-picker-fragment>
      </vt@col>
      <vt@col v-bind="columnBinding">
        <vt@date-picker-fragment
          cancellable
          :allowed-dates="allowed2"
        >
          <vt@input v-model="picked2">
            <vt@icon>calendar</vt@icon>
          </vt@input>
        </vt@date-picker-fragment>
      </vt@col>
      <vt@col v-bind="columnBinding">
        <vt@date-picker-fragment
          cancellable
          :allowed-dates="allowed3"
        >
          <vt@input v-model="picked3">
            <vt@icon>calendar</vt@icon>
          </vt@input>
        </vt@date-picker-fragment>
      </vt@col>
    </vt@row>
  </docs-example>
</template>

<script>
export default {
  data() {
    const dt = new Date();
    return {
      picked1: null,
      picked2: null,
      picked3: null,
      currentYear: dt.getFullYear(),
      currentMonth: dt.getMonth() + 1,
      currentDay: dt.getDate(),
    }
  },

  computed: {
    columnBinding() {
      return {
        'col-12': true,
        'col-sm-6': true,
        'col-md-4': true,
      }
    },
    allowed1() { return `${this.currentYear}-${this.currentMonth}` },
    allowed2() {
      const dates = [];
      for (let i = 0; i < 10; i++) {
        dates.push(`${this.currentYear}-${this.currentMonth}-${i + 1}`);
      }
      return dates;
    },
  },
  methods: {
    allowed3(info) {
      return info.week !== 0 && info.day % 2 === 0
    },
  },
}
</script>
