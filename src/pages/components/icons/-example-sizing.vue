<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      明示的にサイズを指定しない場合、全てのアイコンは <code>font-size: inherit;</code> です。<br>
      サイズ指定を行った場合は、そのサイズに準じて表示されます。
    </template>

    <p>
      This is calendar_today
      <vt@icon>calendar_today</vt@icon>
    </p>

    <p>
      This is mdi mdi-format-align-left
      <vt@icon>mdi mdi-format-align-left</vt@icon>
    </p>

    <p>
      This is mdi mdi-format-align-left
      <vt@icon>fas fa-info-circle</vt@icon>
    </p>

    <vt@row
      gutter-md
      justify-space-around
      v-for="size in sizes"
      :key="size.key"
    >
      <vt@col col-12 col-sm-6>
        <vt@card>
          <vt@card-text>
            <vt@row nowrap justify-space-around>
              <vt@icon v-bind="{[size.key]: true}">calendar_today</vt@icon>
              <vt@icon v-bind="{[size.key]: true}">mdi mdi-format-align-left</vt@icon>
              <vt@icon v-bind="{[size.key]: true}">fas fa-info-circle</vt@icon>
            </vt@row>
          </vt@card-text>
        </vt@card>
      </vt@col>
      <vt@col col-12 col-sm-6>
        <vt@card primary>
          <vt@card-text>
            <vt@row nowrap justify-space-around>
              <vt@icon v-bind="{[size.key]: true}">folder_open</vt@icon>
              <vt@icon v-bind="{[size.key]: true}">mdi mdi-account</vt@icon>
              <vt@icon v-bind="{[size.key]: true}">fas fa-th-list</vt@icon>
            </vt@row>
          </vt@card-text>
        </vt@card>
      </vt@col>
    </vt@row>
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      sizes: [
        {key: 'xs'},
        {key: 'sm'},
        {key: 'md'},
        {key: 'lg'},
        {key: 'xl'},
        {key: 'xxl'},
      ],
    }
  },
}
</script>
