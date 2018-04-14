<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      チェックボックスのみ、 <code>indeterminate</code> 属性を設定する事で「不確定」な状態を示す表示が可能です。<br>
      これは例えば、いくつかのチェックボックスのグループを全選択、および全解除するようなアクションを行うのに利用できます。
    </template>

    <vt@checkbox
      :input-checked="isAllChecked"
      :indeterminate="isIndeterminate"
      @click.prevent="resolveIndeterminate"
      :label="(isAllChecked && '解除する') || '全選択する'"
    />

    <div>
      <vt@checkbox
        v-for="item in items"
        :key="item.value"
        :value="item.value"
        v-model="checkInput"
      >{{item.label}}</vt@checkbox>

      <div>{{checkInput}}</div>
    </div>
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      checkInput: [],
    }
  },

  computed: {
    items: () => [
      {value: 1, label: 'みかん'},
      {value: 2, label: 'りんご'},
      {value: 3, label: 'パイナップル'},
    ],
    itemsLength() { return this.items.length },

    checkedCount() { return this.checkInput.length },
    checkedIsEmpty() { return this.checkedCount === 0 },
    isAllChecked() { return this.checkedCount === this.itemsLength },
    isIndeterminate() { return !this.checkedIsEmpty && !this.isAllChecked },
  },

  methods: {
    resolveIndeterminate() {
      if (this.isAllChecked) {
        this.checkInput = [];
      } else {
        this.checkInput = this.items.map(i => i.value);
      }
    },
  },
}
</script>