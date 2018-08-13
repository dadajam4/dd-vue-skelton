<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@chip sm>
      <vt@avatar>
        <vt@icon>$ui.icons.user</vt@icon>
      </vt@avatar>
      Ranee
    </vt@chip>
    <vt@chip sm>
      Premium
      <vt@icon right>$ui.icons.ratingFull</vt@icon>
    </vt@chip>
    <vt@chip sm>
      1 Year
      <vt@icon right>$ui.icons.calendar</vt@icon>
    </vt@chip>
    <vt@chip color="primary" sm>
      <vt@avatar background-color="darken">1</vt@avatar>
      Year
    </vt@chip>
    <vt@chip close sm>
      <vt@avatar>
        <vt@icon>$ui.icons.check</vt@icon>
      </vt@avatar>
      Ranee
    </vt@chip>
  </docs-example>
</template>

<script>
export default {
}
</script>
