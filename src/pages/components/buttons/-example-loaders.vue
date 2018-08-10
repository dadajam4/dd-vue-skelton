<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@btn
      color="secondary"
      :loading="loading1"
      :disabled="loading1"
      @click="startLoading('loading1')"
    >
      Accept Terms
    </vt@btn>

    <vt@btn
      color="primary"
      :loading="loading2"
      :disabled="loading2"
      @click="startLoading('loading2')"
    >
      <vt@icon left>address-book</vt@icon>
      left
    </vt@btn>

    <vt@btn
      color="info"
      :loading="loading3"
      :disabled="loading3"
      @click="startLoading('loading3')"
    >
      Custom Loader
      <span slot="loader">Loading...</span>
    </vt@btn>

    <vt@btn
      color="warning"
      :loading="loading4"
      :disabled="loading4"
      @click="startLoading('loading4')"
    >
      Icon Loader
      <span slot="loader">
        <vt@icon rotate>refresh</vt@icon>
      </span>
    </vt@btn>
  </docs-example>
</template>

<script>
export default {

  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      loading4: false,
    }
  },

  methods: {
    startLoading(key) {
      this[key] = true;
      setTimeout(() => (this[key] = false), 3000);
    },
  },
}
</script>
