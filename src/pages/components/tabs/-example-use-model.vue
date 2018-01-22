<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <p>
      アクティブなタブのIDは「{{selected}}」です。
      <vt@btn info @click="next">Next</vt@btn>
    </p>
    <vt@tabs v-model="selected">
      <vt@tabs-item v-for="id in tabs" :key="id" :id="id">
        <vt@tabs-trigger>{{id}}</vt@tabs-trigger>
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
      tabs: ['tab-1', 'tab-2', 'tab-3'],
      selected: null,
    }
  },

  methods: {
    next() {
      const currentIndex = this.tabs.indexOf(this.selected);
      const nextIndex = (currentIndex === this.tabs.length - 1) ? 0 : currentIndex + 1;
      this.selected = this.tabs[nextIndex];
    },
  },
}
</script>