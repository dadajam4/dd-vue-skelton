<style lang="scss" scoped>
</style>

<template>
  <docs-example title="Button">
    <template slot="description">
      フィールド左右にボタンを設置可能です。コンポーネント内に直接 <code>vt@btn</code> コンポーネントを挿入します。<br>
      その際、 <code>left</code> 、もしくは <code>right</code> をpropsで指定します。デフォルトはrightです。<br>
      クリック等のリスナは自由に設定可能です。（※event.stopPropagationは不要です）<br>
      ボタンは、 <code>vt@tooltip-fragment</code> や、 <code>vt@menu-fragment</code> でラップする事も可能です。
    </template>

    <vt@select label="デフォルト（right）" :options="options">
      <vt@btn color="info" @click.stop="onClick">ボタン</vt@btn>
    </vt@select>

    <vt@select label="left" :options="options">
      <vt@btn color="primary" icon="$ui.icons.search" left @click.stop="onClick" />
    </vt@select>

    <vt@select label="with menu" :options="options">
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
    </vt@select>

    <vt@select label="left &amp; tooltip" :options="options">
      <vt@tooltip-fragment>
        <vt@btn color="primary" icon="$ui.icons.search" left @click.stop="onClick" />
        <vt@tooltip top>
          Tooltip!
        </vt@tooltip>
      </vt@tooltip-fragment>
    </vt@select>
  </docs-example>
</template>

<script>
export default {
  computed: {
    options: () => [
      {value: 1, label: '選択肢 1'},
      {value: 2, label: '選択肢 2'},
      {value: 3, label: '選択肢 3'},
    ],
  },

  methods: {
    onClick(e) {
      this.$ui.alert('click!');
    },
  },
}
</script>
