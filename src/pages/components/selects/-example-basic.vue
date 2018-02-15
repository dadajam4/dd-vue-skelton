<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@select
      label="モデルなし"
      hint="optionはslot渡しです"
      persistent-hint
      name="select"
    >
      <vt@option v-for="item in items" :key="item.value" :value="item.value">{{item.content}}</vt@option>
    </vt@select>

    <vt@select
      hint="optionはpropsの配列渡しです"
      persistent-hint
      v-model="select"
      :items="items"
    >
      <template slot="label">
        モデルあり
        <span class="vc@text-color--info">{{select ? items.find(item => item.value === select).content : '未選択'}}</span>
      </template>
    </vt@select>
  </docs-example>
</template>

<script>
export default {

  data() {
    return {
      select: null,
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