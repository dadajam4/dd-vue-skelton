<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@card
      img="/img/map/1.jpg"
      flat
      height="300px"
      class="vc@pa-md"
    >
      <vt@toolbar color="plain" dense floating class="vc@mt-none">
        <vt@input
          type="search"
          flat
          sm
        >
          <vt@icon>$ui.icons.search</vt@icon>
        </vt@input>
        <vt@btn flat icon>
          <vt@icon>$ui.icons.location</vt@icon>
        </vt@btn>
        <vt@btn flat icon>
          <vt@icon>$ui.icons.dotsVertical</vt@icon>
        </vt@btn>
      </vt@toolbar>
    </vt@card>
  </docs-example>
</template>

<script>
export default {
}
</script>
