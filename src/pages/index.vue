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
    <h1 class="my-title">Vui</h1>
    <p class="vc@text-center">Component Framework</p>
    <div class="vc@text-center">
      <vt@btn color="primary" to="getting-started">Getting Started</vt@btn>
      <vt@btn color="secondary" href="https://github.com/dadajam4/dd-vue-skelton" target="_blank">
        <vt@icon left>fab fa-github</vt@icon>
        github
      </vt@btn>
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
