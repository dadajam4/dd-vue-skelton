<style lang="scss" scoped>
</style>

<template>
  <div>
    <header class="vc@page-header">
      <h1 class="vc@page-header__inner vc@page__container">Grid</h1>
    </header>

    <main class="vc@page">
      <div class="vc@page__container">
        <p class="vc@page__introduction">Use our iOS integration to style your native iOS applications to be consistent with the <span>hogehoge</span></p>
      </div>

      <section id="grid" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Grid</h2>

        <vt@container grid-list-md text-xs-center>
          <vt@layout row wrap text--center>
            <vt@flex xs12>
              <vt@card class="vc@primary">
                <vt@card-text class="vc@p-h--none">12</vt@card-text>
              </vt@card>
            </vt@flex>
            <vt@flex xs6 v-for="i in 2" :key="i">
              <vt@card class="vc@secondary">
                <vt@card-text class="vc@p-h--none">6</vt@card-text>
              </vt@card>
            </vt@flex>
            <vt@flex xs4 v-for="i in 3" :key="i">
              <vt@card class="vc@primary">
                <vt@card-text class="vc@p-h--none">4</vt@card-text>
              </vt@card>
            </vt@flex>
            <vt@flex xs3 v-for="i in 4" :key="i">
              <vt@card class="vc@secondary">
                <vt@card-text class="vc@p-h--none">3</vt@card-text>
              </vt@card>
            </vt@flex>
            <vt@flex xs2 v-for="i in 6" :key="i">
              <vt@card class="vc@primary">
                <vt@card-text class="vc@p-h--none">2</vt@card-text>
              </vt@card>
            </vt@flex>
            <vt@flex xs1 v-for="i in 12" :key="i">
              <vt@card class="vc@secondary">
                <vt@card-text class="vc@p-h--none">1</vt@card-text>
              </vt@card>
            </vt@flex>
          </vt@layout>
        </vt@container>
      </section>

      <section id="offset" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Offset</h2>

        <vt@container grid-list-xl text-xs-center>
          <vt@layout row wrap text--center>
            <vt@flex xs10 offset-xs1>
              <vt@card dark class="vc@primary">
                <vt@card-text>xs10 offset-xs1</vt@card-text>
              </vt@card>
            </vt@flex>
            <vt@flex xs7 offset-xs0 offset-md2 offset-lg5>
              <vt@card dark class="vc@success">
                <vt@card-text>xs7 offset-xs5</vt@card-text>
              </vt@card>
            </vt@flex>
            <vt@flex xs12 sm5 md2>
              <vt@card dark class="vc@info">
                <vt@card-text>xs5</vt@card-text>
              </vt@card>
            </vt@flex>
            <vt@flex xs12 sm5 md3 offset-xs2 offset-lg2>
              <vt@card dark class="vc@warning">
                <vt@card-text>xs5 offset-xs2</vt@card-text>
              </vt@card>
            </vt@flex>
          </vt@layout>
        </vt@container>
      </section>

    </main>
  </div>
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
