import Colorable from '~/mixins/colorable';



export default {
  name: 'vt@tabs',

  mixins: [Colorable],

  model: {
    prop: 'value',
    event: 'change',
  },

  props: {
    id: {
      type: String,
      default() { return 'vt@tabs-' + this._uid },
    },
    value: {
      type: String,
    },
    activeColor: String,
    center: Boolean,
    wrap: Boolean,
    fixed: Boolean,
  },

  data() {
    return {
      lazyValue: null,
      items: [],
    }
  },

  computed: {
    classes() {
      return {
        'vc@tabs': true,
      }
    },
    currentId: {
      get() { return this.lazyValue },
      set(id) {
        this.lazyValue = id;
        this.$emit('change', id);
      },
    },
    currentIndex: {
      get() {
        const currentId = this.currentId;
        for (let item of this.items) {
          if (item.id === currentId) return item.index;
        }
      },
      set(index) {
        for (let item of this.items) {
          if (item.index === index) {
            this.currentId = item.id;
            return;
          }
        }
      },
    },
    length() { return this.items.length },
  },

  watch: {
    value(val) {
      this.lazyValue = val;
    },
    currentIndex(now, before) {
      const hasBefore = before !== undefined;
      const isReverse = now < before;
      const hasTransition = hasBefore;

      this.$nextTick(() => {
        const $nowContent = this.getContentByIndex(now);
        const $nowTrigger = this.getTriggerByIndex(now);

        $nowContent && $nowContent.toggle(true, hasTransition, isReverse);
        $nowTrigger && $nowTrigger.toggle(true, hasTransition, isReverse);

        if (hasBefore) {
          const $beforeContent = this.getContentByIndex(before);
          const $beforeTrigger = this.getTriggerByIndex(before);
          $beforeContent.toggle(false, hasTransition, isReverse);
          $beforeTrigger.toggle(false, hasTransition, isReverse);
        }
      });
    },
  },

  methods: {
    onClickTrigger(vm) {
      this.$emit('click', vm);
      this.setId(vm.id);
    },
    setId(id) {
      this.currentId = id;
    },
    setIndex(index) {
      this.currentIndex = index;
    },
    getItemByIndex(index) {
      return this.items[index];
    },
    getTriggerByIndex(index) {
      const item = this.getItemByIndex(index);
      if (item) return item.$trigger.componentInstance;
    },
    getContentByIndex(index) {
      const item = this.getItemByIndex(index);
      if (item) return item.$content.componentInstance;
    },
    next() {
      const currentIndex = this.currentIndex;
      this.currentIndex = (currentIndex === this.length - 1) ? 0 : currentIndex + 1;
    },
    prev() {
      const currentIndex = this.currentIndex;
      this.currentIndex = (currentIndex === 0) ? this.length - 1 : currentIndex + 1;
    },
  },

  render(h) {
    const separated = {trigger: [], content: []};
    const items = [];

    this.$slots.default && this.$slots.default.forEach((vnode, index) => {
      if (vnode.tag !== 'vt@tabs-item') return;

      const id = (vnode.data.attrs && vnode.data.attrs.id) || this.id + '-' + index;
      const item = {id, index};

      ['trigger', 'content'].forEach(key => {
        const childNodeMatch = vnode.children.filter(child => child.componentOptions && child.componentOptions.tag === `vt@tabs-${key}`);
        if (!childNodeMatch) return;
        const childNode = childNodeMatch[0];
        childNode.componentOptions.propsData = Object.assign(
          { id, index, ref: key },
          childNode.componentOptions.propsData,
        );
        separated[key].push(childNode);
        item['$' + key] = childNode;
      });

      separated.trigger.forEach(trigger => {
        trigger.componentOptions.propsData = Object.assign(
          {
            activeColor: this.activeColor,
            fixed: this.fixed,
          },
          trigger.componentOptions.propsData,
        );

        trigger.componentOptions.listeners = Object.assign(
          {
            click: vm => {
              this.onClickTrigger(vm);
            },
          },
          trigger.componentOptions.listeners,
        );
      });

      items.push(item);
    });

    this.items = items;
    if (!this.value && !this.currentId) this.currentId = items[0].id;

    const $nav = h('vt@tabs-nav', {
      class: this.addColorClasses(),
      props: {
        center: this.center,
        wrap: this.wrap,
      },
    }, separated.trigger);

    const $contents = h('vt@tabs-contents', {ref: 'contents'}, separated.content);

    return h('div', {
      class: this.classes,
    }, [$nav, $contents]);
  },
}
