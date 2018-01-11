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
  const props = {[propKey]: String};



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
        let color = this[propKey];
        if (!color && hasExpansionProps) {
          for (let name of expansionProps) {
            if (this[name]) {
              color = name;
              break;
            }
          }
        }
        return color || this[defaultKey];
      },

      [classesKey]() {
        return this[computedKey] ? {[`vc@${name}-color--${this[computedKey]}`]: true} : {};
      },
    },

    methods: {
      [methodKey](classes = {}) {
        return Object.assign({}, classes, this[classesKey]);
      },
    },
  }
}
