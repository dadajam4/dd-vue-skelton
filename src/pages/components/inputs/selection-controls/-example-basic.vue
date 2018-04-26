<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      基本的なマークアップ例です。
    </template>

<!--
      color="primary"
-->
    <div>
      <vt@checkbox
        v-for="item in items"
        :key="item.value"
        :value="item.value"
        v-model="checkInput"
      >{{item.label}}</vt@checkbox>

      <div>{{checkInput}}</div>
    </div>

    <div>
      <vt@radio
        v-for="item in items"
        :key="item.value"
        :value="item.value"
        v-model="radioInput"
      >{{item.label}}</vt@radio>

      <div>{{radioInput}}</div>
    </div>

    <div>
      <vt@switch
        v-for="item in items"
        :key="item.value"
        :value="item.value"
        v-model="switchInput"
      >{{item.label}}</vt@switch>

      <div>{{switchInput}}</div>
    </div>

  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      checkInput: null,
      radioInput: null,
      switchInput: null,
    }
  },

  computed: {
    items: () => [
      {value: 1, label: 'みかん'},
      {value: 2, label: 'りんご'},
      {value: 3, label: 'パイナップル'},
    ],
  },
}
</script>
