<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <div class="text-xs-center">
      <vt@tooltip-fragment>
        <vt@btn primary>Top</vt@btn>
        <vt@tooltip top>
          <span>Top tooltip</span>
        </vt@tooltip>
      </vt@tooltip-fragment>
      <vt@tooltip-fragment>
        <vt@btn primary>Right</vt@btn>
        <vt@tooltip right>
          <span>Right tooltip</span>
        </vt@tooltip>
      </vt@tooltip-fragment>
      <vt@tooltip-fragment>
        <vt@btn primary>Bottom</vt@btn>
        <vt@tooltip bottom>
          <span>Bottom tooltip</span>
        </vt@tooltip>
      </vt@tooltip-fragment>
      <vt@tooltip-fragment>
        <vt@btn primary>Left(delay 500ms)あいうえお</vt@btn>
        <vt@tooltip left open-hover-delay="500">
          <span>Left tooltip</span>
        </vt@tooltip>
      </vt@tooltip-fragment>
    </div>
  </docs-example>
</template>

<script>
export default {
}
</script>