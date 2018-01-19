<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <p v-for="color in backgroundColors" :key="color.name" :class="color.className">{{color.name}}</p>
  </docs-example>
</template>

<script>
export default {
  inject: ['localTheme'],

  computed: {
    backgroundColors() {
      const theme = this.localTheme.value;
      const colors = this.BACKGROUND_COLORS.map(key => {
        return {
          name: key,
          className: `vc@background-color--${key}`,
          value: theme[`background-${key}-color`],
        };
      });
      return colors;
    },
  },
}
</script>