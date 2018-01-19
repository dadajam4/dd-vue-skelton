<style lang="scss" scoped>
.inner {
  border: solid 10px;
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
}
</style>

<template>
  <div>
    <vt@scroller
      :width="containerSize"
      :height="containerSize"
      background-color="light"
    >
      <div class="inner vc@border-color--indigo vc@background-color--pink-lighten-4" :style="innerStyle">
        Try scroll and resize.
      </div>
    </vt@scroller>

    <vt@slider
      thumb-label
      min="0"
      max="400"
      v-model="containerSize"
      label="container"
      :thumb-label-assist="size => size + 'px'"
    />

    <vt@slider
      thumb-label
      min="0"
      max="400"
      v-model="innerSize"
      label="inner"
      :thumb-label-assist="size => size + 'px'"
    />
  </div>
</template>

<script>
/* @dd-vue-docs-loader */
console.log($docsLoaderResult.template);
export default {
  computed: {
    innerStyle() {
      return {
        width: `${this.innerSize}px`,
        height: `${this.innerSize}px`,
      }
    },
  },

  data() {
    return {
      containerSize: 200,
      innerSize: 300,
    }
  },
}
</script>