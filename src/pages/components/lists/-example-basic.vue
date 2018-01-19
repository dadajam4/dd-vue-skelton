<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@card>
      <vt@toolbar info>
        <vt@toolbar-side-icon></vt@toolbar-side-icon>
        <vt@toolbar-title>これはツールバーです。これはツールバーです。これはツールバーです。</vt@toolbar-title>
        <vt@spacer></vt@spacer>
        <vt@btn lg icon>
          <vt@icon>search</vt@icon>
        </vt@btn>
      </vt@toolbar>

      <vt@list>
        <vt@list-tile @click="">
          <vt@list-tile-avatar>
            <img src="~assets/img/avatar/boy_1.png" alt="">
          </vt@list-tile-avatar>
          <vt@list-tile-content>
            <vt@list-tile-title>タイトル</vt@list-tile-title>
            <vt@list-tile-sub-title>サブタイトル</vt@list-tile-sub-title>
          </vt@list-tile-content>
        </vt@list-tile>
        <vt@list-tile @click="">
          <vt@list-tile-avatar>
            <img src="~assets/img/avatar/boy_2.png" alt="">
          </vt@list-tile-avatar>
          <vt@list-tile-content>
            <vt@list-tile-title>タイトル</vt@list-tile-title>
            <vt@list-tile-sub-title>サブタイトル</vt@list-tile-sub-title>
            テキストが入ります。テキストが入ります。テキストが入ります。
          </vt@list-tile-content>
        </vt@list-tile>
        <vt@list-tile @click="">
          <vt@list-tile-avatar>
            <img src="~assets/img/avatar/boy_3.png" alt="">
          </vt@list-tile-avatar>
          <vt@list-tile-content>
            <vt@list-tile-title>長いタイトルが入ります。長いタイトルが入ります。長いタイトルが入ります。長いタイトルが入ります。長いタイトルが入ります。長いタイトルが入ります。</vt@list-tile-title>
            <vt@list-tile-sub-title>長いサブタイトルが入ります。長いサブタイトルが入ります。長いサブタイトルが入ります。長いサブタイトルが入ります。</vt@list-tile-sub-title>
            テキストが入ります。テキストが入ります。テキストが入ります。
          </vt@list-tile-content>
        </vt@list-tile>
      </vt@list>
    </vt@card>
  </docs-example>
</template>

<script>
export default {
}
</script>