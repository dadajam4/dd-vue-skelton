<style lang="scss" scoped>
@import "core/index";

.my-logo {
  border-bottom: solid 1px;
  @include theme-color(border-color, form-divider);

  & > a {
    color: inherit;
    font-weight: bold;
    display: flex;
    padding-left: 20px;
    align-items: center;
    transition: get-transition(primary);

    &:hover,
    &:focus {
      background: rgba(0, 0, 0, .1);
    }
  }
}
</style>

<template>
  <vt@app-drawer right static="xl" v-model="isActive" ref="drawer">
    <div class="my-logo">
      <router-link class="vc@height--app-header" :to="{name: 'index'}">
        <img class="vc@m-r--xs" src="img/logo/dd.svg" alt="" width="24">
        DD Vue Skelton
      </router-link>
    </div>
    <vt@route-navigator :settings="navigatorSettings" />
  </vt@app-drawer>
</template>

<script>
const navigatorSettings = [
  {match: '/getting-started', label: '始めに', order: 0, icon: 'cube'},
  {match: /^\/layout$/, order: 1, icon: 'th-list'},
  {match: /^\/components$/, order: 2, icon: 'th-large'},
  {match: /^\/elements$/, order: 3, icon: 'truck'},
  {match: /^\/style$/, order: 4, icon: 'columns'},
];



export default {
  name: 'docs-drawer',

  props: {
    value: {
      required: false,
    },
  },

  data() {
    return {
      isActive: this.value,
    }
  },

  computed: {
    navigatorSettings() { return navigatorSettings },
    lastRequested: {
      get() { return this.$refs.drawer.lastRequested },
      set(lastRequested) { this.$refs.drawer.lastRequested = lastRequested },
    },
  },

  watch: {
    value() {
      this.isActive = this.value;
    },

    isActive() {
      this.$emit('input', this.isActive);
    },
  },
}
</script>
