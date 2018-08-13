<style lang="scss" scoped>
</style>

<template>
  <docs-example title="Button">
    <template slot="description">
      フィールド左右にボタンを設置可能です。コンポーネント内に直接 <code>vt@btn</code> コンポーネントを挿入します。<br>
      その際、 <code>left</code> 、もしくは <code>right</code> をpropsで指定します。デフォルトはrightです。<br>
      もちろんクリック等のリスナは自由に設定可能です。<br>
      ボタンは、 <code>vt@tooltip-fragment</code> や、 <code>vt@menu-fragment</code> でラップする事も可能です。
    </template>

    <vt@input label="デフォルト（right）">
      <vt@btn color="info" @click="onClick">ボタン</vt@btn>
    </vt@input>

    <vt@input label="left">
      <vt@btn color="primary" icon="$ui.icons.search" left @click="onClick" />
    </vt@input>

    <vt@input label="with menu">
      <vt@menu-fragment>
        <vt@btn color="secondary">Menu</vt@btn>
        <vt@menu offset-y>
          <vt@tile-group>
            <vt@tile @click>
              <vt@tile-content>
                <vt@tile-title>メニュー1</vt@tile-title>
              </vt@tile-content>
            </vt@tile>
          </vt@tile-group>
        </vt@menu>
      </vt@menu-fragment>
    </vt@input>

    <vt@input label="left &amp; tooltip">
      <vt@tooltip-fragment>
        <vt@btn color="primary" icon="$ui.icons.search" left @click="onClick" />
        <vt@tooltip top>
          Tooltip!
        </vt@tooltip>
      </vt@tooltip-fragment>
    </vt@input>
  </docs-example>
</template>

<script>
export default {
  methods: {
    onClick(e) {
      this.$ui.alert('click!');
    },
  },
}
</script>
