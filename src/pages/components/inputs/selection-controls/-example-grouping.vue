<style lang="scss" scoped>
</style>

<template>
  <docs-example title="Grouping &amp; validation">
    <template slot="description">
      ラジオ、チェックボックス、スイッチは基本的に単一で利用する事は少ないです。<br>
      これらの要素は <code>vt@xxx-group</code> でグルーピング可能です。<br>
      いくつかの属性はこの親コンポーネントから一括で注入可能です。<br>
      グルーピングする際はv-modelやバリデーションはこの親コンポーネントに設定してください。
    </template>

    <vt@radio-group
      label="Radio 1"
      v-model="radioInput"
      :rules="{handler: val => (val !== 300), message: '300円はダメなんだ'}"
    >
      <vt@radio
        v-for="item in items"
        :key="item.value"
        :value="item.value"
        :disabled="item.disabled"
      >{{item.label}}</vt@radio>
    </vt@radio-group>

    <vt@radio-group
      label="Radio 2 (props &amp; color)"
      :items="items"
      v-model="radioInput"
      color="indigo"
      block
      :rules="{handler: val => (val !== 100), message: '100円はダメなんだ'}"
    />

    <pre><code>{{radioInput}}</code></pre>

    <vt@checkbox-group
      label="Checkbox 1"
      v-model="checkboxInput"
      rules="required|どれか1つは選んでください"
    >
      <vt@checkbox
        v-for="item in items"
        :key="item.value"
        :value="item.value"
        :disabled="item.disabled"
      >{{item.label}}</vt@checkbox>
    </vt@checkbox-group>

    <vt@checkbox-group
      label="Checkbox 2 (props &amp; color)"
      :items="items"
      v-model="checkboxInput"
      color="indigo"
      block
      :rules="{handler: values => (!values || !values.find(val => val === 100)), message: '100円はダメなんだ'}"
    />

    <pre><code>{{checkboxInput}}</code></pre>

    <vt@switch-group
      label="Switch 1"
      multiple
      v-model="switchInput"
      rules="required|どれか1つは選んでください"
    >
      <vt@switch
        v-for="item in items"
        :key="item.value"
        :value="item.value"
        :disabled="item.disabled"
      >{{item.label}}</vt@switch>
    </vt@switch-group>

    <vt@switch-group
      label="Switch 2 (props &amp; color)"
      multiple
      :items="items"
      v-model="switchInput"
      color="indigo"
      block
      :rules="{handler: values => (!values || !values.find(val => val === 100)), message: '100円はダメなんだ'}"
    />

    <pre><code>{{switchInput}}</code></pre>

  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      radioInput: null,
      checkboxInput: null,
      switchInput: null,
    }
  },

  computed: {
    items: () => [
      {value: 100, label: '100円'},
      {value: 200, label: '200円'},
      {value: 300, label: '300円'},
      {value: 400, label: '400円', disabled: true},
    ],
  },
}
</script>
