<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <div class="text-xs-center">
      <vt@tooltip top>
        <vt@btn primary slot="activator">Top</vt@btn>
        <span>Top tooltip</span>
      </vt@tooltip>
      <vt@tooltip right>
        <vt@btn primary slot="activator">Right</vt@btn>
        <span>Right tooltip</span>
      </vt@tooltip>
      <vt@tooltip bottom>
        <vt@btn primary slot="activator">Bottom</vt@btn>
        <span>Bottom tooltip</span>
      </vt@tooltip>
      <vt@tooltip left>
        <vt@btn primary slot="activator">Left</vt@btn>
        <span>Left tooltip</span>
      </vt@tooltip>
    </div>
  </docs-example>
</template>

<script>
export default {
}
</script>