import Mq from './mixins/mq';
import Icons from './mixins/icons';
import Theme from './mixins/theme';
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
  },
};



export default Ui;
