<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      いくつかの色を以下の属性で指定可能です。 thumb-color、thumb-label-color、track-fill-colorは multiple属性と併用する際、配列で値を注入する事で個別に色指定が可能です。
      <dl>
        <dt><code>thumb-color</code></dt>
        <dd>サムネイル</dd>
        <dt><code>thumb-label-color</code></dt>
        <dd>サムネイルラベル</dd>
        <dt><code>track-fill-color</code></dt>
        <dd>トラックを埋める色</dd>
        <dt><code>tick-color</code></dt>
        <dd>目盛り</dd>
        <dt><code>icon-active-color</code></dt>
        <dd>アクティブ時のアイコン色</dd>
      </dl>
    </template>

    <vt@range
      value="50"
      thumb-color="info"
      track-fill-color="error"
      tick-color="primary"
      ticks
      persistent-ticks
      thumb-label
      thumb-label-color="secondary"
      persistent-thumb-label
      icon-active-color="secondary"
      step="10"
    >
      <vt@icon>$ui.icons.user</vt@icon>
    </vt@range>
  </docs-example>
</template>

<script>
export default {
}
</script>
