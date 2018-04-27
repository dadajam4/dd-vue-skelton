<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      <code>vt@tile-content</code> コンポーネントは、 <code>vt@tile</code> コンポーネント直下に必ず設置してください。<br>
      本コンポーネントは任意の <code>vt@tile-title</code> 、 <code>vt@tile-sub-title</code> 、 <code>vt@tile-text</code> で構成されます。 <br>
      これらの要素はデフォルトでは改行が禁止され、エリアの横幅をテキストがはみ出る場合は省略表示されます。<br>
      この改行を許容させるには、 v-tile に対して wrap 属性を指定してください。
    </template>

    <vt@tile-group>
      <vt@tile>
        <vt@tile-avatar src="~assets/img/avatar/boy_1.png" />
        <vt@tile-content>
          <vt@tile-title>長いタイトルが入ります。長いタイトルが入ります。長いタイトルが入ります。長いタイトルが入ります。長いタイトルが入ります。</vt@tile-title>
          <vt@tile-sub-title>長いサブタイトルが入ります。長いサブタイトルが入ります。長いサブタイトルが入ります。長いサブタイトルが入ります。</vt@tile-sub-title>
          <vt@tile-text>長いテキストが入ります。長いテキストが入ります。長いテキストが入ります。長いテキストが入ります。長いテキストが入ります。長いテキストが入ります。</vt@tile-text>
        </vt@tile-content>
        <vt@tile-action>
          <vt@tooltip-fragment>
            <vt@btn flat icon="edit" />
            <vt@tooltip>編集</vt@tooltip>
          </vt@tooltip-fragment>
        </vt@tile-action>
      </vt@tile>
      <vt@tile wrap>
        <vt@tile-avatar src="~assets/img/avatar/boy_1.png" />
        <vt@tile-content>
          <vt@tile-title>長いタイトルが入ります。長いタイトルが入ります。長いタイトルが入ります。長いタイトルが入ります。長いタイトルが入ります。</vt@tile-title>
          <vt@tile-sub-title>長いサブタイトルが入ります。長いサブタイトルが入ります。長いサブタイトルが入ります。長いサブタイトルが入ります。</vt@tile-sub-title>
          <vt@tile-text>長いテキストが入ります。長いテキストが入ります。長いテキストが入ります。長いテキストが入ります。長いテキストが入ります。長いテキストが入ります。</vt@tile-text>
        </vt@tile-content>
        <vt@tile-action>
          <vt@tooltip-fragment>
            <vt@btn flat icon="edit" />
            <vt@tooltip>編集</vt@tooltip>
          </vt@tooltip-fragment>
        </vt@tile-action>
      </vt@tile>
    </vt@tile-group>
  </docs-example>
</template>

<script>
export default {
}
</script>
