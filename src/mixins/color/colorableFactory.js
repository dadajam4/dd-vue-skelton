import { capitalize } from '~/helpers';



export default function colorableFactory(name, opts = {}) {
  const expansionProps = opts.expansionProps || [];
  const hasExpansionProps = !!expansionProps.length;
  const Name = capitalize(name);
  const propKey = `${name}Color`;
  const defaultKey = `default${Name}Color`;
  const computedKey = `computed${Name}Color`;
  const classesKey = `${name}ColorClasses`;
  const methodKey = `add${Name}ColorClasses`;
  const getMethodKey = `get${Name}ColorClasses`;
  const props = Object.assign({[propKey]: String}, opts.props);



  expansionProps.forEach(name => {
    props[name] = Boolean;
  });

  return {
    props,

    data() {
      return {
        [defaultKey]: null,
      }
    },

    computed: {
      [computedKey]() {
        if (hasExpansionProps) {
          for (let name of expansionProps) {
            if (this[name]) {
              return name;
              break;
            }
          }
        }

        return this[propKey] || this[defaultKey];
      },

      [classesKey]() {
        return this[getMethodKey]();
        // const prefix = opts.addColorPrefix ? opts.addColorPrefix.call(this) : '';
        // let classes = this[computedKey] ? {[`vc@${name}-color-${prefix}-${this[computedKey]}`]: true} : {};
        // if (opts.mergeColorClasses) {
        //   classes = opts.mergeColorClasses.call(this, classes);
        // }
        // return classes;
      },
    },

    methods: {
      [getMethodKey](key = computedKey) {
        const prefix = opts.addColorPrefix ? opts.addColorPrefix.call(this) : '';
        let classes =
          this.disabled ? {[`vc@${name}-color-${prefix}-muted`]: true}
          // : this.error ? {[`vc@${name}-color-${prefix}-error`]: true}
          : this[key] ? {[`vc@${name}-color-${prefix}-${this[key]}`]: true}
          : {};

        if (opts.mergeColorClasses) {
          classes = opts.mergeColorClasses.call(this, classes);
        }
        return classes;
      },

      [methodKey](classes = {}) {
        return Object.assign({}, classes, this[classesKey]);
      },
    },
  }
}
