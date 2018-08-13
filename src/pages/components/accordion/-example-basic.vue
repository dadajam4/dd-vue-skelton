<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      <code>vt@accordion-title</code> を設置する事で、アコーディオンを開閉できます。<br>
      <code>vt@accordion-title</code> にはデフォルトで左側に開閉状態を示すアイコンが設置されます。<br>
      <code>icon</code> 属性を指定する事で、任意のアイコンを挿入でき、その場合デフォルトのアイコンは右側に移動します。<br>
      アイコンのスペースのみを設けるためには <code>icon</code> に空の情報を設定してください。
    </template>

    <vt@accordion>
      <vt@accordion-title>Click here!!!</vt@accordion-title>
      <p>これはアコーディオンです。</p>
      <p>これはアコーディオンです。</p>
      <p>これはアコーディオンです。</p>
      <p>これはアコーディオンです。</p>
      <p>これはアコーディオンです。</p>
    </vt@accordion>

    <vt@accordion>
      <vt@accordion-title icon="$ui.icons.warning">Click here!!!</vt@accordion-title>
      <p>これはアコーディオンです。</p>
      <p>これはアコーディオンです。</p>
      <p>これはアコーディオンです。</p>
      <p>これはアコーディオンです。</p>
      <p>これはアコーディオンです。</p>
    </vt@accordion>

    <vt@accordion>
      <vt@accordion-title icon>Click here!!!</vt@accordion-title>
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
