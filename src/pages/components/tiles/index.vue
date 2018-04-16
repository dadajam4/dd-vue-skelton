<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Tiles</vt@page-header>
    <vt@page-intro>
      <code>vt@tile</code> コンポーネントを利用する事で、データレコード等の情報に関連付けられた一連の項目をまとまりのあるレイアウトで表示できます。<br>
      このコンポーンントは単一のアバター要素、見出しを含むテキスト要素、及びいくつかのアクション要素で構成され、必要に応じて <code>vt@tile-group</code> でグルーピングする事が可能です。
    </vt@page-intro>

    <dd-example is="basic" />
    <dd-example is="avatar" />
    <dd-example is="action" />
    <dd-example is="content" />
    <dd-example is="clickable" />
    <dd-example is="divider" />
    <dd-example is="sizing" />
    <dd-example is="grouping" />

  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Tiles',
    }
  },
}
</script>
