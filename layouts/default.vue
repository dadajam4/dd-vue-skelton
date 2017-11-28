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
    header
    header-fixed
  >
    <app-header :title="title" @click-toggle-drawer="requestToggleDrawer" />
    <nuxt class="my-nuxt" ref="nuxt" />
    <app-drawer v-model="drawer" ref="drawer" />
  </vt@app>
</template>

<script>
import Header from '../components/Header';
import Drawer from '../components/Drawer';



export default {
  components: {
    'app-header': Header,
    'app-drawer': Drawer,
  },

  data() {
    return {
      drawer: false,
      theme: null,
      isTop: false,
      routeReady: false,
      title: this.getCurrentTitle(),
    }
  },

  computed: {
    // hasNavigation() { return this.routeReady && !this.isTop },
  },


  watch: {
    '$route'(to, from) {
      this.updateTitle();
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

    getCurrentHead() {
      const currentComponent = this.$route.matched[0] && this.$route.matched[0].components.default;
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

    getCurrentTitle() { return this.getCurrentHead().title },

    updateTitle() {
      const currentHead = this.getCurrentHead();
      this.title = this.getCurrentTitle();
    },
  },
}
</script>
