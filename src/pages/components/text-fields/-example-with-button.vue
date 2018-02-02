<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@text-field
      label="Search"
      type="search"
      left-icon="search"
    >
      <vt@btn slot="leftBtn" info outline>左ボタン</vt@btn>
    </vt@text-field>

    <vt@text-field
      label="Search"
      type="search"
      left-icon="search"
      :suggest="[
        'サジェスト1',
        '長ーいサジェスト2です。長ーいサジェスト2です。長ーいサジェスト2です。長ーいサジェスト2です。長ーいサジェスト2です。長ーいサジェスト2です。',
        'サジェスト3',
      ]"
    >
      <vt@btn slot="rightBtn" primary icon><vt@icon>search</vt@icon></vt@btn>
    </vt@text-field>

    <vt@text-field
      label="Comment"
      type="textarea"
    >
      <vt@btn slot="leftBtn" secondary><vt@icon>upload</vt@icon></vt@btn>
    </vt@text-field>
  </docs-example>
</template>

<script>
export default {
}
</script>