<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Inputs</vt@page-header>
    <vt@page-intro>
      DVSではユーザーの入力を受け取るための便利なコンポーネントが多数用意されています。<br>
      これらは主にhtmlのフォーム部品で構成されていますが、中には通常のhtml要素には定義されていない便利なコンポーネントも含まれています。<br>
      Vueでアプリケーションを構築する際は、 <code>v-model</code> を利用してユーザー入力をハンドリングするのがベストプラクティスですが、
      DVSではこれを強制しません。つまりv-modelを設定しない状態でもDOMツリー上には <code>form</code> タグで送信するための <code>input</code> 要素が常に存在し、
      ユーザーの入力に応じてvalueがリアクティブに更新されています。
    </vt@page-intro>
  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Inputs',
    }
  },
}
</script>
