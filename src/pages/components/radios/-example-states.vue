<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@radio-group
      label="Group disabled"
      name="radio"
      disabled
    >
      <vt@radio label="Radio 1" value="radio-1" />
      <vt@radio label="Radio 2" value="radio-2" />
    </vt@radio-group>

    <vt@radio-group
      label="Item disabled"
      name="radio"
    >
      <vt@radio label="Radio 1" value="radio-1" disabled />
      <vt@radio label="Radio 2" value="radio-2" />
    </vt@radio-group>

    <vt@radio-group
      label="Group read only"
      name="radio"
      readonly
    >
      <vt@radio label="Radio 1" value="radio-1" />
      <vt@radio label="Radio 2" value="radio-2" />
    </vt@radio-group>

    <vt@radio-group
      label="Item read only"
      name="radio"
    >
      <vt@radio label="Radio 1 (readonly)" value="radio-1" readonly />
      <vt@radio label="Radio 2" value="radio-2" />
    </vt@radio-group>
  </docs-example>
</template>

<script>
export default {
}
</script>