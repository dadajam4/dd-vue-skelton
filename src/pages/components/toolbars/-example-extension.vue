<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@toolbar class="vc@mb-md" color="info">
      <vt@toolbar-side-icon />
      <vt@spacer />
      <vt@btn flat icon>
        <vt@icon>search</vt@icon>
      </vt@btn>
      <vt@btn flat icon>
        <vt@icon>notifications</vt@icon>
      </vt@btn>
      <vt@btn flat icon>
        <vt@icon>refresh</vt@icon>
      </vt@btn>
      <vt@btn flat icon>
        <vt@icon>more_vert</vt@icon>
      </vt@btn>
      <vt@toolbar-extension inherits-color>
        <vt@toolbar-title>Title</vt@toolbar-title>
      </vt@toolbar-extension>
    </vt@toolbar>

    <vt@toolbar class="vc@mb-md" color="info">
      <vt@toolbar-side-icon />
      <vt@spacer />
      <vt@btn flat icon>
        <vt@icon>search</vt@icon>
      </vt@btn>
      <vt@btn flat icon>
        <vt@icon>notifications</vt@icon>
      </vt@btn>
      <vt@btn flat icon>
        <vt@icon>refresh</vt@icon>
      </vt@btn>
      <vt@btn flat icon>
        <vt@icon>more_vert</vt@icon>
      </vt@btn>
      <vt@toolbar-extension>
        <vt@toolbar-title>Title</vt@toolbar-title>
      </vt@toolbar-extension>
    </vt@toolbar>

    <vt@toolbar class="vc@mb-md" color="info">
      <vt@toolbar-side-icon />
      <vt@spacer />
      <vt@btn flat icon>
        <vt@icon>search</vt@icon>
      </vt@btn>
      <vt@btn flat icon>
        <vt@icon>notifications</vt@icon>
      </vt@btn>
      <vt@btn flat icon>
        <vt@icon>refresh</vt@icon>
      </vt@btn>
      <vt@btn flat icon>
        <vt@icon>more_vert</vt@icon>
      </vt@btn>
      <vt@toolbar-extension color="secondary">
        <vt@toolbar-title>Title</vt@toolbar-title>
      </vt@toolbar-extension>
      <vt@toolbar-extension color="warning">
        <vt@spacer />
        <vt@btn flat icon>
          <vt@icon>search</vt@icon>
        </vt@btn>
        <vt@btn flat icon>
          <vt@icon>notifications</vt@icon>
        </vt@btn>
        <vt@btn flat icon>
          <vt@icon>refresh</vt@icon>
        </vt@btn>
        <vt@btn flat icon>
          <vt@icon>more_vert</vt@icon>
        </vt@btn>
      </vt@toolbar-extension>
    </vt@toolbar>
  </docs-example>
</template>

<script>
export default {
}
</script>
