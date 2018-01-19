<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@switch
      label="modelなし"
      value="aaa"
      name="switch1"
      :rules="[
        {rule: 'required', message: 'この項目は必須だよ'},
      ]"
    ></vt@switch>

    <vt@switch
      :label="`modelあり: ${switch1 === null ? 'null' : switch1.toString()}`"
      v-model="switch1"
      value="checked"
      :rules="[
        {rule: 'required', message: 'この項目は必須だよ'},
      ]"
    ></vt@switch>

    <h3>Array</h3>
    <div>{{switch2}}</div>
    <vt@switch
      label="太郎"
      v-model="switch2"
      value="太郎"
    ></vt@switch>

    <vt@switch
      label="花子"
      v-model="switch2"
      value="花子"
    ></vt@switch>

    <h3>States</h3>
    <vt@switch input-value="true" value label="on"></vt@switch>
    <vt@switch value label="off"></vt@switch>
    <vt@switch input-value="true" value disabled label="on disabled"></vt@switch>
    <vt@switch value disabled label="off disabled"></vt@switch>

    <h3>Colors</h3>
    <vt@switch input-value="true" value label="on" text-color="warning"></vt@switch>
    <vt@switch input-value="true" value label="on" text-color="indigo"></vt@switch>
  </docs-example>
</template>

<script>
export default {

  data() {
    return {
      switch1: null,
      switch2: [],
    }
  },
}
</script>