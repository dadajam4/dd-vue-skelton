<style lang="scss" scoped>
</style>

<template>
  <div>
    <header class="vc@page-header">
      <h1 class="vc@page-header__inner vc@page__container">Breadcrumbs</h1>
    </header>

    <main class="vc@page">
      <div class="vc@page__container">
        <p class="vc@page__introduction">ほげほげ</p>
      </div>

      <section id="text-dividers" class="vc@page__section vc@page__container" data-anchor-point>
        <h2>Text dividers</h2>

        <vt@breadcrumb>
          <vt@breadcrumb-item>Dashbord</vt@breadcrumb-item>
          <vt@breadcrumb-item>Link1</vt@breadcrumb-item>
          <vt@breadcrumb-item disabled>Link2</vt@breadcrumb-item>
        </vt@breadcrumb>

        <vt@breadcrumb divider="-">
          <vt@breadcrumb-item>Dashbord</vt@breadcrumb-item>
          <vt@breadcrumb-item>Link1</vt@breadcrumb-item>
          <vt@breadcrumb-item disabled>Link2</vt@breadcrumb-item>
        </vt@breadcrumb>

        <vt@breadcrumb>
          <vt@breadcrumb-item v-for="n in 20" :key="n">Link{{n}}</vt@breadcrumb-item>
        </vt@breadcrumb>
      </section>

      <section id="icon-dividers" class="vc@page__section vc@page__container" data-anchor-point>
        <h2>Icon dividers</h2>

        <vt@breadcrumb>
          <vt@icon slot="divider">arrow-right</vt@icon>
          <vt@breadcrumb-item>Dashbord</vt@breadcrumb-item>
          <vt@breadcrumb-item>Link1</vt@breadcrumb-item>
          <vt@breadcrumb-item disabled>Link2</vt@breadcrumb-item>
        </vt@breadcrumb>

        <vt@breadcrumb>
          <vt@icon slot="divider">angle-right</vt@icon>
          <vt@breadcrumb-item>Dashbord</vt@breadcrumb-item>
          <vt@breadcrumb-item>Link1</vt@breadcrumb-item>
          <vt@breadcrumb-item disabled>Link2</vt@breadcrumb-item>
        </vt@breadcrumb>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Breadcrumbs',
    }
  },

  data() {
    return {
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
