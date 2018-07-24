export default {
  name: 'vt@data-table',

  props: {
    headers: {
      type: Array,
    },
    items: {
      type: Array,
    },
    width: {
      type: [String, Number],
    },
    height: {
      type: [String, Number],
    },
    maxWidth: {
      type: [String, Number],
    },
    maxHeight: {
      type: [String, Number],
    },
    headerFixed: Boolean,
  },

  data() {
    return {
      scrollableHeight: 0,
      scrollLeft: 0,
      dummyHeaderHeight: 0,
    }
  },

  computed: {
    classes() {
      return {
        'vc@data-table--header-fixed': this.headerFixed,
      }
    },
    computedHeaders() {
      return this.headers;
    },
    computedItems() {
      return this.items;
    },
    scrollerProps() {
      return {
        width: this.width,
        height: this.height,
        maxWidth: this.maxWidth,
        maxHeight: this.maxHeight,
        layerWidth: 20,
      };
    },
  },

  methods: {
    genScroller(children) {
      const h = this.$createElement;

      return h('vt@scroller', {
        style: {
          'margin-top': '-' + this.dummyHeaderHeight + 'px',
        },
        props: this.scrollerProps,
        on: {
          mount: e => {
            if (this.headerFixed) {
              this.updateFixedHeaderCellsWidth();
            }
            return this.updateScrollerParams(e);
          },
          scroll: this.updateScrollerParams,
          resize: this.updateScrollerParams,
        },
        ref: 'scroller',
      }, children);
    },

    updateScrollerParams() {
      const { scrollPosition, scrollableHeight, leftIsScrollable, rightIsScrollable } = this.$refs.scroller;
      this.scrollableHeight = scrollableHeight;
      this.scrollLeft = scrollPosition.left;
      this.leftIsScrollable = leftIsScrollable;
      this.rightIsScrollable = rightIsScrollable;
    },

    updateFixedHeaderCellsWidth() {
      if (this.headerFixed) {
        this.computedHeaders.forEach((define, index) => this.updateFixedHeaderCellWidthByIndex(index));
      }
    },

    updateFixedHeaderCellWidthByIndex(index) {
      const $origin = this.$refs['headerCells' + index];
      const $fixed = this.$refs['fixedHeaderCells' + index];
      if (!$origin || !$fixed) return;
      $fixed.style.width = $origin.clientWidth + 'px';
      this.dummyHeaderHeight = $origin.clientHeight;
    },

    genHeader(inTable = false) {
      const h = this.$createElement;
      const $cells = this.computedHeaders.map((define, index) => {
        const sortable = define.sortable === undefined ? true : define.sortable;
        const classes = {
          'vc@sortable': sortable,
        };
        const ref = (inTable ? 'headerCells' : 'fixedHeaderCells') + index;
        const directives = inTable && this.headerFixed ? [{
          name: 'resize',
          value: {
            value: e => {
              this.updateFixedHeaderCellWidthByIndex(index);
            },
          },
        }] : void(0);

        const collapseChildren = [define.text];
        if (sortable) {
          const $icon = h('vt@icon', {
            staticClass: 'vt@data-table__sort-icon',
          }, 'arrow-up');
          collapseChildren.push($icon);
        }

        const $collapse = h('div', {
          staticClass: 'vc@data-table__header__collapse',
        }, collapseChildren);

        return h('th', { class: classes, directives, ref }, [$collapse]);
      });
      const $rows = [h('tr', null, $cells)];
      const $header = h('thead', {
        staticClass: 'vc@data-table__header',
      }, $rows);
      return $header;
    },

    genBody() {
      const h = this.$createElement;
      const $cells = this.computedHeaders.map(define => {
        return h('th', null, define.text);
      });
      const $rows = this.computedItems.map(item => {
        const $cells = this.computedHeaders.map(define => {
          return h('td', null, item[define.value]);
        });
        return h('tr', null, $cells);
      });
      const $body = h('tbody', {
        staticClass: 'vc@data-table__body',
      }, $rows);
      return $body;
    },

    genTable() {
      const h = this.$createElement;
      return h('table', {
        staticClass: 'vc@data-table',
        class: this.classes,
      }, [
        this.genHeader(true),
        this.genBody(),
      ]);
    },

    genFixedHeader() {
      const h = this.$createElement;
      const $table = h('table', {
        staticClass: 'vc@data-table--only-header',
      }, [
        this.genHeader(),
      ]);
      return h('div', {
        staticClass: 'vc@data-table-fixed-header-scroll',
        style: {
          'overflow-x': 'hidden',
          'overflow-y': this.scrollableHeight === 0 ? 'hidden' : 'scroll',
        },
        domProps: {
          scrollLeft: this.scrollLeft,
        },
      }, [$table]);
    },
  },

  render(h) {
    const children = [this.genScroller([this.genTable()])];
    if (this.headerFixed) children.unshift(this.genFixedHeader());

    return h('div', {
      staticClass: 'vc@data-table-context',
    }, children);
  }
}
