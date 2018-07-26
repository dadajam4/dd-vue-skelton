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

    isActive: {
      get() { return this.state.active },
      set(val) { this.$store.commit(`${this.storePath}setActive`, val) },
    },

    isStatic() {
      return this.static && this.$ui.mq[this.static];
    },

    state() { return this.$store.state.ui[`${this.vec}Drawer`] },
    storePath() { return `ui/${this.vec}Drawer/` },
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
      this.$store.commit(`${this.storePath}setStatic`, this.isStatic);
    },
  },

  created() {
    this.checkStatic();
    this.$emit('input', this.isActive);
    this.$store.commit(`${this.storePath}set`);
  },

  destroyed() {
    this.$store.commit(`${this.storePath}release`);
    this.lastRequested = null;
  },
}
</script>
