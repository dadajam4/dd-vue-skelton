<style lang="scss" scoped>
</style>

<template>
  <docs-example>

    <vt@card>
      <vt@card-text>
        <vt@switch
          label="Loop"
          v-model="rotate"
          :value="true"
        />

        <vt@row nowrap justify-space-around>
          <vt@icon :rotate="rotate" sm>autorenew</vt@icon>
          <vt@icon :rotate="rotate">autorenew</vt@icon>
          <vt@icon :rotate="rotate" lg>autorenew</vt@icon>
          <vt@icon :rotate="rotate" sm>home</vt@icon>
          <vt@icon :rotate="rotate">fas fa-spinner</vt@icon>
          <vt@icon :rotate="rotate" lg>fas fa-info-circle</vt@icon>
        </vt@row>
      </vt@card-text>
    </vt@card>

    <vt@card>
      <vt@card-text>
        <vt@range
          label="Ammount"
          v-model="deg"
          min="0"
          max="360"
        />

        <vt@row nowrap justify-space-around>
          <vt@icon :rotate="deg" sm>autorenew</vt@icon>
          <vt@icon :rotate="deg">autorenew</vt@icon>
          <vt@icon :rotate="deg" lg>autorenew</vt@icon>
          <vt@icon :rotate="deg" sm>home</vt@icon>
          <vt@icon :rotate="deg">fas fa-spinner</vt@icon>
          <vt@icon :rotate="deg" lg>fas fa-info-circle</vt@icon>
        </vt@row>
      </vt@card-text>
    </vt@card>

  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      rotate: false,
      deg: 0,
    }
  },
}
</script>
