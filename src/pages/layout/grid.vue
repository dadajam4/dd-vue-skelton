<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Grid</vt@page-header>
    <vt@page-intro>
      Use our iOS integration to style your native iOS applications to be consistent with the <span>hogehoge</span>
    </vt@page-intro>

    <vt@page-section title id="grid" data-anchor-point>
      <vt@container grid-list-md text-xs-center>
        <vt@layout row wrap text--center>
          <vt@flex xs12>
            <vt@card primary>
              <vt@card-text class="vc@p-h--none">12</vt@card-text>
            </vt@card>
          </vt@flex>
          <vt@flex xs6 v-for="i in 2" :key="i">
            <vt@card secondary>
              <vt@card-text class="vc@p-h--none">6</vt@card-text>
            </vt@card>
          </vt@flex>
          <vt@flex xs4 v-for="i in 3" :key="i">
            <vt@card primary>
              <vt@card-text class="vc@p-h--none">4</vt@card-text>
            </vt@card>
          </vt@flex>
          <vt@flex xs3 v-for="i in 4" :key="i">
            <vt@card secondary>
              <vt@card-text class="vc@p-h--none">3</vt@card-text>
            </vt@card>
          </vt@flex>
          <vt@flex xs2 v-for="i in 6" :key="i">
            <vt@card primary>
              <vt@card-text class="vc@p-h--none">2</vt@card-text>
            </vt@card>
          </vt@flex>
          <vt@flex xs1 v-for="i in 12" :key="i">
            <vt@card secondary>
              <vt@card-text class="vc@p-h--none">1</vt@card-text>
            </vt@card>
          </vt@flex>
        </vt@layout>
      </vt@container>
    </vt@page-section>

    <vt@page-section title id="offset" data-anchor-point>
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
    </vt@page-section>
  </vt@page>
</template>

<script>

export default {
  $_anchors,

  head() {
    return {
      title: 'Grid',
    }
  },

  data() {
    return {
    }
  },
}
</script>
