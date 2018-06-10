<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      メニュー、またはダイアログで選択させる事ができます。<br>
      メニューの場合は <code>vt@menu-fragment</code> &gt; <code>vt@date-picker-menu</code><br>
      ダイアログの場合は <code>vt@dialog-fragment</code> &gt; <code>vt@date-picker-dialog</code> の構造でマークアップしてください。<br>
      いずれの場合も <code>cancellable</code> 属性を設定する事でキャンセル、OKを選択させる事ができます。<br>
      この場合においてはメニューやダイアログエリアの外をクリックした時やESCキー押下においてもキャンセル扱いとなり、メニュー・ダイアログ表示開始時の値にロールバックされます。
    </template>

    <vt@layout wrap row>
      <vt@flex xs12 sm6 md4>
        <vt@menu-fragment>
          <vt@input
            v-model="picked"
          >
            <vt@icon>calendar</vt@icon>
          </vt@input>
          <vt@date-picker-menu
            v-model="picked"
            cancellable
          />
        </vt@menu-fragment>
      </vt@flex>
      <vt@flex xs12 sm6 md4>
        <vt@dialog-fragment>
          <vt@input
            v-model="picked"
          >
            <vt@icon>calendar</vt@icon>
          </vt@input>
          <vt@date-picker-dialog
            v-model="picked"
            cancellable
          />
        </vt@dialog-fragment>
      </vt@flex>
      <vt@flex xs12 sm6 md4>
        <vt@dialog-fragment>
          <vt@input
            v-model="picked"
          >
            <vt@icon>calendar</vt@icon>
          </vt@input>
          <vt@date-picker-dialog
            v-model="picked"
          />
        </vt@dialog-fragment>
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
