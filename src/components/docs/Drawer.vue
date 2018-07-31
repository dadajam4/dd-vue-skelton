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
        <img class="vc@mr-xs" src="img/logo/dd.svg" alt="" width="24">
        DD Vue Skelton
      </router-link>
    </div>

    <vt@input placeholder="Search">
      <vt@icon right>search</vt@icon>
    </vt@input>

    <vt@route-navigator :settings="navigatorSettings" />
  </vt@app-drawer>
</template>

<script>
const navigatorSettings = [
  {match: '/getting-started', order: 0, icon: 'cube'},
  {match: /^\/layout$/, order: 1, icon: 'th-list'},
  {match: /^\/components$/, order: 2, icon: 'th-large'},
  {match: /^\/elements$/, order: 3, icon: 'truck'},
  {match: /^\/style$/, order: 4, icon: 'columns'},

  {match: /introduction/, order: 0},

];



export default {
  name: 'docs-drawer',

  props: {
    value: {
      type: Boolean,
      required: false,
    },
  },

  data() {
    return {
      innerValue: this.value,
    }
  },

  computed: {
    navigatorSettings() { return navigatorSettings },
    lastRequested: {
      get() { return this.$refs.drawer.lastRequested },
      set(lastRequested) { this.$refs.drawer.lastRequested = lastRequested },
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
      this.innerValue = val;
    },
  },
}
</script>
