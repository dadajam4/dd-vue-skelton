import DataIterable from '~/mixins/data-iterable'

// import VProgressLinear from '../VProgressLinear'

import Head from './mixins/head';
import Body from './mixins/body';
import Foot from './mixins/foot';
import Progress from './mixins/progress';

import {
  createSimpleFunctional,
  getObjectValueByPath
} from '~/util';

export default {
  name: 'vt@data-table',

  components: {
    // ProgressLinear,
    // Importing does not work properly
    // 'v-table-overflow': createSimpleFunctional('table__overflow')
  },

  data () {
    return {
      actionsClasses: 'vc@datatable__actions',
      actionsRangeControlsClasses: 'vc@datatable__actions__range-controls',
      actionsSelectClasses: 'vc@datatable__actions__select',
      actionsPaginationClasses: 'vc@datatable__actions__pagination',
    }
  },

  mixins: [DataIterable, Head, Body, Foot, Progress],

  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    headerText: {
      type: String,
      default: 'text',
    },
    hideHeaders: Boolean,
    rowsPerPageText: {
      type: String,
      default: 'Rows per page:'
    },
    customFilter: {
      type: Function,
      default: (items, search, filter, headers) => {
        search = search.toString().toLowerCase();
        if (search.trim() === '') return items;

        const props = headers.map(h => h.value);

        return items.filter(item => props.some(prop => filter(getObjectValueByPath(item, prop), search)));
      }
    }
  },

  computed: {
    classes() {
      return {
        'vc@datatable': true,
        'vc@datatable--select-all': this.selectAll !== false,
        // 'vc@theme--dark': this.dark,
        // 'vc@theme--light': this.light,
      }
    },
    filteredItems() {
      return this.filteredItemsImpl(this.headers);
    }
  },

  methods: {
    needsTR(row) {
      return row.length && row.find(c => c.tag === 'td' || c.tag === 'th');
    },
    genTR(children, data = {}) {
      return this.$createElement('tr', data, children);
    },
  },

  created() {
    const firstSortable = this.headers.find(h => (
      !('sortable' in h) || h.sortable)
    )

    this.defaultPagination.sortBy = !this.disableInitialSort && firstSortable
      ? firstSortable.value
      : null

    this.initPagination();
  },

  render(h) {
    const tableOverflow = h('vt@table-overflow', {}, [
      h('table', {
        'class': this.classes,
      }, [
        this.genTHead(),
        this.genTBody(),
        this.genTFoot(),
      ])
    ])

    return h('div', [
      tableOverflow,
      this.genActionsFooter(),
    ])
  }
}