<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Colors</vt@page-header>
    <vt@page-intro>
      Use our iOS integration to style your native iOS applications to be consistent with the <span>hogehoge</span>
    </vt@page-intro>

    <vt@page-section title id="context-colors" data-anchor-point>
      <div v-for="color in contextColors" :key="color.name" :class="color.className">
        {{color.name}}
        <p>This is <a href="">Link</a></p>
      </div>
    </vt@page-section>

    <vt@page-section title id="text-colors" data-anchor-point>
      <p v-for="color in textColors" :key="color.name" :class="color.className">{{color.name}}</p>
    </vt@page-section>

    <vt@page-section title id="layer-colors" data-anchor-point>
      <p v-for="color in layerColors" :key="color.name" :class="color.className">{{color.name}}</p>
    </vt@page-section>

    <vt@page-section title id="background-colors" data-anchor-point>
      <p v-for="color in backgroundColors" :key="color.name" :class="color.className">{{color.name}}</p>
    </vt@page-section>

    <vt@page-section title id="border-colors" data-anchor-point>
      <p v-for="color in borderColors" :key="color.name" :class="color.className" style="border: solid 1px;">{{color.name}}</p>
    </vt@page-section>

    <vt@page-section title id="color-palette" data-anchor-point>
      <div v-for="paletteColor, index in paletteColors" :key="index">
        <div
          v-for="color in paletteColor"
          :key="color.name"
          :class="color.className"
        >{{color.baseName}} {{color.name}}</div>
      </div>
    </vt@page-section>
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
