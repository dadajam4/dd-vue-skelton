<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      <code>multiple</code> 属性を利用する事で複数選択が可能です。<br>
      区切り文字列は<code>divider</code> 属性でカスタマイズが可能です。
    </template>

    <vt@select
      label="遠足の予算"
      prefix="約"
      v-model="selects"
      :groups="groups"
      multiple
    />

    <vt@select
      label="遠足の予算"
      prefix="約"
      v-model="selects"
      :groups="groups"
      multiple
      divider=" - "
    />

    <pre>
      <code>{{selects}}</code>
    </pre>
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      selects: null,
    }
  },

  computed: {
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