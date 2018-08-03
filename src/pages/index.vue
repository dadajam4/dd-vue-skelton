<style lang="scss" scoped>

.my-logo {
  margin-top: 60px;

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
  <vt@page>
    <p class="my-logo vc@text-center"><img src="img/logo/dd.svg" alt=""></p>
    <h1 class="my-title">DD Vue Skelton</h1>
    <p class="vc@text-center">Hear is sample text. hear is sample text. </p>
    <div class="vc@text-center">
      <vt@btn primary to="getting-started">Getting Started</vt@btn>
      <vt@btn secondary href="https://github.com/dadajam4/dd-vue-skelton" target="_blank">
        <vt@icon left>fab fa-github</vt@icon>
        github
      </vt@btn>
    </div>

    <div class="vc@text-center">
      <p v-for="n in 20" :key="n">
        hogehoge - {{n}}
        <vt@icon>fab fa-github</vt@icon>
      </p>
    </div>
  </vt@page>
</template>

<script>
export default {

  head() {
    return {
      title: 'Vue.js 2 application\'s skeleton',
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
