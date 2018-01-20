<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@progress-bar
      :indeterminate="query"
      query
      v-model="value"
      :active="show"
    />
  </docs-example>
</template>

<script>

export default {
  data() {
    return {
      value: 0,
      query: false,
      show: true,
      interval: {},
    }
  },
  methods: {
    queryAndIndeterminate() {
      this.query = true;
      this.show = true;
      this.value = 0;
      let int;

      this.query = false;

      this.interval = setInterval(() => {
        if (this.value === 100) {
          clearInterval(this.interval);
          this.show = false;
          return setTimeout(this.queryAndIndeterminate, 2000);
        }
        this.value += 25;
      }, 1000)
    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    this.queryAndIndeterminate();
  },
}
</script>