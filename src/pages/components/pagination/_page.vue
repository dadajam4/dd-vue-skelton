<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Pagination</vt@page-header>
    <vt@page-intro>
      Use our iOS integration to style your native iOS applications to be consistent with the <span>hogehoge</span>
    </vt@page-intro>

    <vt@page-section title id="default" data-anchor-point>
      <div class="vc@text--center">
        <vt@pagination :length="6" v-model="page1"></vt@pagination>
      </div>
    </vt@page-section>

    <vt@page-section title id="long" data-anchor-point>
      <div class="vc@text--center">
        <vt@pagination :length="15" v-model="page2"></vt@pagination>
      </div>
    </vt@page-section>

    <vt@page-section title id="limit" data-anchor-point>
      <div class="vc@text--center">
        <vt@pagination :length="15" v-model="page2" total-visible="5"></vt@pagination>
      </div>
    </vt@page-section>

    <vt@page-section title id="round" data-anchor-point>
      <div class="vc@text--center">
        <vt@pagination :length="6" v-model="page1" circle></vt@pagination>
      </div>
    </vt@page-section>

    <vt@page-section title id="disabled" data-anchor-point>
      <div class="vc@text--center">
        <vt@pagination :length="6" v-model="page1" disabled></vt@pagination>
      </div>
    </vt@page-section>

    <vt@page-section title id="no-model" data-anchor-point>
      <div class="vc@text--center">
        <vt@pagination :length="6"></vt@pagination>
      </div>
    </vt@page-section>

    <vt@page-section title id="routable" data-anchor-point>
      <div class="vc@text--center">
        <vt@pagination :length="6" routable></vt@pagination>
      </div>

      <div class="vc@text--center">
        <vt@pagination :length="6" :routable="{query: 'fuga'}"></vt@pagination>
      </div>

      <div class="vc@text--center">
        <vt@pagination :length="6" :routable="{base: '/components/pagination', params: 'page'}"></vt@pagination>
      </div>
    </vt@page-section>
  </vt@page>
</template>

<script>
// import themes from '~~/config/css/themes';

// const TEXT_COLORS = themes['color-keys'].text;



export default {
  $_anchors,

  head() {
    return {
      title: 'Pagination',
    }
  },

  data() {
    return {
      page1: 1,
      page2: 1,
    }
  },

  computed: {
  },

  methods: {
  },

  created() {
  },

  mounted() {
  },

  beforeDestroy() {
  },
}
</script>
