<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      サイズを(sm, md, lg)設定する事が可能です。挿入されたアイコンやボタン等はこのサイズに応じて自動で変化します。デフォルトはmdです。
    </template>

    <vt@input
      label="sm(small)"
      sm
      placeholder="山田　太郎"
      counter="20"
      hint="20文字以内で入力してください"
      rules="max:20|入力文字数が多すぎます"
      prefix="私は、、、"
      v-model="input1"
    >
      <vt@icon right>$ui.icons.user</vt@icon>
      <vt@btn color="info" icon="$ui.icons.search" />
    </vt@input>

    <vt@input
      label="md(medium)"
      md
      placeholder="山田　太郎"
      counter="20"
      hint="20文字以内で入力してください"
      rules="max:20|入力文字数が多すぎます"
      prefix="私は、、、"
      v-model="input1"
    >
      <vt@icon right>$ui.icons.user</vt@icon>
      <vt@btn color="info" icon="$ui.icons.search" />
    </vt@input>

    <vt@input
      label="lg(large)"
      lg
      placeholder="山田　太郎"
      counter="20"
      hint="20文字以内で入力してください"
      rules="max:20|入力文字数が多すぎます"
      prefix="私は、、、"
      v-model="input1"
    >
      <vt@icon right>$ui.icons.user</vt@icon>
      <vt@btn color="info" icon="$ui.icons.search" />
    </vt@input>

    <vt@textarea
      label="sm(small)"
      sm
      placeholder="コメントを入力"
      counter="20"
      hint="20文字以内で入力してください"
      rules="max:20|入力文字数が多すぎます"
      v-model="input2"
    >
      <vt@btn color="info" icon="$ui.icons.search" />
    </vt@textarea>

    <vt@textarea
      label="md(medium)"
      md
      placeholder="コメントを入力"
      counter="20"
      hint="20文字以内で入力してください"
      rules="max:20|入力文字数が多すぎます"
      v-model="input2"
    >
      <vt@btn color="info" icon="$ui.icons.search" />
    </vt@textarea>

    <vt@textarea
      label="lg(large)"
      lg
      placeholder="コメントを入力"
      counter="20"
      hint="20文字以内で入力してください"
      rules="max:20|入力文字数が多すぎます"
      v-model="input2"
    >
      <vt@btn color="info" icon="$ui.icons.search" />
    </vt@textarea>
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      input1: null,
      input2: null,
    }
  },
}
</script>
