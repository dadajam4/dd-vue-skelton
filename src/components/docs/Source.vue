<style lang="scss" scoped>
@import "core/index";

.my-code {
  border-radius: 0;
}

.my-btn-source-copy {
  position: absolute;
  right: 15px;
  top: 0;
  color: #fff;
}

.my-copied {
  position: absolute;
  @include theme-color(background, background-darken);
  @include theme-color(color, text-inverted);
  @include elevation(2);
  @include font-size(xs);
  border-radius: 2px;
  right: 50px;
  top: 14px;
  padding: 0 5px;
  pointer-events: none;
  opacity: 0;
  transition: get-transition(primary);

  &--active {
    opacity: 1;
    right: 60px;
  }
}
</style>

<template>
  <div class="docs-source">
    <vt@scroller max-height="40vh">
      <pre
        class="my-pre"
        v-highlightjs="source"
      ><code class="my-code" :class="lang" ref="copy-source"></code></pre>
    </vt@scroller>
    <vt@btn class="my-btn-source-copy" icon @click="copy">
      <vt@icon>file_copy</vt@icon>
    </vt@btn>
    <div class="my-copied" :class="{'my-copied--active': !!copied}">Copied</div>
  </div>
</template>

<script>
export default {
  name: 'docs-source',

  props: {
    source: {
      type: String,
      required: true,
    },
    lang: String,
  },

  data() {
    return {
      copied: false,
    }
  },

  computed: {
  },

  methods: {
    clearTimer() {
      if (this.copied) {
        clearTimeout(this.copied);
        this.copied = false;
      }
    },

    copy(tab) {
      this.clearTimer();
      try {
        const range = document.createRange();
        range.selectNode(this.$refs['copy-source']);

        const selection = getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        document.execCommand('copy');
        this.copied = setTimeout(() => {
          this.clearTimer();
        }, 2000);
      } catch(e) {}
    },
  },

  beforeDestroy() {
    this.clearTimer();
  },
}
</script>
