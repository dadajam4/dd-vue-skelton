<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
    </template>

    <vt@card style="display: inline-block;">
      <vt@calendar
        v-model="date1"
        picker
      />
    </vt@card>
    <pre><code>{{date1}}</code></pre>

    <div class="vc@m-t--lg">
      <vt@calendar
        v-model="date2"
        min="2018-5-2"
        max="2018-5-25"
        allowed-dates="2018-5-6"
      />
    </div>
    <pre><code>{{date2}}</code></pre>

  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      date1: null,
      date2: '2018-04',
      selects1: ['2018-5-10'],
    }
  },
}
</script>
