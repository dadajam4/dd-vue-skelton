<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      ラベルはprops、もしくはslotで渡す事ができます。
    </template>

    <vt@input
      label="propsでのラベル"
    />

    <vt@input>
      <template slot="label">
        <vt@tooltip-fragment>
          <span>slotでのラベル</span>
          <vt@tooltip top>htmlやコンポーネントタグが利用できます</vt@tooltip>
        </vt@tooltip-fragment>
      </template>
    </vt@input>
  </docs-example>
</template>

<script>
export default {
}
</script>