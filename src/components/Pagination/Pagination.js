import Colorable from '~/mixins/colorable';
import isPromise from 'is-promise';



export default {
  name: 'vt@pagination',

  mixins: [Colorable],

  data() {
    return {
      lazyValue: this.value || 1,
      maxButtons: 0,
      // defaultContextColor: 'primary',
      requestId: 0,
    }
  },

  props: {
    circle: Boolean,
    disabled: Boolean,
    length: {
      type: Number,
      default: 0,
      validator: val => val % 1 === 0,
    },
    totalVisible: [Number, String],
    nextIcon: {
      type: String,
      default: '$ui.icons.angleRight',
    },
    prevIcon: {
      type: String,
      default: '$ui.icons.angleLeft',
    },
    value: {
      type: Number,
      default: 0,
    },
    routable: {
      type: [Object, String, Boolean],
      default: false,
    },
    beforeChange: {
      type: Function,
    },
    color: {
      type: String,
      default: 'primary',
    },
  },

  computed: {
    classes() {
      return {
        'vc@pagination': true,
        'vc@pagination--circle': this.circle,
        'vc@pagination--disabled': this.disabled,
      }
    },
    activeItemClasses() {
      return this.addColorClasses({
        'vc@pagination__item--active': true,
      });
    },

    items() {
      const maxLength = this.totalVisible || this.maxButtons;
      if (this.length <= maxLength) {
        return this.range(1, this.length);
      }

      const even = maxLength % 2 === 0 ? 1 : 0;
      const left = Math.floor(maxLength / 2);
      const right = this.length - left + 1 + even;

      if (this.page >= left && this.page <= right) {
        const start = this.page - left + 2;
        const end = this.page + left - 2 - even;

        return [1, '...', ...this.range(start, end), '...', this.length];
      } else {
        return [
          ...this.range(1, left),
          '...',
          ...this.range(this.length - left + 1 + even, this.length)
        ];
      }
    },

    page: {
      get() {
        if (this.isRoutable) {
          return parseInt(this.routeValue) || 1;
        } else {
          return this.lazyValue;
        }
      },
      async set(page) {
        this.requestId = this.requestId + 1;
        const requestId = this.requestId;

        const exec = () => {
          if (this._isDestroyed || this.requestId !== requestId) return;
          this.lazyValue = page;
          this.$emit('input', page);
        }

        let pass = true;
        if (typeof this.beforeChange === 'function') {
          pass = this.beforeChange(page);
        }

        if (isPromise(pass)) {
          pass = await pass;
        }

        if (pass) exec();
      },
    },

    isFirstPage() { return this.page <= 1 },
    isLastPage() { return this.page >= this.length },

    isRoutable() { return this.routable !== undefined && this.routable !== false },
    routableOptions() {
      let options = {
        base  : this.$route.path,
        query : 'page',
        params: false,
      };

      if (typeof this.routable === 'object') {
        options = Object.assign(options, this.routable);
        if (options.params) {
          options.query = false;
        }
      } else if (typeof this.routable === 'string' && this.routable) {
        options = Object.assign(options, {
          base: this.routable,
        });
      }
      return options;
    },
    routeBase() { return this.routableOptions.base },
    routeQueryKey() { return this.routableOptions.query },
    routeParamsKey() { return this.routableOptions.params },
    routeParentKey() { return this.routeQueryKey ? 'query' : 'params' },
    routeChildKey() { return this.routeQueryKey || this.routeParamsKey },
    routeValue() { return this.$route[this.routeParentKey][this.routeChildKey] || 1},
    btnTag() { return this.isRoutable ? 'router-link' : 'button' },
  },

  watch: {
    value() {
      this.lazyValue = this.value;
      // this.init();
    },
  },

  mounted() {
    // this.init();
    this.updateMaxButtons();
  },

  methods: {
    // init() {
    //   this.selected = null;

    //   // TODO: Change this (f75dee3a, cbdf7caa)
    //   setTimeout(() => (this.selected = this.page), 100);
    // },
    go(page) {
      this.page = page;
    },
    onResize(e) {
      this.updateMaxButtons();
    },
    updateMaxButtons() {
      const width = this.$el && this.$el.parentNode
        ? this.$el.parentNode.clientWidth
        : window.innerWidth

      this.maxButtons = Math.floor((width - 96) / 42);
    },
    next(e) {
      e.preventDefault();
      this.go(this.page + 1);
      this.$emit('next');
    },
    previous(e) {
      e.preventDefault();
      this.go(this.page - 1);
      this.$emit('previous');
    },
    range(from, to) {
      const range = [];

      from = from > 0 ? from : 1;

      for (let i = from; i <= to; i++) {
        range.push(i);
      }

      return range;
    },
    createRouteParams(page) {
      const hasPage = page >= 1 && page <= this.length;
      const params = {
        path: hasPage ? this.routeBase : 'javascript:void(0);',
      };
      if (hasPage) {
        params[this.routeParentKey] = Object.assign(
          {},
          this.$route[this.routeParentKey],
          {[this.routeChildKey]: page}
        );
        params.isMatched = page == this.routeValue;
        if (this.routeParamsKey) {
          params.path += `/${page}`;
        }
      }
      return params;
    },
    genIcon(h, vec, disabled, fn) {
      const icon = this[`${vec}Icon`];

      const data = {
        staticClass: 'vc@pagination__navigation vc@pagination__navigation--' + vec,
        class: {
          'vc@pagination__navigation--disabled': disabled
        },
        on: disabled ? {} : { click: fn },
      };

      if (this.isRoutable) {
        const ammount = vec === 'prev' ? -1 : 1;
        const nextPage = this.page + ammount;

        data.attrs = { disabled: this.disabled };
        data.props = {
          to: this.createRouteParams(nextPage),
        };
      }

      return h('li', [
        h(this.btnTag, data, [h('vt@icon', [icon])])
      ])
    },
    genItem(h, i) {
      const data = {
        staticClass: 'vc@pagination__item',
        on: {
          click: () => this.go(i),
        },
        key: i,
      };

      if (!this.isRoutable) {
        if (i === this.page) {
          data.class = this.activeItemClasses;
        }
      } else {
        const to = this.createRouteParams(i);
        if (to.isMatched) data.class = this.activeItemClasses;
        data.attrs = { disabled: this.disabled };
        data.props = {
          to,
        };
      }

      return h(this.btnTag, data, [i])
    },
    genItems(h) {
      return this.items.map((i, index) => {
        return h('li', { key: index }, [
          isNaN(i) && h('span', { class: 'vc@pagination__more' }, [i]) || this.genItem(h, i)
        ])
      })
    }
  },

  render(h) {
    const children = [
      this.genIcon(h, 'prev', this.page <= 1, this.previous),
      this.genItems(h),
      this.genIcon(h, 'next', this.page >= this.length, this.next),
    ];

    return h('nav', {
      directives: [{ name: 'resize', value: this.onResize }],
      class: this.classes,
    }, [h('ul', {}, [children])]);
  }
}
