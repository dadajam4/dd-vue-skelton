<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@select
      label="電話番号"
      left-icon="phone"
      :items="[
        '012-3456-7890',
        '03-1234-5678',
      ]"
    />

    <vt@select
      label="電話番号（クリックコールバック付き）"
      right-icon="phone"
      :right-icon-cb="onClick"
      :items="[
        '012-3456-7890',
        '03-1234-5678',
      ]"
    />
  </docs-example>
</template>

<script>
export default {
  methods: {
    onClick(e) {
      alert('Click!');
      console.log(e);
    },
  },
}
</script>