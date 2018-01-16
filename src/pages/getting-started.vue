<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Getting Started</vt@page-header>
    <vt@page-intro>
      これはページのイントロダクションです。これはページのイントロダクションです。これはページのイントロダクションです。
    </vt@page-intro>

    <vt@page-section title id="はじめに" data-anchor-point>
      <p>コンテンツが入ります</p>
      <p v-for="size in [10, 12, 14, 16, 20, 32, 56, 100]" :key="size" :style="{fontSize: size + 'px'}">M
        <vt@icon>github</vt@icon>
      </p>

      <div class="vc@context--primary">あいうえお</div>
    </vt@page-section>
  </vt@page>
</template>

<script>

export default {
  $_anchors,

  head() {
    return {
      title: 'Getting Started',
    }
  },

  data() {
    return {
    }
  },
}
</script>
