<style lang="scss" scoped>
@import "core/index";
.my {
  @include btn-style-reset($display: block);
  user-select: auto;

  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 2px;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transition: get-transition(primary);
  text-align: center;

  &__icon {
    transition: get-transition(primary);
    padding: 10px;
    border-radius: 2px 2px 0 0;
  }

  &__node {
    transition: transform get-transition(primary);

  }

  &__label {
    @include font-size(xs);
    padding: 10px 5px;
    padding-top: 5px;
  }

  &:hover,
  &:focus {
    .my__icon {
      @include theme-color(background, background-light);
    }

    .my__node {
      transform: scale(1.8);
    }
  }

  &__copy {
    height: 1px;
    overflow: hidden;
    background: transparent;
    box-shadow:  0 0 0 rgba(0, 0, 0, 0);
  }

  &--copied {
    @include elevation(2);

    &,
    &:hover,
    &:focus {
      .my__icon {
        @include theme-color(background, background-primary);
        @include theme-color(color, text-inverted);
      }
    }
  }
}

.my-copied {
  position: absolute;
  @include theme-color(background, background-darken);
  @include theme-color(color, text-inverted);
  @include elevation(2);
  @include font-size(xs);
  border-radius: 2px;
  right: 0px;
  top: -10px;
  padding: 0 5px;
  pointer-events: none;
  opacity: 0;
  transition: get-transition(primary);

  .my--copied & {
    opacity: 1;
    right: -10px;
  }
}

</style>

<template>
  <div
    class="my"
    :class="{'my--copied': copied}"
    tabindex="0"
    @click="copy"
    @keyup.enter="copy"
  >
    <div class="my__icon"><vt@icon class="my__node">{{name}}</vt@icon></div>
    <div class="my__label">{{label}}</div>
    <code class="my__copy" ref="copy-node">{{name}}</code>
    <div class="my-copied">Copied</div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      copied: false,
    }
  },
  methods: {
    copy(e) {
      this.clearTimer();
      try {
        const range = document.createRange();
        range.selectNode(this.$refs['copy-node']);

        const selection = getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        document.execCommand('copy');
        this.copied = setTimeout(() => {
          this.clearTimer();
        }, 2000);
      } catch(e) {}
    },
    clearTimer() {
      if (this.copied) {
        clearTimeout(this.copied);
        this.copied = false;
      }
    },
  },
  beforeDestroy() {
    this.clearTimer();
  },
}
</script>