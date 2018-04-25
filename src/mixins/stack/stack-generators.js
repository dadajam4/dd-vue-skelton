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
      // listeners.click = this.close;
      listeners.click = e => {
        e.stopPropagation();
        this.close(e);
      }
    }

    const directives = [{name: 'show', value: this.contentIsActive}];
    if (!this.isFixWindow) {
      directives.push({
        name: 'resize',
        value: {
          debounce: 250,
          window: true,
          element: false,
          value: this.onResize,
        },
      });
    }

    if (!this.openOnHover) {
      directives.push(this.createClickOutsideDirective());
    }

    const $stack = this.isExistNode && h(tag, mergeComponentOptions({
      staticClass: 'vc@app-stack__element',
      class: this.computedElementClasses,
      style: this.stackElementStyles,
      attrs: {
        tabindex: '0', // comboboxの入力blur検知時に、relatedTargetで拾えるように、、
      },
      directives,
      on: listeners,
      ref: 'content',
    }, data), children);

    const $stackTransition = this.genTransition([$stack]);
    const wrapperChildren = [$stackTransition];

    if (this.backdrop) {
      const $backdrop = h('div', {
        staticClass: 'vc@app-stack__backdrop',
        directives: [{name: 'show', value: this.contentIsActive}],
        style: this.zIndexStyles,
      });

      const $backdropTransition = h('vt@fade-transition', null, [$backdrop]);
      wrapperChildren.unshift($backdropTransition);
    }

    const $wrapper = h('div', {
      staticClass: 'vc@app-stack',
      // style: this.stackStyles,
      ref: 'element',
    }, wrapperChildren);

    return $wrapper;
  },
}
