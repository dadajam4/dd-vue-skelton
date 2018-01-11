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

      <section id="context-colors" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Context colors</h2>

        <div v-for="color in contextColors" :key="color.name" :class="color.className">
          {{color.name}}
          <p>This is <a href="">Link</a></p>
        </div>
      </section>

      <section id="text-colors" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Text colors</h2>

        <p v-for="color in textColors" :key="color.name" :class="color.className">{{color.name}}</p>
      </section>

      <section id="layer-colors" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Layer colors</h2>

        <p v-for="color in layerColors" :key="color.name" :class="color.className">{{color.name}}</p>
      </section>

      <section id="background-colors" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Background colors</h2>

        <p v-for="color in backgroundColors" :key="color.name" :class="color.className">{{color.name}}</p>
      </section>

      <section id="border-colors" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Border colors</h2>

        <p v-for="color in borderColors" :key="color.name" :class="color.className" style="border: solid 1px;">{{color.name}}</p>
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
    contextColors() {
      const theme = themes.themes[this.theme];
      const colors = themes['color-keys'].context.map(key => {
        return {
          name: key,
          className: `vc@context-color--${key}`,
          value: theme[`context-${key}-color`],
        };
      });
      return colors;
    },

    textColors() {
      const theme = themes.themes[this.theme];

      const colors = themes['color-keys'].text.map(key => {
        return {
          name: key,
          className: `vc@text-color--${key}`,
          value: theme[`text-${key}-color`],
        };
      });
      return colors;
    },

    layerColors() {
      const theme = themes.themes[this.theme];

      const colors = themes['color-keys'].background.map(key => {
        return {
          name: key,
          className: `vc@layer-color--${key}`,
          value: theme[`background-${key}-color`],
        };
      });
      return colors;
    },

    backgroundColors() {
      const theme = themes.themes[this.theme];

      const colors = themes['color-keys'].background.map(key => {
        return {
          name: key,
          className: `vc@background-color--${key}`,
          value: theme[`background-${key}-color`],
        };
      });
      return colors;
    },

    borderColors() {
      const theme = themes.themes[this.theme];

      const colors = themes['color-keys'].background.map(key => {
        return {
          name: key,
          className: `vc@border-color--${key}`,
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
            className: `vc@layer-color--${key}${name === 'base' ? '' : '-' + name}`,
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
