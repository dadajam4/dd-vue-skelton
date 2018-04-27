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
          <vt@tooltip-fragment>
            <vt@btn flat icon>
              <vt@icon>shopping-cart</vt@icon>
            </vt@btn>
            <vt@tooltip v-model="show" top :open-on-click="false" :open-on-hover="false">
              <span>Programmatic tooltip</span>
            </vt@tooltip>
          </vt@tooltip-fragment>
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
