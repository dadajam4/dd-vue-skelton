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
    const $stack = this.isExistNode && h(tag, mergeComponentOptions({
      staticClass: 'vc@app-stack',
      style: this.stackStyles,
      directives: [
        {name: 'show', value: this.isActive},
      ],
      ref: 'content',
    }, data), children);

    return this.genTransition([$stack]);
  },
}