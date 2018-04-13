<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      グループ、オプションをpropsで注入する基本的な例です。
    </template>

    <vt@select
      label="遠足の予算"
      prefix="約"
      v-model="select1"
      :options="options"
    />

    <pre>
      <code>{{select1}}</code>
    </pre>

    <vt@select
      label="遠足に持っていきたい物"
      v-model="select2"
      :groups="groups"
      rules="required|選択されていません"
    />

    <pre>
      <code>{{select2}}</code>
    </pre>
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      select1: null,
      select2: null,
    }
  },

  computed: {
    options: () => [
      {value: 1000, label: '1000円'},
      {value: 2000, label: '2000円'},
      {value: 3000, label: '3000円'},
    ],
    groups: () => [
      {
        label: '食べ物',
        options: [
          {value: 'f-1', label: 'りんご'},
          {value: 'f-2', label: 'みかん'},
          {value: 'f-3', label: 'ハンバーグ'},
        ],
      },
      {
        label: '飲み物',
        options: [
          {value: 'd-1', label: 'コーラ'},
          {value: 'd-2', label: 'アクエリアス'},
          {value: 'd-3', label: 'コーヒー（品切れです）', disabled: true},
        ],
      },
      {
        label: 'おもちゃ（現在おもちゃは持っていけません）',
        disabled: true,
        options: [
          {value: 't-1', label: 'スーパーおじさん'},
          {value: 't-2', label: 'ヨーヨー'},
        ],
      },
    ],
  },
}
</script>