<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <div v-for="color in contextColors" :key="color.name" :class="color.className">
      {{color.name}}
      <p>This is <a href="">Link</a></p>
    </div>
  </docs-example>
</template>

<script>
export default {
  inject: ['localTheme'],

  computed: {
    contextColors() {
      const theme = this.localTheme.value;
      const colors = this.CONTEXT_TYPES.map(key => {
        return {
          name: key,
          className: `vc@context-color--${key}`,
          value: theme[`context-${key}-color`],
        };
      });
      return colors;
    },
  },
}
</script>