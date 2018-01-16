<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Alerts</vt@page-header>
    <vt@page-intro>
      ほげほげ
    </vt@page-intro>

    <vt@page-section title id="contextual" data-anchor-point>
      <vt@alert
        v-for="myType in CONTEXT_TYPES"
        :key="myType"
        v-bind="{[myType]: true}"
        value="true"
      >This is a {{myType}} alert.</vt@alert>
    </vt@page-section>

    <vt@page-section title id="closable" data-anchor-point>
      <vt@alert
        info
        v-model="demo1"
        dismissible
        transition="vc@fade-transition"
      >This is a info alert that is closable.</vt@alert>

      <div class="vc@text--center">
        <vt@btn primary v-if="!demo1" @click="demo1 = true">Reset</vt@btn>
      </div>
    </vt@page-section>

    <vt@page-section title id="outline" data-anchor-point>
      <vt@alert
        v-for="myType in CONTEXT_TYPES"
        :key="myType"
        v-bind="{[myType]: true}"
        value="true"
        outline
        dismissible
      >This is a {{myType}} alert.</vt@alert>
    </vt@page-section>
  </vt@page>
</template>

<script>
import themes from '~~/config/css/themes';

const CONTEXT_TYPES = themes['color-keys'].context;

export default {
  $_anchors,

  head() {
    return {
      title: 'Alerts',
    }
  },

  data() {
    return {
      demo1: true,
    }
  },

  computed: {
    CONTEXT_TYPES() { return CONTEXT_TYPES },
  },

  methods: {
  },

  created() {
  },
}
</script>
