<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@alert
      info
      v-model="show"
      dismissible
      transition="vc@fade-transition"
    >This is a info alert that is closable.</vt@alert>

    <div class="vc@text--center">
      <vt@btn primary v-if="!show" @click="show = true">Reset</vt@btn>
    </div>
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    }
  },
}
</script>