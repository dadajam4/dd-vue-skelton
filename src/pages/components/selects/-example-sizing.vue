<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@select
      label="サイズ小"
      name="input"
      placeholder="サイズ小"
      sm
      prefix="【sm】"
      right-icon="phone"
      :items="items"
    />

    <vt@select
      label="サイズ大"
      name="input"
      placeholder="サイズ大"
      lg
      suffix="【lg】"
      :items="items"
    >
      <vt@btn slot="leftBtn" secondary><vt@icon>search</vt@icon></vt@btn>
    </vt@select>

  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      items: [
        '項目1',
        '項目2',
        '項目3',
      ],
    }
  },
}
</script>