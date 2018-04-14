<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      ブロックレイアウトで表示させるためには、 <code>inline</code> 属性に <samp>false</samp> を指定します。
    </template>

    <vt@checkbox
      v-for="item in items"
      :key="item.value"
      :value="item.value"
      :inline="false"
    >{{item.label}}</vt@checkbox>

    <vt@radio
      v-for="item in items"
      :key="item.value"
      :value="item.value"
      :inline="false"
    >{{item.label}}</vt@radio>

    <vt@switch
      v-for="item in items"
      :key="item.value"
      :value="item.value"
      :inline="false"
    >{{item.label}}</vt@switch>

  </docs-example>
</template>

<script>
export default {
  computed: {
    items: () => [
      {value: 1, label: 'りんご'},
      {value: 2, label: 'パイナップル'},
    ],
  },
}
</script>