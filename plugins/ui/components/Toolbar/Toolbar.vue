<template>
  <nav :class="classes">
    <div :class="contentClasses">
      <slot />
    </div>
  </nav>
</template>



<script>



export default {
  name: 'vt@toolbar',

  props: {
  },



  computed: {
    classes() {
      return {
        [this.$options.name]: true,
      }
    },
    contentClasses() {
      return {
        'vc@toolbar__content': true,
      }
    },
  },

  methods: {
  },
}
</script>