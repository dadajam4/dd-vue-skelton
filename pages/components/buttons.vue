<style lang="scss" scoped>
</style>

<template>
  <div>
    <header class="vc@page-header">
      <h1 class="vc@page-header__inner vc@page__container">Buttons</h1>
    </header>

    <main class="vc@page">
      <div class="vc@page__container">
        <p class="vc@page__introduction">Use our iOS integration to style your native iOS applications to be consistent with the <span>hogehoge</span></p>
      </div>

      <section id="hoge" class="vc@page__section vc@page__container" data-anchor-point>
        <h2>Flat</h2>
        <vt@btn
          v-for="type in CONTEXT_TYPES"
          :key="type"
          v-bind="{[type]: true}"
          flat
        >{{type}}</vt@btn>

        <h2>Fill</h2>
        <vt@btn
          v-for="type in CONTEXT_TYPES"
          :key="type"
          v-bind="{[type]: true}"
        >{{type}}</vt@btn>

        <h2>Outline</h2>
        <vt@btn
          v-for="type in CONTEXT_TYPES"
          :key="type"
          v-bind="{[type]: true}"
          outline
        >{{type}}</vt@btn>

        <h2>Block</h2>
        <vt@btn primary block>Block</vt@btn>

        <h2>Size</h2>
        <vt@btn
          v-for="size in ['sm', 'default', 'lg']"
          :key="size"
          v-bind="{[size]: true}"
          info
        >{{size}}</vt@btn>

        <h2>Icon</h2>
        <vt@btn
          v-for="size in ['sm', 'default', 'lg']"
          :key="size"
          v-bind="{[size]: true}"
          icon
        ><vt@icon>bars</vt@icon></vt@btn>

        <vt@btn
          v-for="size in ['sm', 'default', 'lg']"
          :key="size"
          v-bind="{[size]: true}"
          icon
          primary
        ><vt@icon>bars</vt@icon></vt@btn>

        <vt@btn
          v-for="size in ['sm', 'default', 'lg']"
          :key="size"
          v-bind="{[size]: true}"
          icon
          outline
          info
        ><vt@icon>bars</vt@icon></vt@btn>

        <h2>Includes icon</h2>
        <vt@btn
          primary
        >
          <vt@icon left>address-book</vt@icon>
          left
        </vt@btn>

        <vt@btn
          info
        >
          right
          <vt@icon right>cloud-upload</vt@icon>
        </vt@btn>

        <vt@btn
          info
        >
          <vt@icon left>code</vt@icon>
          both
          <vt@icon right>comments</vt@icon>
        </vt@btn>

        <h2>Disabled</h2>
        <vt@btn
          v-for="type in ['flat', 'default', 'outline']"
          :key="type"
          v-bind="{[type]: true}"
          info
          disabled
        >{{type}}</vt@btn>
        <vt@btn
          icon
          disabled
        ><vt@icon>bars</vt@icon></vt@btn>
      </section>
    </main>
  </div>
</template>

<script>
import Contextualable from '../../plugins/ui/mixins/contextualable';



const CONTEXT_TYPES = Object.keys(Contextualable.props);



export default {
  head() {
    return {
      title: 'Button',
    }
  },

  data() {
    return {
    }
  },

  computed: {
    CONTEXT_TYPES() { return CONTEXT_TYPES },
  },

  created() {
  },
}
</script>
