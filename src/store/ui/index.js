import header from './header';
import drawer from './drawer';



export default {
  namespaced: true,

  modules: {
    header,
    leftDrawer: drawer('left'),
    rightDrawer: drawer('right'),
  },
}
