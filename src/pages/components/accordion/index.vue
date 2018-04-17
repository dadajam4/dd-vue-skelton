<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Accordion</vt@page-header>
    <vt@page-intro>
      <code>vt@accordion</code> コンポーネントを利用する事で、いわゆる縦にぐにょーんと開閉するあの場所を設置可能です。<br>
      本要素は <code>vt@accordion-title</code> と、内包する$slots.default の2ブロックで構成されます。<br>
      複数のアコーディオンをグルーピングする際は <code>vt@accordion-group</code> を利用してください。
    </vt@page-intro>

    <dd-example is="basic" />
    <dd-example is="styled" />
    <dd-example is="text-wrap" />
    <dd-example is="grouping" />

  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Accordion',
    }
  },
}
</script>
