<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@tabs center fixed color="info">
      <vt@tabs-item v-for="tab in tabs" :key="tab.label">
        <vt@tabs-trigger :icon="tab.icon">{{tab.label}}</vt@tabs-trigger>
        <vt@tabs-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </vt@tabs-content>
      </vt@tabs-item>
    </vt@tabs>
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {icon: 'phone', label: 'RECENTS'},
        {icon: 'hearing', label: 'FAVORITES'},
        {icon: 'add_alert', label: 'NEARBY'},
      ],
    }
  }
}
</script>
