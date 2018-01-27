<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@container fluid class="vc@text--center">
      <vt@layout flex wrap row justify-space-between>
        <vt@flex xs12>
          <vt@btn @click="show = !show">toggle</vt@btn>
        </vt@flex>
        <vt@flex xs12 class="vc@m-t--xl">
          <vt@tooltip v-model="show" top>
            <vt@btn icon slot="activator">
              <vt@icon>shopping-cart</vt@icon>
            </vt@btn>
            <span>Programmatic tooltip</span>
          </vt@tooltip>
        </vt@flex>
      </vt@layout>
    </vt@container>

  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
}
</script>