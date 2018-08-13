<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      <code>vt@tile</code> は、以下の条件を満たす時にクリッカブルな要素となります。

      <ol>
        <li>click リスナが設定されている時</li>
        <li>href 属性が設定されている時</li>
        <li>to 属性が設定されている時</li>
      </ol>

      つまり本要素は、メニュー要素やリンク要素にも利用可能です。<br>
      また従って、本要素は <vt@chip info sm>routable</vt@chip> な要素です。
    </template>

    <vt@tile href="https://www.google.co.jp/" target="_blank">
      <vt@tile-avatar src="~assets/img/avatar/nigaoe_murou_saisei.png" />
      <vt@tile-content>
        <vt@tile-title>これはリンクの例です。</vt@tile-title>
        <vt@tile-sub-title>野村うんちゃん先生の観察日記</vt@tile-sub-title>
        <vt@tile-text>みなさんこんにちわ。野村うんちゃん先生です。しばらく暑い日が続いていますがみなさんいかがお過ごしですか？</vt@tile-text>
      </vt@tile-content>
      <vt@tile-action>
        <vt@tooltip-fragment>
          <vt@btn flat icon="$ui.icons.search" />
          <vt@tooltip>検索</vt@tooltip>
        </vt@tooltip-fragment>
      </vt@tile-action>
    </vt@tile>

    <vt@tile :to="{name: 'index'}">
      <vt@tile-avatar src="~assets/img/avatar/nigaoe_murou_saisei.png" />
      <vt@tile-content>
        <vt@tile-title>このタイルはトップページへSPA遷移します。</vt@tile-title>
        <vt@tile-sub-title>野村うんちゃん先生の観察日記</vt@tile-sub-title>
        <vt@tile-text>みなさんこんにちわ。野村うんちゃん先生です。しばらく暑い日が続いていますがみなさんいかがお過ごしですか？</vt@tile-text>
      </vt@tile-content>
      <vt@tile-action>
        <vt@tooltip-fragment>
          <vt@btn flat icon="$ui.icons.search" />
          <vt@tooltip>検索</vt@tooltip>
        </vt@tooltip-fragment>
      </vt@tile-action>
    </vt@tile>

    <vt@tile @click="onClick">
      <vt@tile-avatar src="~assets/img/avatar/nigaoe_murou_saisei.png" />
      <vt@tile-content>
        <vt@tile-title>このタイルはクリッカブルです。</vt@tile-title>
        <vt@tile-sub-title>野村うんちゃん先生の観察日記</vt@tile-sub-title>
        <vt@tile-text>みなさんこんにちわ。野村うんちゃん先生です。しばらく暑い日が続いていますがみなさんいかがお過ごしですか？</vt@tile-text>
      </vt@tile-content>
      <vt@tile-action>
        <vt@tooltip-fragment>
          <vt@btn flat icon="$ui.icons.search" />
          <vt@tooltip>検索</vt@tooltip>
        </vt@tooltip-fragment>
      </vt@tile-action>
    </vt@tile>
  </docs-example>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$alert('onClick!!!');
    },
  },
}
</script>
