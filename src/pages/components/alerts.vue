<style lang="scss" scoped>
</style>

<template>
  <div>
    <header class="vc@page-header">
      <h1 class="vc@page-header__inner vc@page__container">Alerts</h1>
    </header>

    <main class="vc@page">
      <div class="vc@page__container">
        <p class="vc@page__introduction">ほげほげ</p>
      </div>

      <section id="contextual" class="vc@page__section vc@page__container" data-anchor-point>
        <h2>Contextual</h2>

        <vt@alert
          v-for="myType in CONTEXT_TYPES"
          :key="myType"
          v-bind="{[myType]: true}"
          value="true"
        >This is a {{myType}} alert.</vt@alert>
      </section>

      <section id="closable" class="vc@page__section vc@page__container" data-anchor-point>
        <h2>Closable</h2>

        <vt@alert
          info
          v-model="demo1"
          dismissible
          transition="vc@transition-fade"
        >This is a info alert that is closable.</vt@alert>

        <div class="vc@text--center">
          <vt@btn primary v-if="!demo1" @click="demo1 = true">Reset</vt@btn>
        </div>
      </section>
    </main>
  </div>
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
