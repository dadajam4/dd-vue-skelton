import factory from './mixins/selection-group-factory';

const mixin = factory('switch');

export default {
  name: 'vt@switch-group',

  mixins: [mixin],
}
