<template>
  <nav :class="classes">
    <vt@overlay :class="`${this.$options.name}__overlay`" v-model="isActive" />
    <div
      :class="`${this.$options.name}__base`"
      v-click-outside="closeConditional"
    >
      <div :class="`${this.$options.name}__content`">
        <p>{{mq}}</p>

        <slot />
      </div>
    </div>
  </nav>
</template>



<script>
export default {
  name: 'vt@navigation-drawer',

  props: {
    value: {
      type: Boolean,
      required: false,
    },
    permanent: Boolean,
  },

  data() {
    return {
      innerValue: this.value,
    }
  },

  computed: {
    classes() {
      return {
        [this.$options.name]: true,
        [`${this.$options.name}--open`]: this.isActive,
        [`${this.$options.name}--close`]: !this.isActive,
      }
    },

    isActive: {
      get() { return this.innerValue },
      set(val) {
        this.innerValue = val;
        this.$emit('input', val);
      },
    },
  },

  watch: {
    value(val) {
      if (!val && this.permanent) {
        this.$emit('input', true);
        return;
      }

      this.innerValue = val;
    },
  },

  methods: {
    closeConditional() {
      return !this.permanent;
      // return !this.permanent && (this.temporary || this.isMobile)
    },

    show() {

    },
  },
}
</script>