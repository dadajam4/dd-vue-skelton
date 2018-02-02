<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@text-field
      label="氏名"
      name="input"
      placeholder="田中　太郎"
      hint="ここで入力した名前がアカウント登録に利用されます"
    ></vt@text-field>

    <vt@text-field
      label="コメント"
      type="textarea"
      name="input"
      placeholder="プレースホルダ"
      hint="&#60;a&#62;、&#60;s&#62;タグが利用可能です"
    ></vt@text-field>

    <vt@text-field
      label="氏名"
      name="input"
      placeholder="田中　太郎"
      hint="このヒントは常に表示されます"
      persistent-hint
    ></vt@text-field>

    <vt@text-field
      label="氏名"
      name="input"
      placeholder="田中　太郎"
      :hint="htmlHint"
      persistent-hint
    />
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      htmlHint: '<a href="javascript:void(0);">HTML</a>を利用可能です。<b>※コンポーネントは利用できません。</b>',
    }
  },
}
</script>