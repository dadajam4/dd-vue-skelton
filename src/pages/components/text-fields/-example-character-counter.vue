<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@text-field
      type="password"
      label="パスワード"
      name="input"
      hint="アカウントで使用するパスワードを入力してください"
      counter="15"
      :rules="[
        {rule: 'min:8', message: '8文字以上で入力してください'},
        {rule: 'max:15', message: '15文字以内で入力してください'},
      ]"
    ></vt@text-field>

    <vt@text-field
      label="文章"
      type="textarea"
      name="input"
      placeholder="プレースホルダ"
      hint="50文字以内で入力してください"
      counter="50"
      :rules="[
        {rule: 'max:50', message: '50文字以内で入力してください'},
      ]"
    ></vt@text-field>
  </docs-example>
</template>

<script>
export default {
}
</script>