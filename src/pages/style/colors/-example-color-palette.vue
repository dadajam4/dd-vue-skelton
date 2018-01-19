<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <div v-for="paletteColor, index in paletteColors" :key="index">
      <div
        v-for="color in paletteColor"
        :key="color.name"
        :class="color.className"
      >{{color.baseName}} {{color.name}}</div>
    </div>
  </docs-example>
</template>

<script>
export default {
  computed: {
    paletteColors() {
      const colors = [];

      for (let key in this.PALETTE) {
        const color = [];
        for (let name in this.PALETTE[key]) {
          color.push({
            name: name,
            baseName: key,
            className: `vc@layer-color--${key}${name === 'base' ? '' : '-' + name}`,
            value: this.PALETTE[name],
          });
        }
        colors.push(color);
      }

      return colors;
    },
  },
}
</script>