import AppStack from './AppStack';



const INACTIVE_Z_INDEX = 1;



export default {
  name: 'vt@app-stack-container',

  components: {
    [AppStack.name]: AppStack,
  },

  data() {
    return {
      stacks: [],
      zIndexMap: {},
      lastActivated: null,
    }
  },

  methods: {

    roundZIndexMap() {
      const activeTargets = [];
      const inactiveTargets = [];

      for (let _uid in this.zIndexMap) {
        const $vm = this.stacks.find($vm => String($vm._uid) === _uid);
        const row = {_uid, zIndex: this.zIndexMap[_uid]};
        if ($vm.isActiveOrVisible) {
          activeTargets.push(row);
        } else {
          inactiveTargets.push(row);
        }
      }

      for (let row of inactiveTargets) {
        this.zIndexMap[row._uid] = INACTIVE_Z_INDEX;
      }

      activeTargets.sort((a, b) => {
        if (a.zIndex < b.zIndex) return -1;
        if (a.zIndex > b.zIndex) return 1;
        return 0;
      });

      activeTargets.forEach((row, index) => {
        this.zIndexMap[row._uid] = INACTIVE_Z_INDEX + index + 1;
      });
    },

    getMaxZIndex() {
      let max = INACTIVE_Z_INDEX;
      for (let _uid in this.zIndexMap) {
        max = Math.max(this.zIndexMap[_uid], max);
      }
      return max;
    },

    getZIndexByVm($vm) {
      return this.zIndexMap[String($vm._uid)] || -1;
    },

    getNewZIndexByVm($vm) {
      return $vm.isActiveOrVisible ? Math.max(this.getMaxZIndex() + 1, INACTIVE_Z_INDEX + 1) : INACTIVE_Z_INDEX;
    },

    attach($vm) {
      if (!this.stacks.includes($vm)) {
        const activateHandler = () => this.onStackActivate($vm);
        const renderHandler = () => this.onStackRender($vm);
        this.stackActivateHanlders[$vm._uid] = activateHandler;
        this.stackRenderHanlders[$vm._uid] = renderHandler;
        this.$set(this.zIndexMap, String($vm._uid), this.getNewZIndexByVm($vm));
        this.stacks.unshift($vm);
        $vm.$on('activate', activateHandler);
        $vm.$on('render', renderHandler);
      }
    },
    detach($vm) {
      const index = this.stacks.indexOf($vm);
      if (index !== -1) {
        const activateHandler = this.stackActivateHanlders[$vm._uid];
        const renderHandler = this.stackRenderHanlders[$vm._uid];
        $vm.$off('activate', activateHandler);
        $vm.$off('render', renderHandler);
        this.stacks.splice(index, 1);
        this.$delete(this.zIndexMap, String($vm._uid));
        this.roundZIndexMap();
      }
    },
    onStackActivate($vm) {
      this.zIndexMap[String($vm._uid)] = this.getNewZIndexByVm($vm);
      this.roundZIndexMap();
    },
    onStackRender($vm) {
      const $ref = this.$refs[`stack-${$vm._uid}`];
      $ref && $ref.$forceUpdate();
    },
    getStackByVm($vm) {
      return this.$refs[`stack-${$vm._uid}`];
    },
  },

  created() {
    this.stackActivateHanlders = {};
    this.stackRenderHanlders = {};
  },

  render(h) {
    const children = this.stacks.map($vm => h(AppStack.name, {
      props: {
        zIndex: this.getZIndexByVm($vm),
        renderContext: $vm.renderContext,
      },
      key: `stack-${$vm._uid}`,
      ref: `stack-${$vm._uid}`,
    }));

    return h('div', {
      staticClass: 'vc@app-stack-container',
    }, children);
  },
}
