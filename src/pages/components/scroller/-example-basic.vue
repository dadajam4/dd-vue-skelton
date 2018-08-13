<style lang="scss" scoped>
.inner {
  border: solid 10px;
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
}
</style>

<template>
  <docs-example>
    <vt@scroller
      :width="containerSize"
      :height="containerSize"
      background-color="light"
    >
      <div class="inner vc@light-mask--border vc@mask--background" :style="innerStyle">
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
  </docs-example>
</template>

<script>
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
