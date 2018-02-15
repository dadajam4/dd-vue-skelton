<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@select
      label="Search"
      left-icon="search"
      :items="[
        'hogehoge',
        'fugafuga',
      ]"
    >
      <vt@btn slot="leftBtn" primary>Go</vt@btn>
    </vt@select>

    <vt@select
      label="Search"
      left-icon="search"
      :items="[
        'hogehoge',
        'fugafuga',
      ]"
    >
      <vt@btn slot="rightBtn" primary>Go</vt@btn>
    </vt@select>
  </docs-example>
</template>

<script>
export default {
}
</script>