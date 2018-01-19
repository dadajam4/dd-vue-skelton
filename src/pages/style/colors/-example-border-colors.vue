<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <p v-for="color in borderColors" :key="color.name" :class="color.className" style="border: solid 1px;">{{color.name}}</p>
  </docs-example>
</template>

<script>
export default {
  inject: ['localTheme'],

  computed: {
    borderColors() {
      const theme = this.localTheme.value;
      const colors = this.BACKGROUND_COLORS.map(key => {
        return {
          name: key,
          className: `vc@border-color--${key}`,
          value: theme[`background-${key}-color`],
        };
      });
      return colors;
    },
  },
}
</script>