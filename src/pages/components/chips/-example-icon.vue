<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@chip>
      <vt@avatar>
        <vt@icon>$ui.icons.user</vt@icon>
      </vt@avatar>
      Ranee
    </vt@chip>
    <vt@chip>
      Premium
      <vt@icon right>$ui.icons.ratingFull</vt@icon>
    </vt@chip>
    <vt@chip>
      1 Year
      <vt@icon right>$ui.icons.calendar</vt@icon>
    </vt@chip>
    <vt@chip color="primary">
      <vt@avatar background-color="darken">1</vt@avatar>
      Year
    </vt@chip>
    <vt@chip close>
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
