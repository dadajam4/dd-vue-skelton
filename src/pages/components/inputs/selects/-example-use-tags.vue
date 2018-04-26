<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      グループ、オプションを <code>vt@optgroup</code>、<code>vt@option</code> タグで注入する基本的な例です。<br>
      通常のHTMLにおける利用方法と基本的に変わりません。
    </template>

    <vt@select
      label="遠足の予算"
      prefix="約"
      v-model="select1"
    >
      <vt@option :value="1000">1000円</vt@option>
      <vt@option :value="2000">2000円</vt@option>
      <vt@option :value="3000">3000円</vt@option>
    </vt@select>

    <pre>
      <code>{{select1}}</code>
    </pre>

    <vt@select
      label="遠足に持っていきたい物"
      v-model="select2"
      rules="required|選択されていません"
    >
      <vt@optgroup label="食べ物">
        <vt@option value="f-1">りんご</vt@option>
        <vt@option value="f-2">みかん</vt@option>
        <vt@option value="f-3">ハンバーグ</vt@option>
      </vt@optgroup>
      <vt@optgroup label="飲み物">
        <vt@option value="d-1">コーラ</vt@option>
        <vt@option value="d-2">アクエリアス</vt@option>
        <vt@option value="d-3" disabled>コーヒー（品切れです）</vt@option>
      </vt@optgroup>
      <vt@optgroup label="おもちゃ（現在おもちゃは持っていけません）" disabled>
        <vt@option value="t-1">スーパーおじさん</vt@option>
        <vt@option value="t-2">ヨーヨー</vt@option>
      </vt@optgroup>
    </vt@select>

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
}
</script>
