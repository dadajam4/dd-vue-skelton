<style lang="scss" scoped>
</style>

<template>
  <vt@page :class="`vc@theme--${theme}`">
    <vt@page-header>Colors</vt@page-header>
    <vt@page-intro>
      Use our iOS integration to style your native iOS applications to be consistent with the <span>hogehoge</span>
    </vt@page-intro>

    <vt@radio-group v-model="theme" row>
      <vt@radio
        v-for="key in THEME_KEYS"
        :key="key"
        :label="key"
        :value="key"
      ></vt@radio>
    </vt@radio-group>

    <dd-example is="context-colors" />
    <dd-example is="text-colors" />
    <dd-example is="layer-colors" />
    <dd-example is="background-colors" />
    <dd-example is="border-colors" />
    <dd-example is="color-palette" />
  </vt@page>
</template>

<script>
import themes from '~~/config/css/themes';



export default {
  $_anchors,

  head() {
    return {
      title: 'Colors',
    }
  },

  provide() {
    const localTheme = {};

    Object.defineProperty(localTheme, 'current', {
       enumerable: true,
       get: () => this.theme,
    });

    Object.defineProperty(localTheme, 'value', {
       enumerable: true,
       get: () => this.THEMES[this.theme],
    });
    return { localTheme };
  },

  data() {
    return {
      theme: themes.default,
    }
  },
}
</script>
