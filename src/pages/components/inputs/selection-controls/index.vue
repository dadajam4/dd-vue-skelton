<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Selection controls</vt@page-header>
    <vt@page-intro>
      <code>vt@checkbox</code> 、 <code>vt@radio</code> 、 <code>vt@switch</code> コンポーネントを利用する事で、ユーザーはオプションを選択できます。<br>
      <code>v-model</code> と同時に利用する場合において、 <code>vt@checkbox</code> のみ、複数選択型である事から配列になります。これを他と同様単一選択とさせるには <code>multiple</code> 属性にfalseを指定してください。<br>
      これらのコンポーネントにvalueを指定しなかった場合、デフォルト値としてvmの_uidプロパティが設定されます。<br>
      またこれらのコンポーネントにおいてはデフォルトではインラインレイアウトで表示されます。ブロックレイアウトで表示させるためには、 <code>inline</code> 属性に <samp>false</samp> を指定します。
    </vt@page-intro>

    <dd-example is="basic" />
    <dd-example is="checkbox-single" />
    <dd-example is="checkbox-indeterminate" />
    <dd-example is="colors" />
    <dd-example is="block-layout" />
    <dd-example is="grouping" />

  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Selection controls',
    }
  },
}
</script>
