<style lang="scss" scoped>
</style>

<template>
  <docs-example>

    <vt@card
      v-for="color in $ui.theme.contexts"
      :key="color"
      :color="color"
      class="vc@mv-sm"
    >
      <vt@card-text>
        {{ color }}
        <a href="javascript:void(0);">これはリンクです</a>
      </vt@card-text>
    </vt@card>
  </docs-example>
</template>

<script>
export default {
  // inject: ['localTheme'],

  computed: {
    // contextColors() {
    //   const theme = this.localTheme.value;
    //   const colors = this.CONTEXT_TYPES.map(key => {
    //     return {
    //       name: key,
    //       className: `vc@context-color--${key}`,
    //       value: theme[`context-${key}-color`],
    //     };
    //   });
    //   return colors;
    // },
  },
}
</script>
