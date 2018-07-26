import Mq from './mixins/mq';

const Ui = {
  install(Vue, opts = {}) {
    if (this.installed) return;
    this.installed = true;

    const uiValues = {
      breakPoints: [],
      mediaMatches: [],
      mediaMatchAliases: {},
      toolbarHeights: {},
    };

    if (typeof window !== 'undefined') {
      let $cssValues = document.createElement('div');
      $cssValues.setAttribute('class', 'vc@css-values');
      document.body.appendChild($cssValues);
      const styles = window.getComputedStyle($cssValues, null);
      const values = JSON.parse(JSON.parse(styles.content));
      document.body.removeChild($cssValues);
      $cssValues = null;
      for (const key in uiValues) {
        const value = values[key];
        if (value !== undefined) uiValues[key] = value;
      }
    }

    const $ui = new Vue({
      mixins: [Mq],

      data: {
        hasWindow: typeof window !== 'undefined',
        ...uiValues,
      },
    });

    Vue.prototype.$ui = $ui;
  },
};



export default Ui;
