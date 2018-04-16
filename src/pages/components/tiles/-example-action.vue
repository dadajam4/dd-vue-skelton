<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      <code>vt@tile-action</code> コンポーネントもまた、 <code>vt@tile</code> コンポーネント直下の先頭、もしくは末尾に設置してください。<br>
      このコンポーネントは基本的に、1つのタイルに対するアクションを行う要素を挿入するために利用します。<br>
      本コンポーネント直下に要素を複数設置した場合、縦に並ぶレイアウトとなります。<br>
      アクション要素に対する補助的なテキストを表示する場合には、 <code>vt@tile-action-text</code> を使用してください。
    </template>

    <vt@tile>
      <vt@tile-content>
        <vt@tile-title>夏休みに行った市民プールの思い出日記</vt@tile-title>
        <vt@tile-sub-title>山田　太郎</vt@tile-sub-title>
        <vt@tile-text>今日僕は仲の良い友達たちと市民プールに行きました。 僕は泳ぐのは得意だったはずなのですが、友達たちがなんでか僕より泳ぐのが上手でとても悔しかったです。</vt@tile-text>
      </vt@tile-content>
      <vt@tile-action>
        <vt@tooltip-fragment>
          <vt@btn icon="edit" />
          <vt@tooltip>編集</vt@tooltip>
        </vt@tooltip-fragment>
      </vt@tile-action>
    </vt@tile>

    <vt@tile>
      <vt@tile-content>
        <vt@tile-title>その次の夏休みに行った市民プールの思い出日記</vt@tile-title>
        <vt@tile-text>今日僕は仲の良い友達たちと市民プールに行きました。 僕は泳ぐのは得意だったはずなのですが、友達たちがなんでか僕より泳ぐのが上手でとても悔しかったです。</vt@tile-text>
      </vt@tile-content>
      <vt@tile-action>
        <vt@btn info>編集</vt@btn>
      </vt@tile-action>
    </vt@tile>

    <vt@tile>
      <vt@tile-content>
        <vt@tile-title>その次の夏休みに行った市民プールの思い出日記</vt@tile-title>
        <vt@tile-text>今日僕は仲の良い友達たちと市民プールに行きました。 僕は泳ぐのは得意だったはずなのですが、友達たちがなんでか僕より泳ぐのが上手でとても悔しかったです。</vt@tile-text>
      </vt@tile-content>
      <vt@tile-action>
        <vt@tile-action-text>12 hour</vt@tile-action-text>
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