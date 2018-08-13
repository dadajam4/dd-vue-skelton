<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@row justify-space-between text-center>
      <vt@col col-12>
        <vt@btn color="info" @click="show = !show">toggle</vt@btn>
      </vt@col>
      <vt@col col-12 class="vc@mt-xl">
        <vt@tooltip-fragment>
          <vt@btn flat icon>
            <vt@icon>$ui.icons.cart</vt@icon>
          </vt@btn>
          <vt@tooltip v-model="show" top :open-on-click="false" :open-on-hover="false">
            <span>Programmatic tooltip</span>
          </vt@tooltip>
        </vt@tooltip-fragment>
      </vt@col>
    </vt@row>

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
