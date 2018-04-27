<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      <code>vt@tile</code> は多くのサイズ設定のためのインターフェースを（僕が思う限りのデザイニング的観点から）あえて持っていませんが、 <code>dense</code> 属性を利用する事で「狭め」なレイアウトに設定可能です。
    </template>

    <vt@tile divider dense>
      <vt@tile-avatar src="~assets/img/avatar/nigaoe_murou_saisei.png" />
      <vt@tile-content>
        <vt@tile-title>2018/3時点における日本の経済事情から推察する水漏れ事情</vt@tile-title>
        <vt@tile-sub-title>野村うんちゃん先生の観察日記</vt@tile-sub-title>
        <vt@tile-text>みなさんこんにちわ。野村うんちゃん先生です。しばらく暑い日が続いていますがみなさんいかがお過ごしですか？</vt@tile-text>
      </vt@tile-content>
      <vt@tile-action>
        <vt@tooltip-fragment>
          <vt@btn flat icon="search" />
          <vt@tooltip>検索</vt@tooltip>
        </vt@tooltip-fragment>
      </vt@tile-action>
    </vt@tile>

    <vt@tile divider="pull" dense>
      <vt@tile-avatar />
      <vt@tile-content>
        <vt@tile-title>divider=pull な時</vt@tile-title>
        <vt@tile-sub-title>野村うんちゃん先生の観察日記</vt@tile-sub-title>
        <vt@tile-text>みなさんこんにちわ。野村うんちゃん先生です。しばらく暑い日が続いていますがみなさんいかがお過ごしですか？</vt@tile-text>
      </vt@tile-content>
      <vt@tile-action>
        <vt@tooltip-fragment>
          <vt@btn flat icon="search" />
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
