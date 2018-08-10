<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      明示的にサイズを指定しない場合、全てのアイコンは <code>font-size: inherit;</code> です。<br>
      サイズ指定を行った場合は、そのサイズに準じて表示されます。
    </template>

    <p>
      {{ $ui.icons.calendarToday }}
      <vt@icon>$ui.icons.calendarToday</vt@icon>
    </p>

    <p>
      {{ $ui.icons.menu }}
      <vt@icon>$ui.icons.menu</vt@icon>
    </p>

    <p>
      {{ $ui.icons.info }}
      <vt@icon>$ui.icons.info</vt@icon>
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
              <vt@icon v-bind="{[size.key]: true}">$ui.icons.calendarToday</vt@icon>
              <vt@icon v-bind="{[size.key]: true}">$ui.icons.menu</vt@icon>
              <vt@icon v-bind="{[size.key]: true}">$ui.icons.info</vt@icon>
            </vt@row>
          </vt@card-text>
        </vt@card>
      </vt@col>
      <vt@col col-12 col-sm-6>
        <vt@card primary>
          <vt@card-text>
            <vt@row nowrap justify-space-around>
              <vt@icon v-bind="{[size.key]: true}">$ui.icons.error</vt@icon>
              <vt@icon v-bind="{[size.key]: true}">$ui.icons.warning</vt@icon>
              <vt@icon v-bind="{[size.key]: true}">$ui.icons.delimiter</vt@icon>
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
