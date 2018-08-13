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
          <vt@icon :rotate="rotate" sm>$ui.icons.renew</vt@icon>
          <vt@icon :rotate="rotate">$ui.icons.renew</vt@icon>
          <vt@icon :rotate="rotate" lg>$ui.icons.renew</vt@icon>
          <vt@icon :rotate="rotate" sm>$ui.icons.home</vt@icon>
          <vt@icon :rotate="rotate">$ui.icons.refresh</vt@icon>
          <vt@icon :rotate="rotate" lg>$ui.icons.info</vt@icon>
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
          <vt@icon :rotate="deg" sm>$ui.icons.renew</vt@icon>
          <vt@icon :rotate="deg">$ui.icons.renew</vt@icon>
          <vt@icon :rotate="deg" lg>$ui.icons.renew</vt@icon>
          <vt@icon :rotate="deg" sm>$ui.icons.home</vt@icon>
          <vt@icon :rotate="deg">$ui.icons.refresh</vt@icon>
          <vt@icon :rotate="deg" lg>$ui.icons.info</vt@icon>
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
