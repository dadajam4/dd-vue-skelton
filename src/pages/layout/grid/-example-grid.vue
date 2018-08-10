<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@row text-center gutter-md>
      <template
        v-for="col, index in [12, 6, 4, 3, 2]"
      >
        <vt@col
          v-for="n in 12 / col"
          :key="`${col}-${n}`"
          v-bind="{[`col-${col}`]: true}"
        >
          <vt@card :color="index % 2 === 0 ? 'primary' : 'secondary'">
            <vt@card-text class="vc@ph-none">{{col}}</vt@card-text>
          </vt@card>
        </vt@col>
      </template>
    </vt@row>
  </docs-example>
</template>

<script>
export default {
}
</script>
