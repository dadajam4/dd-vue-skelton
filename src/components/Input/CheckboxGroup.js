import factory from './mixins/selection-group-factory';

const mixin = factory('checkbox');

export default {
  name: 'vt@checkbox-group',

  mixins: [mixin],

  props: {
    multiple: {
      type: Boolean,
      default: true,
    },
  },
}
