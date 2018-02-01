import { mapGetters, mapState } from 'vuex';


export default {
  name: 'vt@app-scroll-detect',

  props: {
  },

  data() {
    return {
    }
  },

  computed: {
    // ...mapState({
    //   scrollTop(state) { return state.scroll.top },
    //   lastVerticalIsBottom(state) { return state.scroll.lastVerticalIsBottom },
    //   // scrollLeft(state) { return state.scroll.left },
    //   // scrollContainerWidth(state) { return state.scroll.width },
    //   // scrollContainerHeight(state) { return state.scroll.height },
    // })
    ...mapState({
      appScrollTop(state) { return state.scroll.top },
      appScrollLastAmmountTop(state) { return state.scroll.lastAmmountTop },
    }),
    ...mapGetters('scroll', [
      'lastVerticalIsBottom',
    ]),
  },

  watch: {
  },

  methods: {
  },

  created() {
    if (typeof window !== 'undefined') {
      this.$store.dispatch('scroll/update');
    }
  },

  // mounted() {
  //   console.warn(this.lastVerticalScroll);
  // },
}
