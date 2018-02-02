<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@text-field
      label="電話番号"
      left-icon="phone"
    ></vt@text-field>

    <vt@text-field
      label="電話番号（クリックコールバック付き）"
      right-icon="phone"
      :right-icon-cb="onClick"
    ></vt@text-field>
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