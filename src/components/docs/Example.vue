<style lang="scss" scoped>
</style>

<template>
  <vt@page-section :id="id">
    <h2 class="vc@page__section-header">{{computedTitle}}</h2>
    <slot />
<!--
    <pre v-text="template"></pre>
-->
  </vt@page-section>
</template>

<script>
import { capitalize } from '~/helpers';



export default {
  name: 'docs-example',

  props: {
    id: String,
    title: String,
    template: String,
    script: String,
    css: String,
  },

  data() {
    return {
    }
  },

  computed: {
    computedTitle() { return this.title || capitalize(this.id.replace(/-/g, ' ')) },
  },

  methods: {
  },

  mounted() {
    // console.log(this.template);
    // console.log(this.script);
    // console.log(this.css);
  },

  created() {
  },
}
</script>
