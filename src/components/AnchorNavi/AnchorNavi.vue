<template>
  <nav :class="classes" v-if="hasItem">
    <ul>
      <li><a href="">アンカーナビ1です</a></li>
      <li><a href="">アンカーナビ2です</a></li>
      <li><a href="">アンカーナビ3ですアンカーナビ3ですアンカーナビ3です</a></li>
      <li><a href="">アンカーナビ4です</a></li>
      <li><a href="">アンカーナビ5です</a></li>
    </ul>
  </nav>
</template>



<script>
export default {
  name: 'vt@anchor-navi',

  props: {
    items: {
      type: Array,
      default: null,
    },
  },

  data() {
    return {
    }
  },



  computed: {
    classes() {
      return {
        'vc@anchor-navi': true,
        'vc@anchor-navi--has-item': this.hasItem,
      }
    },

    computedItems() {
      if (this.items) return this.items;
      const items = [];
      return items;
    },

    hasItem() { !!this.computedItems.length },
  },

  watch: {
    // $route(to) {
    //   console.warn(this.$route);
    // },
  },

  methods: {
    startRouteWatch() {
      this.stopRouteWatch();
      this._rootWatcher = this.$root.$watch('$route', () => {
        this.onRouteChange();
      });
      this.onRouteChange();
    },
    onRouteChange() {
      if (this.$root.$el) {
        console.warn(this.$root.$el);
      }
    },
    stopRouteWatch() {
      if (this._rootWatcher) this._rootWatcher();
    },
  },

  created() {
    this.startRouteWatch();
  },

  beforeDestroy() {
    this.stopRouteWatch();
    console.warn(this);
  },
}
</script>