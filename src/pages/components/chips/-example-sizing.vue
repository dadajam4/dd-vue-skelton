<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@chip sm>
      <vt@avatar>
        <vt@icon>fas fa-user-circle</vt@icon>
      </vt@avatar>
      Ranee
    </vt@chip>
    <vt@chip sm>
      Premium
      <vt@icon right>fas fa-star</vt@icon>
    </vt@chip>
    <vt@chip sm>
      1 Year
      <vt@icon right>fas fa-birthday-cake</vt@icon>
    </vt@chip>
    <vt@chip background-color="green" text-color="shades-white" sm>
      <vt@avatar background-color="green-darken-4">1</vt@avatar>
      Year
    </vt@chip>
    <vt@chip close sm>
      <vt@avatar>
        <vt@icon>fas fa-check-circle</vt@icon>
      </vt@avatar>
      Ranee
    </vt@chip>
  </docs-example>
</template>

<script>
export default {
}
</script>
