<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      <code>vt@tile</code> を単一の情報を表示するために利用する事はきっとめずらしいケースで、リストのようなn個のデータを表示する時に利用する事が殆どでしょう。<br>
      本コンポーネントに区切り線を表示させるためには <code>divider</code> 属性を指定してください。<br>
      この区切り線は時に、アバター要素の左スペースを覗いて表示させたいケースがあります。そのような場合には <code>divider</code> 属性に <code>pull</code> を指定してください。
    </template>

    <vt@tile divider>
      <vt@tile-avatar src="~assets/img/avatar/nigaoe_murou_saisei.png" />
      <vt@tile-content>
        <vt@tile-title>2018/3時点における日本の経済事情から推察する水漏れ事情</vt@tile-title>
        <vt@tile-sub-title>野村うんちゃん先生の観察日記</vt@tile-sub-title>
        <vt@tile-text>みなさんこんにちわ。野村うんちゃん先生です。しばらく暑い日が続いていますがみなさんいかがお過ごしですか？</vt@tile-text>
      </vt@tile-content>
      <vt@tile-action>
        <vt@tooltip-fragment>
          <vt@btn icon="search" />
          <vt@tooltip>検索</vt@tooltip>
        </vt@tooltip-fragment>
      </vt@tile-action>
    </vt@tile>

    <vt@tile divider="pull">
      <vt@tile-avatar />
      <vt@tile-content>
        <vt@tile-title>divider=pull な時</vt@tile-title>
        <vt@tile-sub-title>野村うんちゃん先生の観察日記</vt@tile-sub-title>
        <vt@tile-text>みなさんこんにちわ。野村うんちゃん先生です。しばらく暑い日が続いていますがみなさんいかがお過ごしですか？</vt@tile-text>
      </vt@tile-content>
      <vt@tile-action>
        <vt@tooltip-fragment>
          <vt@btn icon="search" />
          <vt@tooltip>検索</vt@tooltip>
        </vt@tooltip-fragment>
      </vt@tile-action>
    </vt@tile>
  </docs-example>
</template>

<script>
export default {
}
</script>