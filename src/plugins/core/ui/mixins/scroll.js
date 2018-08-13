import ScrollDetector from 'dd-scroll-detector';



export default function(parent) {
  const sd = new ScrollDetector();

  return {
    name: 'vt@ui-scroll',

    parent,

    data() {
      return {
        loaded         : sd.loaded,
        top            : sd.scroll.top,
        left           : sd.scroll.left,
        width          : sd.width,
        height         : sd.height,
        scrollWidth    : sd.scrollWidth,
        scrollHeight   : sd.scrollHeight,
        lastHorizontal : sd.lastHorizontal,
        lastVertical   : sd.lastVertical,
        lastAmmountTop : sd.lastAmmount.top,
        lastAmmountLeft: sd.lastAmmount.left,
        animating: false,
      }
    },

    computed: {
      lastVerticalIsTop() { return this.lastVertical === 'top' },
      lastVerticalIsBottom() { return this.lastVertical === 'bottom' },
      lastHorizontalIsLeft() { return this.lastHorizontal === 'left' },
      lastHorizontalIsRight() { return this.lastHorizontal === 'right' },
    },

    methods: {
      start() {
        if (!this.$ui.hasWindow) return;
        this.update();
        sd.on('scroll', e => {
          this.updateScrollPositions();
        });
        sd.on('resize', e => {
          this.update();
        });
        sd.on('changeLastHorizontal', e => {
          this.updateLastHorizontal();
        });
        sd.on('changeLastVertical', e => {
          this.updateLastVertical();
        });
        sd.hasAndOne('load', e => {
          this.loaded = true;
          this.update();
        });
      },
      update() {
        this.updateScrollPositions();
        this.updateSize();
        this.updateScrollSize();
        this.updateLastHorizontal();
        this.updateLastVertical();
      },

      updateScrollPositions() {
        this.top             = sd.scroll.top;
        this.left            = sd.scroll.left;
        this.lastAmmountTop  = sd.lastAmmount.top;
        this.lastAmmountLeft = sd.lastAmmount.left;
      },
      updateSize() {
        this.width  = sd.width;
        this.height = sd.height;
      },
      updateScrollSize() {
        this.scrollWidth  = sd.scrollWidth;
        this.scrollHeight = sd.scrollHeight;
      },
      updateLastHorizontal() {
        this.lastHorizontal = sd.lastHorizontal;
      },
      updateLastVertical() {
        this.lastVertical = sd.lastVertical;
      },

      animateDone() {
        if (!this.animating) return Promise.resolve();

        return new Promise(resolve => {
          const timerId = setTimeout(listener, 2000);

          const listener = () => {
            clearTimeout(timerId);
            this.$off('animate-done', listener);
            resolve();
          }

          this.$once('animate-done', listener);
        });
      },

      to(el, opts = {}) {
        this.animating = true;

        el = typeof el === 'object' && el._isVue ? el.$el : el;
        if (typeof el === 'string') {
          el = document.querySelector(el);
        }

        const originOnDone = opts.onDone;
        const originOnCancel = opts.onCancel;
        const done = () => {
          return new Promise(resolve => {
            setTimeout(() => {
              this.animating = false;
              this.$emit('animate-done');
              return resolve();
            }, 100)
          });
        }

        const createdOptions = Object.assign({}, opts, {
          offset: -20,
          onDone: () => {
            done().then(() => {
              if (originOnDone) originOnDone();
            });
            // if (typeof el === 'string' && el.indexOf('#') === 0) {
            //   history.pushState({}, '', this.href);
            // }
          },
          onCancel: () => {
            done().then(() => {
              if (originOnCancel) originOnCancel();
            });
          },
        });

        createdOptions.offset -= this.$ui.header.fixedHeight;
        return this.$scrollTo(el, createdOptions);
      },
    },

    created() {
      this.start();
    },
  }
}
