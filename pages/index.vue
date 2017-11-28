<style lang="scss" scoped>
</style>

<template>
  <div>
    <main class="vc@page__container">
      <div class="vc@page__section vc@page__container">
        <h1>DD Vue Skelton</h1>
        <p>Hear is sample text. hear is sample text. </p>
        <div>
          <vt@btn primary to="getting-started">Getting Started</vt@btn>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  layout: 'single',

  head() {
    return {
      title: 'index',
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
