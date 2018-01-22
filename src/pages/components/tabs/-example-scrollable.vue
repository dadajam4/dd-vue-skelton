<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@tabs primary>
      <vt@tabs-item v-for="n in 20" :key="n">
        <vt@tabs-trigger>Item {{n}}</vt@tabs-trigger>
        <vt@tabs-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </vt@tabs-content>
      </vt@tabs-item>
    </vt@tabs>
  </docs-example>
</template>

<script>
export default {
}
</script>