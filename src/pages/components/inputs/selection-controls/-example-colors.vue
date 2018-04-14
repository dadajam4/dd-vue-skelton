<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      <code>color</code> 属性で色を指定できます。
    </template>

    <div
      v-for="color in colors"
      :key="color"
    >
      <vt@checkbox :color="color" checked>{{color}}</vt@checkbox>
      <vt@radio :color="color" checked>{{color}}</vt@radio>
      <vt@switch :color="color" checked>{{color}}</vt@switch>
    </div>

  </docs-example>
</template>

<script>
export default {
  data() {
    return {
    }
  },

  computed: {
    colors: () => [
      'indigo',
      'red-darken-3',
      'warning',
    ],
  },
}
</script>