import SelectionItem from '~/mixins/selection/item';



export default {
  name: 'vt@radio',
  mixins: [SelectionItem],

  props: {
    type: {
      type: String,
      default: 'radio',
    },
  },
}