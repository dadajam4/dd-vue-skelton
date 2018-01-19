<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <h3>モデルなし。option直書き</h3>
    <vt@select name="dummy-select-name">

      <vt@option v-for="item in selectItems" :key="item.value" :value="item.value">{{item.content}}</vt@option>
    </vt@select>

    <h3>モデルあり。props渡し</h3>
    <p>&gt;&gt;&gt; {{selectItems.filter(item => item.value === select1)[0] || '未選択'}}</p>
    <vt@select v-model="select1" :items="selectItems"></vt@select>

    <h3>複数選択</h3>
    <p>&gt;&gt;&gt; {{select2}}</p>
    <vt@select v-model="select2" :items="selectItems" multiple></vt@select>
  </docs-example>
</template>

<script>
export default {

  data() {
    return {
      select1: null,
      select2: [],
      selectItems: [
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