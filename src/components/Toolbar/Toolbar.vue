<script>
import Colorable from '~/mixins/color';
import { snake2camel } from '~/helpers';



let MINIMUM_HEIGHT;

export default {
  name: 'vt@toolbar',

  mixins: [Colorable],

  props: {
    tag: {
      type: String,
      default: 'nav',
    },
    scroll: Boolean,
    dense: Boolean,
    floating: Boolean,
    height: {
      type: [String, Number],
    },
    wrap: Boolean,
  },

  data() {
    return {
      innerHeight: null,
    }
  },

  computed: {
    computedHeight() {
      let height;

      if (this.height) {
        height = parseInt(this.height, 10);
      } else if (this.dense) {
        height = this.$ui.toolbarHeights.dense;
      } else {
        for (const key in this.$ui.toolbarHeights) {
          if (this.$ui.mq[key]) {
            height = this.$ui.toolbarHeights[key];
            break;
          }
        }
      }

      if (!height) height = MINIMUM_HEIGHT;
      this.innerHeight = height;
      return height;
    },
    heightProp() { return this.wrap ? 'minHeight' : 'height' },
    heightStyle() {
      const height = this.computedHeight;
      return height === undefined ? {} : {[this.heightProp]: `${height}px`};
    },
    toolbarColorClasses() { return this.addColorClasses() },
    classes() {
      return {
        'vc@toolbar': true,
        'vc@toolbar--scroll': this.scroll,
        'vc@toolbar--dense': this.dense,
        'vc@toolbar--floating': this.floating,
        'vc@toolbar--wrap': this.wrap,
      }
    },

    bodyClasses() {
      return Object.assign({
        'vc@toolbar__body': true,
      }, this.toolbarColorClasses);
    },
  },

  watch: {
    innerHeight(val) {
      this.$emit('update-height', val);
    },
  },

  methods: {
    setupMinimumHeight() {
      if (MINIMUM_HEIGHT !== undefined) return;
      for (const key in this.$ui.toolbarHeights) {
        const height = this.$ui.toolbarHeights[key];
        if (MINIMUM_HEIGHT === undefined || height < MINIMUM_HEIGHT) MINIMUM_HEIGHT = height;
      }
    },
  },

  created() {
    if (this.$ui.hasWindow) this.setupMinimumHeight();
  },

  render(h) {
    const TagName = this.tag;

    const bodyChildren = [], extensions = [];
    this.$slots.default && this.$slots.default.forEach(vnode => {
      let isExtension = false;
      const fnOptions = vnode.fnOptions;
      if (fnOptions) {
        if (fnOptions.name === 'vt@toolbar-items') {
          vnode.data.style = Object.assign({}, this.heightStyle, vnode.data.style);
        }
      }

      const componentOptions = vnode.componentOptions;
      if (componentOptions) {
        let propsData = componentOptions.propsData || {};
        if (componentOptions.tag === 'vt@text-field') {
          if (!propsData.md && !propsData.lg) propsData.sm = true;
        }

        if (componentOptions.tag === 'vt@toolbar-extension') {
          isExtension = true;
          const inheritsColor = propsData.inheritsColor;
          if (
            inheritsColor !== undefined
            && inheritsColor !== false
          ) {
            vnode.data.class = Object.assign({}, this.toolbarColorClasses, vnode.data.class);
          }

          vnode.data.style = Object.assign({}, this.heightStyle, vnode.data.style);
        }

        componentOptions.propsData = propsData;
      }

      if (isExtension) {
        extensions.push(vnode);
      } else {
        bodyChildren.push(vnode);
      }
    });

    const $body = h('div', {class: this.bodyClasses, style: this.heightStyle}, bodyChildren);
    const children = [$body, ...extensions];
    const $toolbar = this.scroll ? h('vt@scroller', {class: this.classes, props: {tag: TagName, horizontal: true}}, children)
                                 : h(TagName, {class: this.classes}, children);

    return $toolbar;
  },
}
</script>
