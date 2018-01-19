<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <p v-for="color in layerColors" :key="color.name" :class="color.className">{{color.name}}</p>
  </docs-example>
</template>

<script>
export default {
  inject: ['localTheme'],

  computed: {
    layerColors() {
      const theme = this.localTheme.value;
      const colors = this.BACKGROUND_COLORS.map(key => {
        return {
          name: key,
          className: `vc@layer-color--${key}`,
          value: theme[`background-${key}-color`],
        };
      });
      return colors;
    },
  },
}
</script>