import Mq from './mixins/mq';
import Icons from './mixins/icons';
import Theme from './mixins/theme';
import Scroll from './mixins/scroll';
import Header from './mixins/header';
import Drawer from './mixins/drawer';
import VueScrollTo from 'vue-scrollto';
import values from './values';

const Ui = {
  install(Vue, opts = {}) {
    if (this.installed) return;
    this.installed = true;

    const uiValues = values(opts.uiValues);

    const $ui = new Vue({
      mixins: [
        Mq,
        Icons(opts.iconfont, opts.icons),
        Theme(uiValues.theme),
      ],

      data: {
        hasWindow: typeof window !== 'undefined',
        ...uiValues,
      },
    });

    Vue.prototype.$ui = $ui;

    Vue.use(VueScrollTo);
    $ui.scroll = new Vue(Scroll($ui));

    $ui.header = new Vue(Header($ui));
    $ui.drawer = {
      left: new Vue(Drawer($ui, 'left')),
      right: new Vue(Drawer($ui, 'right')),
    };
  },
};



export default Ui;
