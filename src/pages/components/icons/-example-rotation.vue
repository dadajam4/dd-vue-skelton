<style lang="scss" scoped>
</style>

<template>
  <docs-example>

    <vt@card>
      <vt@card-text>
        <vt@switch
          label="Loop"
          v-model="rotate"
          :value="true"
        />

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

    <vt@card>
      <vt@card-text>
        <vt@range
          label="Ammount"
          v-model="deg"
          min="0"
          max="360"
        />

        <vt@layout justify-space-around>
          <vt@icon :rotate="deg" sm>spinner</vt@icon>
          <vt@icon :rotate="deg">spinner</vt@icon>
          <vt@icon :rotate="deg" lg>spinner</vt@icon>
          <vt@icon :rotate="deg" sm>home</vt@icon>
          <vt@icon :rotate="deg">calendar-check-o</vt@icon>
          <vt@icon :rotate="deg" lg>info-circle</vt@icon>
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
      deg: 0,
    }
  },
}
</script>
