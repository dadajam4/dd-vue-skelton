<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@switch
      :label="rotate ? 'on' : 'off'"
      v-model="rotate"
    ></vt@switch>

    <vt@card>
      <vt@card-text>
        <vt@layout justify-space-around>
          <vt@icon :rotate="rotate" sm>spinner</vt@icon>
          <vt@icon :rotate="rotate">spinner</vt@icon>
          <vt@icon :rotate="rotate" lg>spinner</vt@icon>
          <vt@icon :rotate="rotate" sm>home</vt@icon>
          <vt@icon :rotate="rotate">calendar-check-o</vt@icon>
          <vt@icon :rotate="rotate" lg>info-circle</vt@icon>
        </vt@layout>
      </vt@card-text>
    </vt@card>

  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      rotate: false,
    }
  },
}
</script>