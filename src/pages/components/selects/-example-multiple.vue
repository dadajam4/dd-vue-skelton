<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@select
      v-model="select"
      :items="items"
      multiple
    >
      <template slot="label">
        複数選択
        <span class="vc@text-color--info">{{select || '未選択'}}</span>
      </template>
    </vt@select>
  </docs-example>
</template>

<script>
export default {

  data() {
    return {
      select: [],
      items: [
        {content: '選択肢1', value: 1},
        {content: '選択肢2', value: 2},
        {content: '選択肢3', value: 3},
        {content: 'これは長い項目です', value: 4},
        {content: '選択肢5', value: 5},
      ],
    }
  },
}
</script>