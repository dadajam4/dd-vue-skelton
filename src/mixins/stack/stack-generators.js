import { mergeComponentOptions } from '~/util';



export default {

  /**
   * ボディのトランジションを制御するvnodeを返却する
   */
  genTransition(children) {
    const h = this.$createElement;
    return h('transition', {
      props: {
        name: this.transition,
      },
      on: {
        'before-enter': e => { this.isVisible = true },
        'after-leave': e => { this.isVisible = false },
      },
    }, children);
  },

  /**
   * app直下に挿入するスタックvnodeを返却する
   */
  genStack(tag, data, children) {
    const h = this.$createElement;

    const listeners = {};
    if (this.openOnHover) {
      listeners.mouseleave = this.mouseLeaveHandler;
    }
    if (this.closeOnContentClick) {
      listeners.click = this.close;
    }

    const directives = [
      {name: 'show', value: this.contentIsActive},
      {
        name: 'resize',
        value: {
          debounce: 250,
          window: true,
          element: false,
          value: this.onResize,
        }
      },
    ];

    if (!this.openOnHover) {
      directives.push({
        name: 'click-outside',
        value: e => {
          this.runDelay(200, () => {
            if (!this.isActive) return;
            if (this.$activator && (e.target === this.$activator || this.$activator.contains(e.target))) return false;
            this.close();
          });
        },
      });
    }

    const $stack = this.isExistNode && h(tag, mergeComponentOptions({
      staticClass: 'vc@app-stack',
      style: this.stackStyles,
      attrs: {
        tabindex: '0', // comboboxの入力blur検知時に、relatedTargetで拾えるように、、
      },
      directives,
      on: listeners,
      ref: 'content',
    }, data), children);

    return this.genTransition([$stack]);
  },
}