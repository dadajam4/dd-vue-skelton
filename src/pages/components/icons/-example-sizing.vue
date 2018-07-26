<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@container grid-list-md text--center>
      <vt@layout
        justify-space-around
        v-for="size in sizes"
        :key="size.key"
      >
        <vt@flex>
          <vt@card>
            <vt@card-text>
              <vt@layout justify-space-around>
                <vt@icon v-bind="{[size.key]: true}">home</vt@icon>
                <vt@icon v-bind="{[size.key]: true}">calendar-check-o</vt@icon>
                <vt@icon v-bind="{[size.key]: true}">info-circle</vt@icon>
              </vt@layout>
            </vt@card-text>
          </vt@card>
        </vt@flex>
        <vt@flex>
          <vt@card primary>
            <vt@card-text>
              <vt@layout justify-space-around>
                <vt@icon v-bind="{[size.key]: true}">folder-open-o</vt@icon>
                <vt@icon v-bind="{[size.key]: true}">th-list</vt@icon>
                <vt@icon v-bind="{[size.key]: true}">battery-three-quarters</vt@icon>
              </vt@layout>
            </vt@card-text>
          </vt@card>
        </vt@flex>
      </vt@layout>
    </vt@container>
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      sizes: [
        {key: 'sm'},
        {key: 'md'},
        {key: 'lg'},
        {key: 'xl'},
      ],
    }
  },
}
</script>
