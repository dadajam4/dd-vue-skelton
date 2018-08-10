<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@card>
      <vt@toolbar color="info" dark>
        <vt@toolbar-side-icon></vt@toolbar-side-icon>
        <vt@toolbar-title>これはツールバーです。これはツールバーです。これはツールバーです。</vt@toolbar-title>
        <vt@spacer></vt@spacer>
        <vt@menu-fragment>
          <vt@toolbar-side-icon></vt@toolbar-side-icon>
          <vt@menu bottom left>
            <vt@tile-group>
              <vt@tile v-for="item in items" :key="item.title" @click="">
                <vt@tile-content>
                  <vt@tile-title>{{ item.title }}</vt@tile-title>
                </vt@tile-content>
              </vt@tile>
            </vt@tile-group>
          </vt@menu>
        </vt@menu-fragment>
      </vt@toolbar>

      <vt@tile-group>
        <vt@tile @click="">
          <vt@tile-avatar>
            <img src="~assets/img/avatar/boy_1.png" alt="">
          </vt@tile-avatar>
          <vt@tile-content>
            <vt@tile-title>タイトル</vt@tile-title>
            <vt@tile-sub-title>サブタイトル</vt@tile-sub-title>
          </vt@tile-content>
        </vt@tile>
      </vt@tile-group>
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
