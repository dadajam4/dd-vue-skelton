<template>
  <nav :class="classes" v-if="hasItem">
    <router-link
      class="vc@anchor-navi__item"
      :class="{'vc@anchor-navi__item--current': item === currentItem}"
      v-for="item in computedItems"
      :key="item.id"
      :to="{hash: item.id}"
      @click.native.stop="onItemClick(item)"
    >
      <span class="vc@anchor-navi__icon"><vt@icon>angle-right</vt@icon></span>
      <span class="vc@anchor-navi__label">{{item.label}}</span>
    </router-link>
  </nav>
</template>



<script>
const VISIBLE_PER_AMMOUNT = 0.4;

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
      routeItems: [],
      currentId: null,
      nowWaitScrollDone: false,
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
      return this.items ? this.items : this.routeItems;
    },

    currentItem() {
      return this.currentId && this.computedItems.find(item => item.id === this.currentId)
    },

    hasItem() { return !!this.computedItems.length },
  },

  watch: {
    $route() {
      this.update();
    },
    '$store.state.scroll.top'() {
      this.updateCurrentId();
    },
    '$store.state.scroll.height'() {
      this.updateCurrentId();
    },
  },

  methods: {
    update() {
      if (!this.$appIsScrolling()) {
        this.updateCurrentId();
      }
      this.updateRouteItems();
    },

    updateCurrentId() {
      if (!process.browser || !this.$store.state.scroll.loaded || this.$appIsScrolling()) return;

      const headerHeight = this.$store.getters['ui/header/fixedHeight'];
      const scrollTop = this.$store.state.scroll.top;
      const scrollHeight = this.$store.state.scroll.height;
      const visibleJudgeAmmount = (scrollHeight - headerHeight) * VISIBLE_PER_AMMOUNT;
      const items = this.computedItems;

      for (let i = items.length - 1; i > -1; i--) {
        const item = items[i];
        const el   = document.getElementById(item.id);

        if (el) {
          const myRect = el.getBoundingClientRect();
          const myVisibleHeight = scrollHeight - myRect.top;

          if (myVisibleHeight > visibleJudgeAmmount) {
            if (this.currentId !== item.id) {
              this.currentId = item.id;
              this.$util.locationHashChange(item.id);
              // history.replaceState({}, '', location.href.replace(/(#.*)?$/, '#' + item.id));
            }
            return;
          }
        }
      }

      this.$util.locationHashChange();
      this.currentId = null;
    },

    updateRouteItems() {
      if (this.items) return;
      this.routeItems = JSON.parse(JSON.stringify(this.$currentRouteAnchors()));
    },

    onItemClick(item) {
      this.$util.blurActiveElement();
      this.currentId = item.id;
    },
  },

  created() {
    this.update();
  },
}
</script>