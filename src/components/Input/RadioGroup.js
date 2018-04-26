import factory from './mixins/selection-group-factory';

const mixin = factory('radio');

export default {
  name: 'vt@radio-group',

  mixins: [mixin],
}
