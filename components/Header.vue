<style lang="scss" scoped>
</style>

<template>
  <vt@app-header>
    <vt@toolbar-side-icon @click.stop="onClickToggleDrawer" />
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
  </vt@app-header>

</template>

<script>



export default {
  props: {
    title: String,
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
