<style lang="scss" scoped>
.my {
  &__name {
  }

  &__body {
    margin-top: 2rem;
  }
}
</style>

<template>
<div class="my">
  <h3 class="my__name">
    <span style="vertical-align: middle;">&lt;{{name}}&gt;</span>
    <vt@btn sm primary class="vc@m-l--sm">view source</vt@btn>
  </h3>
  <p class="my__overview">
    <slot name="overview" />
  </p>
  <div class="my__body">
    <slot />
  </div>
</div>
</template>

<script>



export default {
  props: {
    name: String,
  },

  data() {
    return {
    }
  },

  methods: {
  },

  created() {
  },
}
</script>
