<style lang="scss" scoped>
@import "./core/index";

.my {
  &__name {
  }

  &__body {
    margin-top: 2rem;
  }

  &__source-container {
    position: relative;
    transition: get-transition(primary);
  }

  &__pre {
    margin: 0!important;
  }

  &__code {
    padding: 2.5em 1.5em;
  }

  &__btn-source-copy {
    position: absolute;
    right: 0;
    top: 0;
    color: #fff;
  }
}
</style>

<template>
<div class="my">
  <h3 class="my__name">
    <span style="vertical-align: middle;">&lt;{{name}}&gt;</span>
    <vt@btn sm primary class="vc@m-l--sm" v-if="source" @click="sourceActive = !sourceActive">
      {{sourceActive ? 'Hide' : 'View'}} Source
    </vt@btn>
  </h3>

  <vt@expand-transition v-if="source">
    <div class="my__source-container" v-show="sourceActive">
      <pre class="my__pre" v-highlightjs="source"><code class="my__code" :class="lang" ref="code"></code></pre>
      <vt@btn class="my__btn-source-copy" icon @click="copy">
        <vt@icon>copy</vt@icon>
      </vt@btn>
    </div>
  </vt@expand-transition>

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
  name: 'docs-element-guide',

  props: {
    name: String,
    source: String,
    lang: String,
  },

  data() {
    return {
      sourceActive: false,
    }
  },

  methods: {
    copy() {
      const range = document.createRange();
      range.selectNode(this.$refs.code);

      const selection = getSelection();
      selection.removeAllRanges();
      selection.addRange(range);

      document.execCommand('copy');

      // alert('コピーしました');
      // selection.removeAllRanges();
    },
  },

  created() {
  },
}
</script>
