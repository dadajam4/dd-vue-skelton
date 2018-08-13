<template>
  <nav :class="classes" v-if="hasItem">
    <router-link
      class="vc@anchor-navi__item"
      :class="{'vc@anchor-navi__item--current': item === currentItem}"
      v-for="item in computedItems"
      :key="item.id"
      :to="{hash: item.id}"
      @click.native.prevent="onItemClick(item)"
    >
      <span class="vc@anchor-navi__icon"><vt@icon sm>$ui.icons.angleRight</vt@icon></span>
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
    '$ui.scroll.top'() {
      this.updateCurrentId();
    },
    '$ui.scroll.height'() {
      this.updateCurrentId();
    },
  },

  methods: {
    update() {
      if (!this.$ui.scroll.animating) {
        this.updateCurrentId();
      }
      this.updateRouteItems();
    },

    updateCurrentId() {
      if (!this.$ui.hasWindow || !this.$ui.scroll.loaded || this.$ui.scroll.animating) return;

      const headerHeight = this.$ui.header.fixedHeight;
      const scrollTop = this.$ui.scroll.top;
      const scrollHeight = this.$ui.scroll.height;
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
      this.$ui.scroll.to('#' + item.id);
    },
  },

  created() {
    this.update();
  },
}
</script>
