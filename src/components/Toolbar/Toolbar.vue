<template>
  <nav :class="classes">
    <div :class="contentClasses">
      <slot />
    </div>
  </nav>
</template>



<script>
import Contextualable from '~/mixins/contextualable';
import Colorable from '~/mixins/colorable';


export default {
  name: 'vt@toolbar',

  mixins: [Contextualable, Colorable],

  props: {
  },



  computed: {
    classes() {
      return this.addContextColorClassChecks({
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