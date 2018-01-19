<style lang="scss" scoped>
</style>

<template>
  <vt@app-header fixed :hidden="hidden">
    <vt@toolbar-title>{{title}}</vt@toolbar-title>
    <vt@spacer />
<!--
    <nav>
      <a class="vc@toolbar__trigger vc@toolbar__trigger--active" href="#">ガイド</a>
      <a class="vc@toolbar__trigger" href="#">API</a>
      <a class="vc@toolbar__trigger" href="#">例</a>
      <a class="vc@toolbar__trigger" href="#">エコシステム</a>
      <a class="vc@toolbar__trigger" href="#">言語</a>
      <a class="vc@toolbar__trigger" href="#">ショップ</a>
    </nav>
-->
    <vt@toolbar-side-icon @click.stop="onClickToggleDrawer" />
  </vt@app-header>

</template>

<script>



export default {
  name: 'docs-header',

  props: {
    title: String,
    hidden: Boolean,
  },

  data() {
    return {
    }
  },

  watch: {
  },

  methods: {
    onClickToggleDrawer(e) {
      this.$emit('click-toggle-drawer');
    },
  },

  created() {
  },
}
</script>
