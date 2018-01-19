<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <p v-for="color in textColors" :key="color.name" :class="color.className">{{color.name}}</p>
  </docs-example>
</template>

<script>
export default {
  inject: ['localTheme'],

  computed: {
    textColors() {
      const theme = this.localTheme.value;
      const colors = this.TEXT_COLORS.map(key => {
        return {
          name: key,
          className: `vc@text-color--${key}`,
          value: theme[`text-${key}-color`],
        };
      });
      return colors;
    },
  },
}
</script>