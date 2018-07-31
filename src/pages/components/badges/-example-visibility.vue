<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <div class="vc@text-center vc@mb-lg" @click="visible = !visible">
      <vt@btn secondary>toggle</vt@btn>
    </div>

    <div class="vc@text-center">
      <vt@badge left v-model="visible">
        <span slot="badge">6</span>
        <vt@icon xl>shopping-cart</vt@icon>
      </vt@badge>

      <vt@badge right class="vc@ml-md" v-model="visible">
        <span slot="badge">88</span>
        <vt@icon xl>shopping-cart</vt@icon>
      </vt@badge>

      <vt@badge class="vc@ml-xl" v-model="visible">
        <span slot="badge">816</span>
        <vt@icon xl>shopping-cart</vt@icon>
      </vt@badge>
    </div>
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    }
  },
}
</script>
