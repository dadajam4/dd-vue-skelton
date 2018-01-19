<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@container grid-list-xl text-xs-center>
      <vt@layout row wrap text--center>
        <vt@flex xs10 offset-xs1>
          <vt@card dark primary>
            <vt@card-text>xs10 offset-xs1</vt@card-text>
          </vt@card>
        </vt@flex>
        <vt@flex xs7 offset-xs0 offset-md2 offset-lg5>
          <vt@card dark success>
            <vt@card-text>xs7 offset-xs5</vt@card-text>
          </vt@card>
        </vt@flex>
        <vt@flex xs12 sm5 md2>
          <vt@card dark info>
            <vt@card-text>xs5</vt@card-text>
          </vt@card>
        </vt@flex>
        <vt@flex xs12 sm5 md3 offset-xs2 offset-lg2>
          <vt@card dark warning>
            <vt@card-text>xs5 offset-xs2</vt@card-text>
          </vt@card>
        </vt@flex>
      </vt@layout>
    </vt@container>
  </docs-example>
</template>

<script>
export default {
}
</script>