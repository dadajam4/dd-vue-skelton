<style lang="scss" scoped>

.my-logo {
  img {
    width: 100%;
    max-width: 320px;
  }
}

.my-title {
  text-align: center;
}
</style>

<template>
  <div>
    <main class="vc@page__container">
      <div class="vc@page__section vc@page__container">
        <p class="my-logo vc@text--center"><img src="img/logo/dd.svg" alt=""></p>
        <h1 class="my-title">DD Vue Skelton</h1>
        <p class="vc@text--center">Hear is sample text. hear is sample text. </p>
        <div class="vc@text--center">
          <vt@btn primary to="getting-started">Getting Started</vt@btn>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  // layout: 'single',

  head() {
    return {
      title: 'Vue.js 2 Ui Component Skelton',
      hasNavigation: false,
    }
  },

  data() {
    return {
    }
  },

  created() {
  },
}
</script>
