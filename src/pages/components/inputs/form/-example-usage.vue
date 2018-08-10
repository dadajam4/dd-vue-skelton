<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      基本的な利用例です。
    </template>

    <p>バリデーション{{valid ? 'ok' : 'ng'}}</p>
    <vt@form
      ref="form"
      v-model="valid"
    >

      <vt@input
        label="text"
        rules="required|テキストは必須です"
      />

      <vt@select
        label="select"
        :options="options"
        multiple
        rules="required|選択は必須です"
      />

      <vt@radio-group
        :items="options"
        rules="required|ラジオは必須です"
      />

      <vt@checkbox-group
        :items="options"
        rules="required|チェックボックスは必須です"
      />

      <vt@range
        label="range"
        rules="max_value:50 | 50以下で入力してください"
        thumb-label
      />

    </vt@form>

    <vt@btn color="secondary" @click="$refs.form.validate()">バリデート</vt@btn>
    <vt@btn color="warning" @click="$refs.form.reset()">リセット</vt@btn>

  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      valid: null,
    }
  },

  computed: {
    options: () => [
      {value: 1, label: 'アイテム1'},
      {value: 2, label: 'アイテム2'},
      {value: 3, label: 'アイテム3'},
    ],
  },
}
</script>
