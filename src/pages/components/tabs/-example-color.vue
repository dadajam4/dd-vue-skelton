<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@tabs color="primary">
      <vt@tabs-item v-for="n in 3" :key="n">
        <vt@tabs-trigger>Item {{n}}</vt@tabs-trigger>
        <vt@tabs-content>
          <p v-for="nn in n" :key="nn">これはタブ{{n}}です。</p>
        </vt@tabs-content>
      </vt@tabs-item>
    </vt@tabs>

    <vt@tabs background-color="secondary" text-color="plain">
      <vt@tabs-item v-for="n in 3" :key="n">
        <vt@tabs-trigger>Item {{n}}</vt@tabs-trigger>
        <vt@tabs-content>
          <p v-for="nn in n" :key="nn">これはタブ{{n}}です。</p>
        </vt@tabs-content>
      </vt@tabs-item>
    </vt@tabs>

    <vt@tabs color="warning" active-color="dark">
      <vt@tabs-item v-for="n in 3" :key="n">
        <vt@tabs-trigger>Item {{n}}</vt@tabs-trigger>
        <vt@tabs-content>
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
