import Stackable from '~/mixins/stackable';

// import Positionable from './positionable';

// import Stackable from './stackable';
const PAGE_OFFSET = 20;

const dimensions = {
  app: {
    top: 0, left: 0,
    bottom: 0, right: 0,
    width: 0, height: 0,
    offsetTop: 0, scrollHeight: 0,
  },
  activator: {
    top: 0, left: 0,
    bottom: 0, right: 0,
    width: 0, height: 0,
    offsetTop: 0, scrollHeight: 0,
  },
  content: {
    top: 0, left: 0,
    bottom: 0, right: 0,
    width: 0, height: 0,
    offsetTop: 0, scrollHeight: 0,
  },
  // hasWindow: false
}

export default {
  mixins: [Stackable],

  props: {
    // positionX: {
    //   type: Number,
    //   default: null
    // },
    // positionY: {
    //   type: Number,
    //   default: null
    // },
    // zIndex: {
    //   type: [Number, String],
    //   default: null
    // }
    // baseX: {
    //   type: String,
    //   default: 'left',
    // },
    // baseY: {
    //   type: String,
    //   default: 'bottom',
    // },
    // vecX: {
    //   type: String,
    //   default: 'right',
    // },
    // vecY: {
    //   type: String,
    //   default: 'bottom',
    // },

    top: Boolean,
    bottom: Boolean,
    left: Boolean,
    right: Boolean,
    centerX: Boolean,
    centerY: Boolean,

    // centerX: Boolean,
    // centerY: Boolean,
    // defaultXAlign: {
    //   type: String,
    //   default: 'left'
    // },

    // offsetX: Boolean,
    // offsetY: Boolean,
    // fitMinWidth: Boolean,
    // fitMinHeight: Boolean,

    activatorAction: {
      type: String,
      default: 'toggle',
    },
  },

  data() {
    return {
      dimensions: Object.assign({}, dimensions),
    }
  },

  computed: {
    hasActivator() {
      return !!this.$slots.activator;
    },
    activatorActionIsToggle() { return this.activatorAction === 'toggle' },

    // baseXLeft() { return this.baseX === 'left' },
    // baseXCenter() { return this.baseX === 'center' },
    // baseXRight() { return this.baseX === 'right' },
    // baseYTop() { return this.baseX === 'top' },
    // baseYCenter() { return this.baseX === 'center' },
    // baseYBottom() { return this.baseX === 'bottom' },
    // vecXLeft() { return this.vecX === 'left' },
    // vecXRight() { return this.vecX === 'right' },
    // vecYTop() { return this.vecX === 'top' },
    // vecYBottom() { return this.vecX === 'bottom' },


    calcLeft() {
      const app = this.dimensions.app;
      const a = this.dimensions.activator;
      const c = this.dimensions.content;

      let left;
      if (this.left) {
        left = a.left - c.width;
      } else if (this.centerX) {
        left = a.left - (c.width - a.width) * 0.5;
      } else {
        left = a.right;
      }

      left = Math.max(app.left + PAGE_OFFSET, left);

      let width = c.width;
      const right = left + width;
      const xOverflow = right - (app.right - PAGE_OFFSET);

      if (xOverflow) {
        width -= xOverflow;
      }


      // if (left )
      // console.log(left);
      // let left = this.left ? a.right - c.width : a.left


    // baseXLeft() { return this.baseX === 'left' },
    // baseXCenter() { return this.baseX === 'center' },
    // baseXRight() { return this.baseX === 'right' },

      // if (this.offsetX) left += this.left ? -a.width : a.width
      // if (this.nudgeLeft) left -= this.nudgeLeft
      // if (this.nudgeRight) left += this.nudgeRight

      // return left
    },
  },

  watch: {
    isActive(val) {
      if (val) {
        this.updateDimensions();

        // const $stack = this.$appStackContainer.getStackByVm(this);
        // console.log($stack.$refs);
        //
        // const $ae = this.getActivatorElement();
        // console.log(this.measure($ae));
      }
    },
  },

  methods: {
    resetDimensions() {
      this.dimensions = Object.assign({}, dimensions)
    },

    sneakPeek(cb) {
      setTimeout(cb, 200);
      // requestAnimationFrame(() => {
      //   const $el = this.$refs.content

      //   if (this.isShown(el)) return cb()

      //   el.style.display = 'inline-block'
      //   cb()
      //   el.style.display = 'none'
      // });
    },

    updateDimensions() {
      // console.log(this.$el);

      // Ensure that overflow calculation
      // can work properly every update
      this.resetDimensions();

      const dimensions = {};

      dimensions.app = this.measure(this.$appStackContainer.$el);
      // dimensions.activator = this.measure(this.getActivatorElement());

      // this.sneakPeek(() => {
      //   dimensions.content = this.measure(this.getContentElement());
      //   console.log(dimensions);
      // });

      const $stack = this.getStack();
      dimensions.activator = this.measure(this.getActivatorElement());
      this.sneakPeek(() => {
        dimensions.content = this.measure(this.getContentElement());
        this.dimensions = dimensions;
        // console.log(dimensions);
        this.calcLeft;
      });
      // $stack.setDimention({top: ad.top, left: ad.left});

      // // Activate should already be shown
      // dimensions.activator = !this.hasActivator || this.absolute
      //   ? this.absolutePosition()
      //   : this.measure(this.getActivatorElement());

      // // Display and hide to get dimensions
      // this.sneakPeek(() => {
      //   dimensions.content = this.measure(this.$refs.content)

      //   this.dimensions = dimensions
      // })
    },

    setupActivater($activator) {
      if ($activator.componentOptions) {
        $activator.componentOptions.listeners = $activator.componentOptions.listeners || {};
        $activator.componentOptions.listeners.click = this.onClickActivater;
      } else {
        $activator.data.on = $activator.data.on || {};
        $activator.data.on.click = this.onClickActivater;
      }
    },

    onClickActivater(e) {
      if (this.activatorActionIsToggle) {
        this.isActive = !this.isActive;
      } else {
        this.isActive = true;
      }
    },

    getActivator() {
      return this.$slots.activator && this.$slots.activator[0];
    },

    getActivatorElement() {
      const $activator = this.getActivator();
      if ($activator) {
        if ($activator.elm) return $activator.elm;
        if ($activator.componentInstance) return $activator.componentInstance.$el;
      }
    },

    getStack() {
      return this.$appStackContainer.getStackByVm(this);
    },

    getContent() {
      return this.getStack();
    },

    getContentElement() {
      const $stack = this.getContent();
      return $stack && $stack.$el;
    },

    measure($el, selector) {
      $el = selector ? $el.querySelector(selector) : $el;

      if (!$el) return null;

      const {
        top,
        bottom,
        left,
        right,
        height,
        width,
      } = $el.getBoundingClientRect();

      return {
        offsetTop   : $el.offsetTop,
        scrollHeight: $el.scrollHeight,
        top, bottom, left, right, height, width,
      }
    },
    // absolutePosition () {
    //   return {
    //     offsetTop: 0,
    //     scrollHeight: 0,
    //     top: this.positionY || this.absoluteY,
    //     bottom: this.positionY || this.absoluteY,
    //     left: this.positionX || this.absoluteX,
    //     right: this.positionX || this.absoluteX,
    //     height: 0,
    //     width: 0
    //   }
    // },
    // activate () {},
    // calcLeft () {
    //   const a = this.dimensions.activator
    //   const c = this.dimensions.content
    //   let left = this.left ? a.right - c.width : a.left

    //   if (this.offsetX) left += this.left ? -a.width : a.width
    //   if (this.nudgeLeft) left -= this.nudgeLeft
    //   if (this.nudgeRight) left += this.nudgeRight

    //   return left
    // },
    // calcTop () {
    //   this.checkForWindow()

    //   const a = this.dimensions.activator
    //   const c = this.dimensions.content
    //   let top = this.top ? a.bottom - c.height : a.top

    //   if (this.offsetY) top += this.top ? -a.height : a.height
    //   if (this.nudgeTop) top -= this.nudgeTop
    //   if (this.nudgeBottom) top += this.nudgeBottom

    //   return top + this.pageYOffset
    // },
    // calcXOverflow (left) {
    //   const parsedMaxWidth = isNaN(parseInt(this.maxWidth))
    //     ? 0
    //     : parseInt(this.maxWidth)
    //   const innerWidth = this.getInnerWidth()
    //   const maxWidth = Math.max(
    //     this.dimensions.content.width,
    //     parsedMaxWidth
    //   )
    //   const totalWidth = left + maxWidth
    //   const availableWidth = totalWidth - innerWidth

    //   if ((!this.left || this.right) && availableWidth > 0) {
    //     left = (
    //       innerWidth -
    //       maxWidth -
    //       (innerWidth > 600 ? 30 : 12) // Account for scrollbar
    //     )
    //   }

    //   if (left < 0) left = 12

    //   return left
    // },
    // calcYOverflow (top) {
    //   const documentHeight = this.getInnerHeight()
    //   const toTop = this.pageYOffset + documentHeight
    //   const activator = this.dimensions.activator
    //   const contentHeight = this.dimensions.content.height
    //   const totalHeight = top + contentHeight
    //   const isOverflowing = toTop < totalHeight

    //   // If overflowing bottom and offset
    //   if (isOverflowing && this.offsetOverflow) {
    //     top = this.pageYOffset + (activator.top - contentHeight)
    //   // If overflowing bottom
    //   } else if (isOverflowing && !this.allowOverflow) {
    //     top = toTop - contentHeight - 12
    //   // If overflowing top
    //   } else if (top < this.pageYOffset && !this.allowOverflow) {
    //     top = this.pageYOffset + 12
    //   }

    //   return top < 12 ? 12 : top
    // },
    // callActivate () {
    //   this.checkForWindow()
    //   if (!this.hasWindow) return

    //   this.activate()
    // },
    // callDeactivate () {
    //   this.isContentActive = false

    //   this.deactivate()
    // },
    // checkForWindow () {
    //   this.hasWindow = typeof window !== 'undefined'

    //   if (this.hasWindow) {
    //     this.pageYOffset = this.getOffsetTop()
    //   }
    // },
    // deactivate () {},
    // getInnerHeight () {
    //   if (!this.hasWindow) return 0

    //   return window.innerHeight ||
    //     document.documentElement.clientHeight
    // },
    // getInnerWidth () {
    //   if (!this.hasWindow) return 0

    //   return window.innerWidth
    // },
    // getOffsetTop () {
    //   if (!this.hasWindow) return 0

    //   return window.pageYOffset ||
    //     document.documentElement.scrollTop
    // },
    // measure (el, selector) {
    //   el = selector ? el.querySelector(selector) : el

    //   if (!el) return null

    //   const {
    //     top,
    //     bottom,
    //     left,
    //     right,
    //     height,
    //     width
    //   } = el.getBoundingClientRect()

    //   return {
    //     offsetTop: el.offsetTop,
    //     scrollHeight: el.scrollHeight,
    //     top, bottom, left, right, height, width
    //   }
    // },
    // sneakPeek (cb) {
    //   requestAnimationFrame(() => {
    //     const el = this.$refs.content

    //     if (this.isShown(el)) return cb()

    //     el.style.display = 'inline-block'
    //     cb()
    //     el.style.display = 'none'
    //   })
    // },
    // startTransition () {
    //   requestAnimationFrame(() => (this.isContentActive = true))
    // },
    // isShown (el) {
    //   return el.style.display !== 'none'
    // },
    renderActivator(h) {
      const $activator = this.getActivator();
      $activator && this.setupActivater($activator);
      return $activator;
    },
  },
}