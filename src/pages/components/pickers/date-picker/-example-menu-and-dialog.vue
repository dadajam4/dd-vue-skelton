<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      メニュー、またはダイアログで選択させる事ができます。<br>
      この場合 <code>vt@date-picker-fragment</code> で <code>vt@input</code> をラップしてください。<br>
      input要素のvalueは自動的にpickerのvalueとして同期されます。<br>
      デフォルトではメニュー表示となりますが、ダイアログ表示を行う場合は <code>dialog</code> 属性を設定します。<br>
      <code>cancellable</code> 属性を設定する事でキャンセル、OKを選択させる事ができます。<br>
      この場合においてはメニューやダイアログエリアの外をクリックした時やESCキー押下においてもキャンセル扱いとなり、メニュー・ダイアログ表示開始時の値にロールバックされます。
    </template>

    <vt@layout wrap row>
      <vt@flex xs12 sm6 md4>
        <vt@date-picker-fragment cancellable>
          <vt@input v-model="picked">
            <vt@icon>calendar</vt@icon>
          </vt@input>
        </vt@date-picker-fragment>
      </vt@flex>
      <vt@flex xs12 sm6 md4>
        <vt@date-picker-fragment cancellable dialog>
          <vt@input v-model="picked">
            <vt@icon>calendar</vt@icon>
          </vt@input>
        </vt@date-picker-fragment>
      </vt@flex>
      <vt@flex xs12 sm6 md4>
        <vt@date-picker-fragment dialog>
          <vt@input v-model="picked">
            <vt@icon>calendar</vt@icon>
          </vt@input>
        </vt@date-picker-fragment>
      </vt@flex>
    </vt@layout>
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      picked: null,
    }
  },
}
</script>
