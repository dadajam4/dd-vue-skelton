<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@container grid-list-md text--center>
      <vt@layout row wrap text--center>
        <template v-for="col, index in [12, 6, 4, 3, 2]">
          <vt@flex
            v-for="n in 12 / col"
            :key="`${col}-${n}`"
            v-bind="{[`xs${col}`]: true}"
          >
            <vt@card v-bind="{[index % 2 === 0 ? 'primary' : 'secondary']: true}">
              <vt@card-text class="vc@p-h--none">{{col}}</vt@card-text>
            </vt@card>
          </vt@flex>
        </template>
      </vt@layout>
    </vt@container>
  </docs-example>
</template>

<script>
export default {
}
</script>