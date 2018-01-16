<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Breadcrumbs</vt@page-header>
    <vt@page-intro>
      ほげほげ
    </vt@page-intro>

    <vt@page-section title id="text-dividers" data-anchor-point>
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
    </vt@page-section>

    <vt@page-section title id="alignment" data-anchor-point>
      <div v-for="key in ['left', 'center', 'right']" :key="key">
        <h3>{{key}}</h3>
        <vt@breadcrumb v-bind="{[key]: true}">
          <vt@breadcrumb-item>Dashbord</vt@breadcrumb-item>
          <vt@breadcrumb-item>Link1</vt@breadcrumb-item>
          <vt@breadcrumb-item disabled>Link2</vt@breadcrumb-item>
        </vt@breadcrumb>
      </div>
    </vt@page-section>

    <vt@page-section title id="sizing" data-anchor-point>
      <h3>Large</h3>
      <vt@breadcrumb lg>
        <vt@breadcrumb-item>Dashbord</vt@breadcrumb-item>
        <vt@breadcrumb-item>Link1</vt@breadcrumb-item>
        <vt@breadcrumb-item disabled>Link2</vt@breadcrumb-item>
      </vt@breadcrumb>
    </vt@page-section>

    <vt@page-section title id="icon-dividers" data-anchor-point>
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
    </vt@page-section>
  </vt@page>
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
