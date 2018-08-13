<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <div class="vc@text-center">
      <vt@pagination :length="6" v-model="page" :before-change="guard"></vt@pagination>
    </div>
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
    }
  },

  methods: {
    guard(page) {
      if (page === 2) {
        return this.$ui.confirm('2ページに移動していいですか？');
      } else if (page === 3) {
        return new Promise(resolve => setTimeout(resolve, 2000))
          .then(() => {
            return this.$ui.confirm('※ちょっとウェイトしました。3ページに移動していいですか？');
          });
      }
    },
  },
}
</script>
