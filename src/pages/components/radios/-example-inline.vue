<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@radio-group
      label="インライン"
      inline
    >
      <vt@radio
        v-for="item in items"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </vt@radio-group>
  </docs-example>
</template>

<script>
export default {
  data() {
    const items = [];
    for (let i = 0; i < 20; i++) {
      items.push({label: `Radio ${i}`, value: `radio-${i}`});
    }
    return {
      items,
    }
  },
}
</script>