<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@checkbox
      label="modelなし"
      value="aaa"
      name="checkbox1"
      :rules="[
        {rule: 'required', message: 'この項目は必須だよ'},
      ]"
    ></vt@checkbox>

    <vt@checkbox
      :label="`modelあり: ${checkbox1 === null ? 'null' : checkbox1.toString()}`"
      v-model="checkbox1"
      value="checked"
      :rules="[
        {rule: 'required', message: 'この項目は必須だよ'},
      ]"
    ></vt@checkbox>

    <h3>Array</h3>
    <div>{{checkbox2}}</div>
    <vt@checkbox
      label="太郎"
      v-model="checkbox2"
      value="太郎"
    ></vt@checkbox>

    <vt@checkbox
      label="花子"
      v-model="checkbox2"
      value="花子"
    ></vt@checkbox>

    <h3>States</h3>
    <vt@checkbox input-value="true" value label="on"></vt@checkbox>
    <vt@checkbox value label="off"></vt@checkbox>
    <vt@checkbox value indeterminate label="indeterminate"></vt@checkbox>
    <vt@checkbox input-value="true" value disabled label="on disabled"></vt@checkbox>
    <vt@checkbox value disabled label="off disabled"></vt@checkbox>
  </docs-example>
</template>

<script>
export default {

  data() {
    return {
      checkbox1: null,
      checkbox2: [],
    }
  },
}
</script>