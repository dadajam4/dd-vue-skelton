<style lang="scss" scoped>

// .my-router-view {
// /*
//   position: absolute;
// */
//   transition: all .5s cubic-bezier(.55,0,.1,1);
// }

// .slide {
//   $my-ammount: 30px;

//   &-enter {
//     position: absolute;
//     opacity: 0;
//     transform: translate(0, -$my-ammount);
//   }

//   &-leave-active {
//     position: absolute;
//     opacity: 0;
//     transform: translate(0, $my-ammount);
//   }
// }

// .fade {
//   $my-ammount: 30px;

//   &-enter-active, &-leave-active {
//     // transition: opacity 1s;
//   }

//   &-enter, &-leave-to {
//     position: absolute;
//     opacity: 0;
//   }
// }

.my-nuxt {
  position: relative;
}
</style>

<template>
  <vt@app
    :header="hasNavigation"
    :header-fixed="hasNavigation"
  >
    <docs-header :title="title" @click-toggle-drawer="requestToggleDrawer" v-if="hasNavigation" />
    <nuxt class="my-nuxt" ref="nuxt" />
    <docs-drawer v-model="drawer" ref="drawer" v-if="hasNavigation" />
  </vt@app>
</template>

<script>
import Header from '../components/docs/Header';
import Drawer from '../components/docs/Drawer';



export default {
  components: {
    'docs-header': Header,
    'docs-drawer': Drawer,
  },

  data() {
    const currentHead = this.getCurrentHead();
    return {
      drawer: false,
      theme: null,
      isTop: false,
      routeReady: false,
      title: currentHead.title,
      hasNavigation: currentHead.hasNavigation === undefined ? true : currentHead.hasNavigation,
    }
  },

  computed: {
    // hasNavigation() { return this.routeReady && !this.isTop },
  },


  watch: {
    '$route'(to, from) {
      this.updateHeadInfo();
      // this.isTop = to.name === 'index';
      // this.routerTransitionName = to.name === 'index' || from.name === 'index' ? 'fade' : 'slide';
      // this.routeReady = true;
    },
  },

  methods: {
    requestToggleDrawer() {
      this.drawer = !this.drawer;
      this.$refs.drawer.lastRequested = this.drawer;
    },

    getCurrentComponent() {
      return this.$route.matched[0] && this.$route.matched[0].components.default || null;
    },

    getCurrentHead() {
      const currentComponent = this.getCurrentComponent();
      if (currentComponent) {
        let head;

        if (currentComponent.head) {
          head = currentComponent.head;
        } else if (currentComponent.options && currentComponent.options.head) {
          head = currentComponent.options.head;
        }

        if (head) return typeof head === 'function' ? head() : head;
      }
      return {title: null};
    },

    updateHeadInfo() {
      const currentHead = this.getCurrentHead();
      this.title = currentHead.title;
      this.hasNavigation = currentHead.hasNavigation === undefined ? true : currentHead.hasNavigation;
    },
  },
}
</script>
