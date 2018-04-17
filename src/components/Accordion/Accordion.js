export default {
  name: 'vt@accordion',

  props: {
    value: Boolean,
    tag: {
      type: String,
      default: 'div',
    },
    styled: Boolean,
    titleNowrap: Boolean,
    group: Object,
    matchRoute: String,
  },

  data() {
    return {
      innerValue: this.value,
    }
  },

  computed: {
    classes() {
      return {
        'vc@accordion--active': this.isActive,
        'vc@accordion--styled': this.isStyled,
        'vc@accordion--flat': this.isFlat,
      }
    },

    hasGroup() { return !!this.group },

    isStyled() { return this.hasGroup && this.group.styled || this.styled },
    isTitleNowrap() { return this.hasGroup && this.group.titleNowrap || this.titleNowrap },

    isActive: {
      get() { return this.innerValue },
      set(val) {
        this.innerValue = val;
        this.$emit('input', val);
      },
    },

    isFlat() { return !this.isStyled },
    tagName() { return this.hasGroup && this.group.isList ? 'li' : this.tag },
  },

  watch: {
    value(val) {
      this.innerValue = val;
    },
    innerValue(val) {
      if (val) {
        this.emitActiveForParentGroup();
      }
    },

    $route(to) {
      this.checkMatchRoute(to.path);
      // const isActive = this.matchRoute(to.path);

      // if (this.group) {
      //   if (isActive && this.isActive !== isActive) {
      //     this.listClick(this._uid);
      //   }
      //   this.isActive = isActive;
      // }
    },
  },

  methods: {
    open() {
      this.isActive = true;
    },

    close() {
      this.isActive = false;
    },

    toggle() {
      return this.isActive ? this.close() : this.open();
    },
    emitActiveForParentGroup() {
      if (this.hasGroup) {
        this.group.onChildActive(this);
      }
    },
    checkMatchRoute(route = this.$route.path) {
      if (this.matchRoute) {
        this.isActive = route.match(this.matchRoute) !== null;
      }
    },
  },

  created() {
    if (this.isActive) {
      this.emitActiveForParentGroup();
    }
  },

  mounted() {
    this.checkMatchRoute();
  },

  render(h) {
    let $title;
    const bodyChildren = [];
    const $defaultSlots = this.$slots.default || [];

    for (let c of $defaultSlots) {
      if (c.componentOptions && c.componentOptions.tag === 'vt@accordion-title') {
        $title = c;
      } else {
        bodyChildren.push(c);
      }
    }

    const $body = h('div', {
      staticClass: 'vc@accordion__body',
      directives: [{
        name: 'show',
        value: this.isActive,
      }],
    }, [h('div', {
      staticClass: 'vc@accordion__body__inner',
    }, bodyChildren)]);

    const transition = h('vt@expand-transition', [$body]);

    const children = [transition];
    if ($title) {
      $title.componentOptions.propsData = $title.componentOptions.propsData || {};
      $title.componentOptions.propsData.accordion = this;
      children.unshift($title);
    }

    return h(this.tagName, {
      staticClass: 'vc@accordion',
      class: this.classes,
    }, children);
  }
}