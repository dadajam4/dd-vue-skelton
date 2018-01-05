<style lang="scss" scoped>
</style>

<template>
  <div>
    <header class="vc@page-header">
      <h1 class="vc@page-header__inner vc@page__container">Colors</h1>
    </header>

    <main class="vc@page">
      <div class="vc@page__container">
        <p class="vc@page__introduction">Use our iOS integration to style your native iOS applications to be consistent with the <span>hogehoge</span></p>
      </div>

      <section id="text-colors" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Text colors</h2>

        <p v-for="color in textColors" :key="color.name" :class="color.className">{{color.name}}</p>
      </section>

      <section id="background-colors" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Background colors</h2>

        <p v-for="color in backgroundColors" :key="color.name" :class="color.className">{{color.name}}</p>
      </section>

      <section id="color-palette" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Color palette</h2>

        <div v-for="paletteColor, index in paletteColors" :key="index">
          <div
            v-for="color in paletteColor"
            :key="color.name"
            :class="color.className"
          >{{color.baseName}} {{color.name}}</div>
        </div>
      </section>

    </main>
  </div>
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

  data() {
    return {
      theme: 'light',
    }
  },

  computed: {
    textColors() {
      const theme = themes.themes[this.theme];

      const colors = themes['color-keys'].text.map(key => {
        return {
          name: key,
          className: `vc@text--${key}`,
          value: theme[`text-${key}-color`],
        };
      });
      return colors;
    },

    backgroundColors() {
      const theme = themes.themes[this.theme];

      const colors = themes['color-keys'].background.map(key => {
        return {
          name: key,
          className: `vc@${key}`,
          value: theme[`background-${key}-color`],
        };
      });
      return colors;
    },

    paletteColors() {
      const colors = [];

      for (let key in themes.palette) {
        const color = [];
        for (let name in themes.palette[key]) {
          color.push({
            name: name,
            baseName: key,
            className: `vc@${key}${name === 'base' ? '' : '-' + name}`,
            value: themes.palette[name],
          });
        }
        colors.push(color);
      }

      return colors;
    },
  },
}
</script>
