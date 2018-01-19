<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@chip close>Example Chip</vt@chip>
    <vt@chip>Example Chip</vt@chip>
    <vt@chip close>
      <vt@avatar class="vc@background-color--shades-white">
        <img src="~/assets/img/avatar/boy_1.png" alt="trevor">
      </vt@avatar>
      Trevor Hansen
    </vt@chip>
    <vt@chip close>
      <vt@avatar background-color="teal">A</vt@avatar>
      ANZ Bank
    </vt@chip>
  </docs-example>
</template>

<script>
export default {
}
</script>