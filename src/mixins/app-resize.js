import { mapGetters, mapState } from 'vuex';


export default {
  name: 'vt@app-resize',

  inject: ['appDimentions'],

  data() {
    return {
    }
  },

  computed: {
  },

  // watch: {
  //   appDimentions: {
  //     deep: true,
  //     handler(e) {
  //       console.log(e);
  //     },
  //   },

  //   // appDimentions(val) {
  //   //   console.log(val);
  //   // },
  // },

  // created() {
  //   console.log(this.appDimentions);
  // },
}
