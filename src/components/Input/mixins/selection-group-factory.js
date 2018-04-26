import Inputable from './inputable';



const PASS_PROPS = [
  'inputValue',
  'color',
  'readonly',
  'name',
  'multiple',
  'disabled',
  'error',
];



export default function(type) {
  const childTagName = `vt@${type}`;

  return {
    mixins: [Inputable],

    provide() {
      const payload = {
        $selectionGroup: this,
      };
      return payload;
    },

    props: {
      validateProp: {
        default: 'innerValue',
      },
      value: true,
      block: Boolean,
      items: Array,
      color: String,
      multiple: Boolean,
    },

    data() {
      return {
        innerValue: this.value,
        initialValue: this.multiple ? (this.value || []) : this.value,
        children: [],
      }
    },

    computed: {
      inputValue: {
        get() { return this.innerValue },
        set(val) {
          this.innerValue = Array.isArray(val) ? val.slice() : val;
          this.$emit('input', val);
        },
      },
    },

    watch: {
      value(val) {
        this.innerValue = val;
      },
    },

    methods: {
      callChildren(funcName, args = []) {
        const results = [];
        for (const child of this.children) {
          results.push(child[funcName](...args));
        }
        return results;
      },

      reset() {
        this.inputValue = this.initialValue;
        this.onResetAfter();
      },

      clear() {
        this.inputValue = this.multiple ? [] : null;
        this.onClearAfter();
      },

      attachChild($vm) {
        if (this.children.indexOf($vm) !== -1) return;
        this.children.push($vm);
      },

      detachChild($vm) {
        const index = this.children.indexOf($vm);
        if (index === -1) return;
        this.children.splice(index, 1);
      },

      onChildChange(e) {
        this.inputValue = e;
      },

      genItemListeners(origin) {
        return Object.assign({}, origin, {
          change: this.onChildChange,
        });
      },

      genItemProps(origin) {
        const props = Object.assign({silent: true}, origin);
        for (let prop of PASS_PROPS) {
          if (props[prop] === undefined) props[prop] = this[prop];
        }
        if (this.block) props.inline = false;
        if (this.hasError) props.error = true;
        return props;
      },

      genControls() {
        const h = this.$createElement;

        const children = (this.$slots.default || []).map(child => {
          const options = child.componentOptions;
          if (options && options.tag === childTagName) {
            options.listeners = this.genItemListeners(options.listeners);
            options.propsData = this.genItemProps(options.propsData);
          }
          return child;
        });

        if (this.items) {
          for (let item of this.items) {
            const options = {
              props: this.genItemProps(item),
              on: this.genItemListeners(),
            };
            const $item = h(childTagName, options);
            children.push($item);
          }
        }

        return h('div', {
          staticClass: `vc@${type}-group`,
        }, children);
      },
    },
  }
}
