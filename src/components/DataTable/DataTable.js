import { getObjectValueByPath } from '~/util';

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
    defaultSortTarget: String,
    defaultSortBy: {
      type: String,
      default: 'ASC',
    },
    itemKey: {
      type: String,
      default: 'id',
    },
    customSort: {
      type: Function,
      default: (items, index, isDescending) => {
        if (index === null) return items

        return items.sort((a, b) => {
          let sortA = getObjectValueByPath(a, index);
          let sortB = getObjectValueByPath(b, index);

          if (isDescending) {
            [sortA, sortB] = [sortB, sortA]
          }

          // Check if both are numbers
          if (!isNaN(sortA) && !isNaN(sortB)) {
            return sortA - sortB;
          }

          // Check if both cannot be evaluated
          if (sortA === null && sortB === null) {
            return 0;
          }

          [sortA, sortB] = [sortA, sortB]
            .map(s => (
              (s || '').toString().toLocaleLowerCase()
            ))

          if (sortA > sortB) return 1;
          if (sortA < sortB) return -1;

          return 0;
        })
      }
    },
  },

  data() {
    return {
      scrollableHeight: 0,
      scrollLeft: 0,
      dummyHeaderHeight: 0,
      sortTarget: this.defaultSortTarget,
      sortBy: this.defaultSortBy.toUpperCase(),
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
    filteredItems() {
      let items = this.items.slice();
      items = this.customSort(
        items,
        this.sortTarget,
        this.sortByDESC,
      );
      return items;
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
    reverseSortBy() { return this.defaultSortBy === 'ASC' ? 'DESC' : 'ASC' },
    sortByASC() { return this.sortBy === 'ASC' },
    sortByDESC() { return this.sortBy === 'DESC' },
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

    onHeaderCellClick(define) {
      if (this.sortTarget === define.value) return this.shiftSortBy();
      this.sortTarget = define.value;
      this.sortBy = this.defaultSortBy;
    },

    shiftSortBy() {
      if (this.sortBy === null) {
        this.sortBy = this.defaultSortBy;
      } else if (this.sortBy === this.defaultSortBy) {
        this.sortBy = this.reverseSortBy;
      } else {
        this.sortBy = null;
        this.sortTarget = null;
      }
    },

    genHeader(inTable = false) {
      const h = this.$createElement;
      const $cells = this.computedHeaders.map((define, index) => {
        const isActive = define.value === this.sortTarget;
        const rotateAmmount = (isActive ? this.sortBy : this.defaultSortBy) === 'ASC' ? 0 : 180;
        const sortable = define.sortable === undefined ? true : define.sortable;
        const classes = {
          'vc@sortable': sortable,
          'vc@active': isActive,
        };
        const listeners = {};
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
            props: {
              rotate: rotateAmmount,
            },
            key: 'sortIcon',
          }, '$ui.icons.sort');
          collapseChildren.push($icon);
          listeners.click = e => this.onHeaderCellClick(define);
        }

        const $collapse = h('div', {
          staticClass: 'vc@data-table__header__collapse',
        }, collapseChildren);

        return h('th', {
          class: classes,
          directives,
          on: listeners,
          key: ref,
          ref,
        }, [$collapse]);
      });
      const $rows = [h('tr', null, $cells)];
      const $header = h('thead', {
        staticClass: 'vc@data-table__header',
      }, $rows);
      return $header;
    },

    genBody() {
      const h = this.$createElement;
      const $rows = this.filteredItems.map((item, rowIndex) => {
        const key = item[this.itemKey] === undefined ? rowIndex : item[this.itemKey];
        const $cells = this.computedHeaders.map((define, cellIndex) => {
          return h('td', {
            key: key + '-' + define.value,
          }, item[define.value]);
        });
        return h('tr', { key }, $cells);
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
