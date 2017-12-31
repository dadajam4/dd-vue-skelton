<style lang="scss" scoped>
@import "./core/index";

.fade-enter-active, .fade-leave-active {
  transition: opacity get-duration(slowly);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
<template>
  <transition name="fade">
    <div :class="classes" v-if="isActive"></div>
  </transition>
</template>



<script>



export default {
  name: 'vt@overlay',

  props: {
    value: { required: false },
  },

  data() {
    return {
      // isActive: this.value,
      isActive: false,
    }
  },



  computed: {
    classes() {
      return {
        'vc@overlay': true,
        'vc@overlay--active': this.isActive,
      }
    },
  },

  watch: {
    isActive(val) {
      this.$emit('input', val);
    },

    value(val) {
      if (val !== this.isActive) this.isActive = val;
    },
  },

  methods: {
    // show() {
    //   this.isActive = true;
    // },

    // hide() {
    //   this.isActive = false;
    // },

    // toggle() {
    //   this.isActive = !this.isActive;
    // },
  },

  created() {
  },

  mounted() {

    // createdの時にやるとerrorになる
    this.isActive = this.value;
  },
}
</script>