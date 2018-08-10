<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@tabs ref="tab">
      <vt@tabs-item v-for="n in 3" :key="n">
        <vt@tabs-trigger>Item {{n}}</vt@tabs-trigger>
        <vt@tabs-content class="vc@text-center">
          <p v-for="nn in n" :key="nn">これはタブ{{n}}です。</p>
        </vt@tabs-content>
      </vt@tabs-item>
    </vt@tabs>
  </docs-example>
</template>

<script>
export default {
}
</script>
