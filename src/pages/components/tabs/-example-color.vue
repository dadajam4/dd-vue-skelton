<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@tabs primary>
      <vt@tabs-item v-for="n in 3" :key="n">
        <vt@tabs-trigger>Item {{n}}</vt@tabs-trigger>
        <vt@tabs-content>
          <p v-for="nn in n">これはタブ{{n}}です。</p>
        </vt@tabs-content>
      </vt@tabs-item>
    </vt@tabs>

    <vt@tabs background-color="indigo" text-color="shades-white">
      <vt@tabs-item v-for="n in 3" :key="n">
        <vt@tabs-trigger>Item {{n}}</vt@tabs-trigger>
        <vt@tabs-content>
          <p v-for="nn in n">これはタブ{{n}}です。</p>
        </vt@tabs-content>
      </vt@tabs-item>
    </vt@tabs>

    <vt@tabs warning active-color="shades-black">
      <vt@tabs-item v-for="n in 3" :key="n">
        <vt@tabs-trigger>Item {{n}}</vt@tabs-trigger>
        <vt@tabs-content>
          <p v-for="nn in n">これはタブ{{n}}です。</p>
        </vt@tabs-content>
      </vt@tabs-item>
    </vt@tabs>
  </docs-example>
</template>

<script>
export default {
}
</script>