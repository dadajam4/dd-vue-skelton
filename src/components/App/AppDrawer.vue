<template>
  <nav :class="classes">
    <vt@overlay class="vc@app-drawer__overlay" v-model="isActive" />
    <div
      class="vc@app-drawer__base"
      v-click-outside="closeConditional"
    >
      <div class="vc@app-drawer__content">
        <slot />
      </div>
    </div>
  </nav>
</template>



<script>
import ClickOutside from '~/directives/click-outside';



export default {
  name: 'vt@app-drawer',

  inject: ['$app'],

  props: {
    value: {
      required: false,
    },
    left: Boolean,
    right: Boolean,
    static: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      lastRequested: null,
    }
  },

  computed: {
    classes() {
      return {
        'vc@app-drawer': true,
        'vc@app-drawer--left': this.left,
        'vc@app-drawer--right': this.right,
        'vc@app-drawer--open': this.isActive,
        'vc@app-drawer--close': !this.isActive,
        'vc@app-drawer--static': this.isStatic,
      }
    },

    vec() { return this.left ? 'left' : 'right' },
    state() { return this.$ui.drawer[this.vec] },

    isActive: {
      get() { return this.state.active },
      set(val) { this.state.active = val },
    },

    isStatic() {
      return this.static && this.$ui.mq[this.static];
    },
  },

  watch: {
    value(val) {
      this.isActive = val;
    },

    isActive(isActive) {
      this.$emit('input', isActive);
    },

    isStatic() {
      this.checkStatic();
    },

    $route() {
      if (!this.isStatic) this.isActive = false;
    },
  },

  methods: {
    closeConditional() {
      return !this.permanent && !this.isStatic;
    },

    checkStatic() {
      if (this.isStatic) {
        if (this.lastRequested || this.lastRequested === null) {
          this.isActive = true;
        }
      } else {
        this.isActive = false;
      }
      this.state.static = this.isStatic;
    },
  },

  created() {
    this.checkStatic();
    this.$emit('input', this.isActive);
    this.state.use = true;
  },

  destroyed() {
    this.state.release();
    this.lastRequested = null;
  },
}
</script>
