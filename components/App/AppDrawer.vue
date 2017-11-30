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
import appMixin from '~/mixins/app';
import Mq from '~/mixins/mq';
import ClickOutside from '~/directives/click-outside';



export default {
  name: 'vt@app-drawer',

  mixins: [appMixin, Mq],

  directives: {
    ClickOutside,
  },

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
      get() { return this[`${this.vec}DrawerActive`] },
      set(val) { this.$_app[`${this.vec}DrawerActive`] = val },
    },

    isStatic: {
      get() { return this[`${this.vec}DrawerStatic`] },
      set(val) { this.$_app[`${this.vec}DrawerStatic`] = val },
    },
  },

  watch: {
    value(val) {
      this.isActive = val;
    },

    isActive(isActive) {
      this.$emit('input', isActive);
    },

    isStatic(isStatic) {
      if (this.isStatic) {
        if (this.lastRequested || this.lastRequested === null) {
          this.isActive = true;
        }
      } else {
        this.isActive = false;
      }
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
      this.isStatic = this.mq[this.static];
    },

    clearAppState() {
      this.isActive = false;
      // this.$emit('input', isActive);
    },
  },

  created() {
    this.$_app.uses[`${this.vec}Drawer`] = true;
    this.$emit('input', this.isActive);

    if (this.static) {
      this.checkStatic();

      this.unWatchMq = this.$watch(`mq.${this.static}`, val => {
        this.checkStatic();
      });
    }
  },

  beforeDestroy() {
    if (this.unWatchMq) this.unWatchMq();
    this.clearAppState();
  },

  destroyed() {
    this.$_app.uses[`${this.vec}Drawer`] = false;
  },
}
</script>