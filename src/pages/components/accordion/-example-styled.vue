<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      <code>styled</code> 属性を設定する事で、いくつかの装飾が行われた状態で表示できます。<br>
      これは基本的に <code>vt@accordion-title</code> への任意の色設定と併用します。<br>
      この状態の時は、タイトル部分に配色が行われている事が前提である理由から、デフォルトのアイコンは常に右側に設置されます。<br>
      またボディ部分には余白が設けられます。
    </template>

    <vt@accordion styled>
      <vt@accordion-title info>Click here!!!</vt@accordion-title>
      <p>これはアコーディオンです。</p>
      <p>これはアコーディオンです。</p>
      <p>これはアコーディオンです。</p>
      <p>これはアコーディオンです。</p>
      <p>これはアコーディオンです。</p>
    </vt@accordion>

    <vt@accordion styled>
      <vt@accordion-title error icon="menu">Click here!!!</vt@accordion-title>
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
