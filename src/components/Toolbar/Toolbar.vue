<template>
  <nav :class="classes">
    <div :class="contentClasses">
      <slot />
    </div>
  </nav>
</template>



<script>
import Colorable from '~/mixins/colorable';


export default {
  name: 'vt@toolbar',

  mixins: [Colorable],

  props: {
  },



  computed: {
    classes() {
      return this.addBackgroundColorClassChecks({
        'vc@toolbar': true,
      });
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