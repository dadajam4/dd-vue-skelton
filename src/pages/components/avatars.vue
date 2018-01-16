<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Avatars</vt@page-header>
    <vt@page-intro>
      ほげほげ
    </vt@page-intro>

    <vt@page-section title id="standard-display" data-anchor-point>
      <vt@slider
        thumb-label
        min="0"
        max="240"
        v-model="size"
        label="size"
        :thumb-label-assist="size => size + 'px'"
      />
      <vt@switch :label="tile ? 'tile' : 'circle'" v-model="tile" />

      <vt@avatar :size="size" :tile="tile">
        <img src="~assets/img/avatar/nigaoe_murou_saisei.png" alt="">
      </vt@avatar>
    </vt@page-section>

    <vt@page-section title id="icon-and-text" data-anchor-point>
      <vt@avatar class="vc@context-color--primary">
        <vt@icon lg>user-circle</vt@icon>
      </vt@avatar>

      <vt@avatar class="vc@layer-color--brand-secondary vc@text-color--shades-white">
        <span class="vc@headline">C</span>
      </vt@avatar>
    </vt@page-section>
  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Avatars',
    }
  },

  data() {
    return {
      size: 56,
      tile: false,
    }
  },

  computed: {
  },

  methods: {
  },

  created() {
  },
}
</script>
