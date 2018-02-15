import SelectionGroup from '~/mixins/selection/group';



export default {
  name: 'vt@radio-group',
  mixins: [SelectionGroup],

  props: {
    type: {
      type: String,
      default: 'radio',
    },
  },
}