<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      チェックボックスを単一選択とさせる場合、 <code>multiple</code> 属性に <samp>false</samp> を指定してください。
    </template>
    <div>
      <vt@checkbox
        v-for="item in items"
        :key="item.value"
        :value="item.value"
        v-model="checkInput"
        :multiple="false"
      >{{item.label}}</vt@checkbox>

      <div>{{checkInput}}</div>
    </div>
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      checkInput: null,
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