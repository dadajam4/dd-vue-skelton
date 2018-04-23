const INACTIVE_Z_INDEX = 1;



export default {
  name: 'vt@app-stack-container',

  inject: ['appDimentions'],

  data() {
    return {
      stacks: [],
      frontStack: null,
    }
  },

  computed: {
    dimension() { return {width: this.appDimentions.app.width, height: this.appDimentions.app.height } },
  },

  methods: {

    getMaxZIndex(exclude) {
      let max = INACTIVE_Z_INDEX;
      for (let $vm of this.stacks) {
        if ($vm === exclude) continue;
        max = Math.max($vm.zIndex, max);
      }
      return max;
    },

    getMaxZIndexVm(exclude) {
      const maxZIndex = this.getMaxZIndex(exclude);
      if (maxZIndex) return this.stacks.find($vm => $vm !== exclude && $vm.zIndex === maxZIndex);
    },

    getNewZIndexByVm($vm) {
      return $vm.isVisible ? Math.max(this.getMaxZIndex() + 1, INACTIVE_Z_INDEX + 1) : INACTIVE_Z_INDEX;
    },

    attach($vm) {
      if (this.stacks.includes($vm)) return;

      if (
        $vm._isDestroyed
        || !$vm.$refs.element
      ) return;

      this.$el.insertBefore(
        $vm.$refs.element,
        this.$el.firstChild
      );

      const visibilityHandler = () => this.onChangeStackVisiblility($vm);
      this.stackVisibilityHanlders[$vm._uid] = visibilityHandler;
      this.stacks.unshift($vm);
      visibilityHandler();
      $vm.$on('changeVisible', visibilityHandler);
      $vm.detached = true;
    },

    detach($vm) {
      const index = this.stacks.indexOf($vm);
      if (index === -1) return;

      // IE11 Fix
      try {
        $vm.$refs.element && this.$el.removeChild($vm.$refs.element);
      } catch (e) {}

      const visibilityHandler = this.stackVisibilityHanlders[$vm._uid];
      $vm.$off('changeVisible', visibilityHandler);
      this.stackVisibilityHanlders[$vm._uid] = null;
      delete this.stackVisibilityHanlders[$vm._uid];
      this.stacks.splice(index, 1);
      $vm.detached = false;
    },

    onChangeStackVisiblility($vm) {
      const activeMaps = [];
      const inactiveMaps = [];

      if ($vm.isVisible) {
        this.frontStack = $vm;
      } else if ($vm === this.frontStack) {
        const maxZIndexVm = this.getMaxZIndexVm($vm);
        this.frontStack = maxZIndexVm || null;
        // this.$util.blurActiveElement();
      }

      for (let $target of this.stacks) {
        const myZIndex = this.getNewZIndexByVm($vm);
        if ($target.isVisible) {
          activeMaps.push({$vm: $target, zIndex: $vm === $target ? myZIndex : $target.zIndex});
        } else {
          if ($vm.zIndex !== INACTIVE_Z_INDEX) $vm.zIndex = INACTIVE_Z_INDEX;
        }
      }

      activeMaps.sort((a, b) => {
        if (a.zIndex < b.zIndex) return -1;
        if (a.zIndex > b.zIndex) return 1;
        return 0;
      });

      activeMaps.forEach((row, index) => {
        row.$vm.zIndex = INACTIVE_Z_INDEX + index + 1;
      });
    },

    setupEscKeyListener() {
      if (typeof document === 'undefined') return;
      document.addEventListener('keydown', e => {
        if (this.frontStack && this.frontStack.closeOnEsc && e.which === 27) {
          this.frontStack.close();
        }
      }, false);
    },
  },

  created() {
    this.stackVisibilityHanlders = {};
    this.setupEscKeyListener();
  },

  render(h) {
    return h('div', {
      staticClass: 'vc@app-stack-container',
    });
  },
}
