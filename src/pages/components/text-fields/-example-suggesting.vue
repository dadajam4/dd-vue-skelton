<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@text-field
      label="Search"
      type="search"
      left-icon="search"
      :suggest="[
        'サジェスト1',
        '長ーいサジェスト2です。長ーいサジェスト2です。長ーいサジェスト2です。長ーいサジェスト2です。長ーいサジェスト2です。長ーいサジェスト2です。',
        'サジェスト3',
      ]"
    ></vt@text-field>

    <vt@text-field
      label="項目が多い時は画面高の50%以上はスクロールします"
      type="search"
      left-icon="search"
      :suggest="[
        'item1',
        'item2',
        'item3',
        'item4',
        'item5',
        'item6',
        'item7',
        'item8',
        'item9',
        'item10',
        'item11',
        'item12',
        'item13',
        'item14',
        'item15',
        'item16',
        'item17',
        'item18',
        'item19',
        'item20',
      ]"
    ></vt@text-field>
  </docs-example>
</template>

<script>
export default {
}
</script>