<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      <code>vt@tile-avatar</code> コンポーネントは、 <code>vt@tile</code> コンポーネント直下の先頭、もしくは末尾に設置してください。<br>
      本コンポーネントは <code>vt@avatar</code> のエイリアスとして動作します。従ってインターフェースの詳細はvt@avatarを参照してください。<br>
      複数のタイルをグルーピングする際、アバター表示の有無によらずレイアウトを統一するためには、空のアバター要素を利用します。
    </template>

    <vt@tile-group>
      <vt@tile>
        <vt@tile-avatar src="~assets/img/avatar/boy_1.png" />
        <vt@tile-content>
          <vt@tile-title>夏休みに行った市民プールの思い出日記</vt@tile-title>
          <vt@tile-sub-title>山田　太郎</vt@tile-sub-title>
          <vt@tile-text>今日僕は仲の良い友達たちと市民プールに行きました。 僕は泳ぐのは得意だったはずなのですが、友達たちがなんでか僕より泳ぐのが上手でとても悔しかったです。</vt@tile-text>
        </vt@tile-content>
        <vt@tile-action>
          <vt@tooltip-fragment>
            <vt@btn flat icon="edit" />
            <vt@tooltip>編集</vt@tooltip>
          </vt@tooltip-fragment>
        </vt@tile-action>
      </vt@tile>
      <vt@tile>
        <vt@tile-avatar />
        <vt@tile-content>
          <vt@tile-title>その次の夏休みに行った市民プールの思い出日記</vt@tile-title>
          <vt@tile-text>今日僕は仲の良い友達たちと市民プールに行きました。 僕は泳ぐのは得意だったはずなのですが、友達たちがなんでか僕より泳ぐのが上手でとても悔しかったです。</vt@tile-text>
        </vt@tile-content>
        <vt@tile-action>
          <vt@tooltip-fragment>
            <vt@btn flat icon="edit" />
            <vt@tooltip>編集</vt@tooltip>
          </vt@tooltip-fragment>
        </vt@tile-action>
      </vt@tile>
    </vt@tile-group>
  </docs-example>
</template>

<script>
export default {
}
</script>
