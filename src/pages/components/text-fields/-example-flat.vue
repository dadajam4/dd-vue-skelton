<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@text-field
      flat
      label="サイズ小"
      name="input"
      placeholder="サイズ小"
      sm
      prefix="【sm】"
      right-icon="phone"
      :suggest="[
        'サジェスト1',
        '長ーいサジェスト2です。長ーいサジェスト2です。長ーいサジェスト2です。長ーいサジェスト2です。長ーいサジェスト2です。長ーいサジェスト2です。',
        'サジェスト3',
      ]"
    />

    <vt@text-field
      flat
      label="サイズ大"
      name="input"
      placeholder="サイズ大"
      lg
      suffix="【lg】"
      :suggest="[
        'サジェスト1',
        '長ーいサジェスト2です。長ーいサジェスト2です。長ーいサジェスト2です。長ーいサジェスト2です。長ーいサジェスト2です。長ーいサジェスト2です。',
        'サジェスト3',
      ]"
    >
      <vt@btn slot="leftBtn" secondary><vt@icon>search</vt@icon></vt@btn>
    </vt@text-field>

    <vt@text-field
      flat
      type="textarea"
      label="サイズ小"
      name="input"
      placeholder="サイズ小"
      hint="サイズ小のヒントです"
      sm
      counter="50"
    >
      <vt@btn slot="leftBtn" secondary><vt@icon>upload</vt@icon></vt@btn>
    </vt@text-field>

    <vt@text-field
      flat
      type="textarea"
      label="サイズ大"
      name="input"
      placeholder="サイズ大"
      lg
      counter="50"
      hint="サイズ大のヒントです"
    >
      <vt@btn slot="rightBtn" secondary><vt@icon>upload</vt@icon></vt@btn>
    </vt@text-field>

  </docs-example>
</template>

<script>
export default {
}
</script>