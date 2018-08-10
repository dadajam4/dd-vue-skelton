<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@spinner
      class="vc@ma-md"
      v-for="define in rotateDefines"
      :key="define.color"
      :rotate="define.rotate"
      :color="define.color"
      size="100"
      width="15"
      :value="rotateValue"
    >{{rotateValue}}</vt@spinner>
  </docs-example>
</template>

<script>

export default {
  data() {
    return {
      rotateInterval: {},
      rotateValue: 0,
      rotateDefines: [
        {color: 'disabled', rotate: 360},
        {color: 'primary', rotate: -90},
        {color: 'warning', rotate: 90},
        {color: 'error', rotate: 180},
      ],
    }
  },

  mounted() {
    this.rotateInterval = setInterval(() => {
      if (this.rotateValue === 100) return (this.rotateValue = 0);
      this.rotateValue += 10
    }, 1000);
  },

  beforeDestroy() {
    clearInterval(this.rotateInterval);
  },
}
</script>
