<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Grid</vt@page-header>
    <vt@page-intro>
      Use our iOS integration to style your native iOS applications to be consistent with the <span>hogehoge</span>
    </vt@page-intro>

    <vt@page-section title id="grid" data-anchor-point>
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

  // asyncData(context) {
  //   console.log(context);
  // },

  mounted() {
    // console.warn(this.$options);
    // console.warn(this.$parent.$options.head());
    // console.warn(Object.keys(this.$vnode));
    // console.warn(this.$vnode.children);
    console.log(this.$el);
  },

  beforeMount() {
    console.log(this.$el);
  },

  destroyed() {
    console.warn(this);
  },
}
</script>
