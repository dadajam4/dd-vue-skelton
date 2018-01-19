<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@text-field
      label="氏名"
      name="input_1"
      placeholder="田中　太郎"
      hint="3文字以上、5文字以内で入力してください"
      counter="10"
      :rules="[
        {rule: 'min:3', message: '3文字以上にしてね'},
        {rule: 'max:5', message: '5文字以内にしてね'},
      ]"
    ></vt@text-field>

    <vt@text-field
      label="文章"
      type="textarea"
      name="input_2"
      placeholder="プレースホルダ"
      hint="100文字以内で入力してください"
      counter="10"
      :rules="[
        {rule: 'max:100', message: '100文字以内にしてね'},
      ]"
    ></vt@text-field>

    <vt@text-field
      label="Ammount"
      prefix="$"
    ></vt@text-field>

    <vt@text-field
      label="Email address"
      suffix="@gmail.com"
    ></vt@text-field>

    <vt@text-field
      label="Phone number"
      left-icon="phone"
    ></vt@text-field>

    <vt@text-field
      label="Phone number"
      right-icon="phone"
    ></vt@text-field>

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
      label="Search"
      type="search"
      left-icon="search"
    >
      <vt@btn slot="leftBtn" primary outline>左ボタン</vt@btn>
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