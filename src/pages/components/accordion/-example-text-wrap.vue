<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      <code>vt@accordion-title</code> はデフォルトでは改行を許可しますが、 <code>wrap</code> 属性に <var>false</var> を設定するか、親の <code>vt@accordion-group</code> <code>vt@accordion</code> のどちらかに、 <code>title-nowrap</code> 属性を指定する事で折り返しを禁止しはみ出したテキストを省略表示します。
    </template>

    <vt@accordion styled>
      <vt@accordion-title :wrap="false" info>長いテキストが入ります。長いテキストが入ります。長いテキストが入ります。長いテキストが入ります。長いテキストが入ります。長いテキストが入ります。</vt@accordion-title>
      <p>これはアコーディオンです。</p>
      <p>これはアコーディオンです。</p>
      <p>これはアコーディオンです。</p>
      <p>これはアコーディオンです。</p>
      <p>これはアコーディオンです。</p>
    </vt@accordion>

  </docs-example>
</template>

<script>
export default {
}
</script>