<style lang="scss" scoped>
@import "./core/index";

.my-theme {
  padding: 20px;
  margin-bottom: 20px;
}

.my-divider {
  border-bottom: solid 1px #000;
  @include theme-color(border-color, divider);
  margin-bottom: 10px;

  &--light { @include theme-color(border-color, divider-light); }
  &--dark { @include theme-color(border-color, divider-dark); }
}

.my-contexts {
  padding: 20px;
}

.my-context {
  margin-top: 20px;
}
</style>

<template>
  <div>
    <div
      :class="`my-theme vc@theme--${themeType}`"
      v-for="themeType in themeTypes"
      :key="themeType"
    >
      <h2>theme : {{themeType}}</h2>

      <p class="my-divider">divider</p>
      <p class="my-divider my-divider--light">divider - light</p>
      <p class="my-divider my-divider--dark">divider - dark</p>

      <div class="my-contexts">
        <div
          :class="`my-context vc@context--${contextType}`"
          v-for="contextType in contextTypes"
          :key="contextType"
        >
          <h3>{{contextType}}</h3>
          <p>{{contextType}}です</p>
          <p>これは<a href="javascript:void(0);">リンク</a>です</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import themes from '~~/config/css/themes';
console.warn(themes);


export default {
  head() {
    return {
      title: 'Vue.js 2 Ui Component Skelton',
    }
  },

  data() {
    return {
    }
  },

  computed: {
    themeTypes() { return Object.keys(themes.themes) },
    contextTypes() { return ['default', ...themes['color-keys'].context] },
  },

  created() {
  },
}
</script>
