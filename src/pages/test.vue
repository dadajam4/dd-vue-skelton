<style lang="scss" scoped>
@import "./core/index";
</style>

<template>
  <vt@page>
    <vt@page-header>テスト</vt@page-header>
    <vt@page-intro>
      これはページのイントロダクションです。これはページのイントロダクションです。これはページのイントロダクションです。
    </vt@page-intro>

    <vt@page-section title id="はじめに" data-anchor-point>

<!--
      <vt@avatar>
        <img src="~assets/img/avatar/nigaoe_murou_saisei.png" alt="">
      </vt@avatar>

      <vt@avatar :src="{
        default: '~assets/img/avatar/nigaoe_murou_saisei.png',
        desktop: {src: '~assets/img/avatar/boy_1.png', width: 50},
      }" />

      <vt@avatar class="vc@context-color--primary">
        <vt@icon lg>user-circle</vt@icon>
      </vt@avatar>

      <vt@avatar class="vc@layer-color--brand-secondary vc@text-color--shades-white">
        <span class="vc@headline">C</span>
      </vt@avatar>
-->

<!--

            'myVmSomeMethod: this.arg1, this.arg2 | メッセージ',
            'min_value:8 | 8以上でなければ、、',
            'max_value:70 | 70以下でなければ、、',
            {handler: val => (val !== 10 && val !== 20 && val !== 90), message: '10と20と90はダメなんだ'}
-->

    </vt@page-section>

  </vt@page>
</template>

<script>

export default {
  $_anchors,

  head() {
    return {
      title: 'テスト',
    }
  },
}
</script>
