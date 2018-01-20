<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt-progress-bar
      v-model="buffer"
      buffer
      :buffer-value="bufferValue"
    />
  </docs-example>
</template>

<script>

export default {
  data() {
    return {
      value: 0,
      buffer: 10,
      bufferValue: 20,
      interval: {},
    }
  },

  methods: {
    startBuffer() {
      this.interval = setInterval(() => {
        this.buffer += Math.random() * (15 - 5) + 5;
        this.bufferValue += Math.random() * (15 - 5) + 5;
      }, 2000);
    }
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  mounted() {
    this.startBuffer();
  },
}
</script>