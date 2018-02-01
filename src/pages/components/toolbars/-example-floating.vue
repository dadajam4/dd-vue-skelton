<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@card
      img="/img/map/1.jpg"
      flat
      height="300px"
      class="vc@p-a--md"
    >
      <vt@toolbar dense floating class="vc@m-t--none">
        <vt@text-field
          type="search"
          left-icon="search"
          flat
        />
        <vt@btn icon>
          <vt@icon>map-marker</vt@icon>
        </vt@btn>
        <vt@btn icon>
          <vt@icon>ellipsis-v</vt@icon>
        </vt@btn>
      </vt@toolbar>
    </vt@card>
  </docs-example>
</template>

<script>
export default {
}
</script>