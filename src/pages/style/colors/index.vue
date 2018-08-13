<style lang="scss" scoped>
</style>

<template>
  <vt@page :class="`vc@theme--${theme}`">
    <vt@page-header>Colors</vt@page-header>
    <vt@page-intro>
      Use our iOS integration to style your native iOS applications to be consistent with the <span>hogehoge</span>
    </vt@page-intro>

    <vt@radio-group v-model="theme" row>
      <vt@radio
        v-for="key in this.$ui.theme.keys"
        :key="key"
        :label="key"
        :value="key"
      ></vt@radio>
    </vt@radio-group>

    <dd-example is="context-colors" />
  </vt@page>
</template>

<script>



export default {
  $_anchors,

  head() {
    return {
      title: 'Colors',
    }
  },

  data() {
    return {
      theme: this.$ui.theme.default,
    }
  },
}
</script>
