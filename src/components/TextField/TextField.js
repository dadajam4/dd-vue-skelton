import fieldFactory from '~/mixins/Field';



const Field = fieldFactory('text-field');



export default {
  name: 'vt@text-field',

  mixins: [Field],

  props: {
    rows: {
      default: 5,
    },

    type: {
      type: String,
      default: 'text',
    },

    counter: [Boolean, Number, String],

    suggest: {
      type: Array,
      default: () => [],
    },
  },


  data() {
    return {
      suggestIndex: null,
    }
  },

  computed: {
    classes() {
      return Object.assign({}, this.fieldClasses, {
        'vc@text-field--suggested': this.suggested,
      });
    },

    isMultiLine() { return this.type === 'textarea' },

    isShowSuggest() { return this.isFocused && this.suggests.length },

    count() {
      const inputLength = this.lazyValue ? this.lazyValue.toString().length : 0;
      return `${inputLength} / ${this.counterLength}`;
    },

    counterLength() {
      const parsedLength = parseInt(this.counter, 10)
      return isNaN(parsedLength) ? 25 : parsedLength;
    },

    suggests() {
      let myInput = this.inputValue;
      if (typeof myInput === 'string') {
        myInput = myInput.trim();
      } else {
        myInput = '';
      }

      return this.suggest.filter(suggest => {
        return suggest.includes(myInput);
      });
    },

    suggestSelected() {
      return this.suggests[this.suggestIndex];
    },
  },


  watch: {
    suggests() {
      this.suggestIndex = null;
    },

    isShowSuggest() {
      this.suggestIndex = null;
    },
  },

  methods: {
    shiftSuggest(amount) {
      let newIndex = 0;
      if (this.suggestIndex === null) {
        if (amount === -1) {
          newIndex = this.suggests.length + amount;
        } else {
          newIndex = amount - 1;
        }
      } else {
        newIndex = this.suggestIndex + amount;
        if (newIndex >= this.suggests.length) {
          newIndex = null;
        } else if (newIndex < 0) {
          newIndex = null;
        }
      }
      this.suggestIndex = newIndex;
    },

    settleSuggest(suggest) {
      this.inputValue = suggest || this.inputValue;
      this.suggestIndex = null;
      this.blur();
      this.$emit('suggest', suggest);
    },

    genCounter() {
      return this.$createElement('div', {
        'class': {
          'vc@text-field__counter': true,
          'vc@text-field__counter--error': this.hasError,
          // [`${this.$options.name}__counter`]: true,
          // [`${this.$options.name}__counter--error`]: this.hasError,
        }
      }, this.count)
    },

    genSuggest() {
      const $suggest = this.$createElement('transition', {
        attrs: {
          name: 'vc@transition-slide-y',
        }
      }, [this.isShowSuggest ? this.$createElement('div', {
        class: `vc@text-field__suggest`,
      }, this.suggests.map((suggest, index) => {
        return this.$createElement('button', {
          class: {
            'vc@text-field__suggest-item': true,
            'vc@text-field__suggest-item--focused': index === this.suggestIndex,
          },
          attrs: {
            'data-suggest-index': index,
          },
          key: suggest,
        }, [suggest])
      })) : this._e()]);

      return $suggest;
    },

    genInput() {
      const nodeTag   = this.isMultiLine ? 'textarea' : 'input';
      const listeners = Object.assign({}, this.$listeners);

      delete listeners['change']; // Change should not be bound externally

      const nodeOptions = {
        class: {
          'vc@field__node': true,
        },
        domProps: {
          autofocus: this.autofocus,
          disabled : this.disabled,
          required : this.required,
          value    : this.suggestSelected || this.lazyValue,
        },
        attrs: {
          ...this.$attrs,
          name    : this.name,
          readonly: this.readonly,
          tabindex: this.tabindex,
          'aria-label': (!this.$attrs || !this.$attrs.id) && this.label, // Label `for` will be set if we have an id
        },
        on: Object.assign({}, listeners, {
          blur: this.blur,
          input: this.onInput,
          focus: this.focus,
          keydown: e => {
            if (this.isShowSuggest) {
              if (e.which === 13) {
                this.settleSuggest(this.suggestSelected);
              } else if (e.which === 38) {
                this.shiftSuggest(-1);
                e.preventDefault();
              } else if (e.which === 9 || e.which === 40) {
                this.shiftSuggest(1);
                e.preventDefault();
              }
            }
          },
        }),
        ref: 'input',
      };

      if (this.isMultiLine) {
        nodeOptions.domProps.rows = this.rows;
      } else {
        nodeOptions.domProps.type = this.type;
      }

      if (this.placeholder) {
        nodeOptions.domProps.placeholder = this.placeholder;
      }

      const children = [this.$createElement(nodeTag, nodeOptions)];

      this.prefix && children.unshift(this.genFix('prefix'));
      this.suffix && children.push(this.genFix('suffix'));

      return children;
    },
  },

  render(h) {
    return this.genInputGroup(this.genInput(), {attrs: {tabindex: false}});
  },
}
