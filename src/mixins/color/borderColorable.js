import createDirectionsProps from '~/util/createDirectionsProps';



const props = createDirectionsProps('border', 'color');



export default {
  props: props.props,

  computed: {
    borderColorClasses() {
      const classes = {};
      for (let direction of props.directions) {
        if (this[direction.key]) {
          classes[`vc@${props.keyChain}--${this[direction.key]}`] = true;
        }
      }
      return classes;
    },
  },

  methods: {
    addBorderColorClasses(classes = {}) {
      return Object.assign({}, classes, this.borderColorClasses);
    },
  },
}
