<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@card>
      <vt@toolbar color="cyan" dark>
        <vt@toolbar-side-icon></vt@toolbar-side-icon>
        <vt@toolbar-title>これはツールバーです。これはツールバーです。これはツールバーです。</vt@toolbar-title>
        <vt@spacer></vt@spacer>
        <vt@menu-fragment>
          <vt@toolbar-side-icon></vt@toolbar-side-icon>
          <vt@menu bottom left>
            <vt@list>
              <vt@list-tile v-for="item in items" :key="item.title" @click="">
                <vt@list-tile-title>{{ item.title }}</vt@list-tile-title>
              </vt@list-tile>
            </vt@list>
          </vt@menu>
        </vt@menu-fragment>
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
      </vt@list>
    </vt@card>
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }
  },
}
</script>