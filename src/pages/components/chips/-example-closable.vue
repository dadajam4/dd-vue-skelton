<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <div class="vc@text-center">
      <vt@btn
        color="info"
        @click="chip1 = true, chip2 = true, chip3 = true, chip4 = true"
        v-if="!chip1 || !chip2 || !chip3 || !chip4"
      >reset</vt@btn>
    </div>
    <vt@chip close v-model="chip1">Closable</vt@chip>
    <vt@chip close v-model="chip2" color="error">Remove</vt@chip>
    <vt@chip close v-model="chip3" color="success">Success</vt@chip>
    <vt@chip close v-model="chip4" color="warning">Comprete</vt@chip>
  </docs-example>
</template>

<script>
export default {

  data() {
    return {
      chip1: true,
      chip2: true,
      chip3: true,
      chip4: true,
    }
  },
}
</script>
