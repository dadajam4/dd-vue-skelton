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
