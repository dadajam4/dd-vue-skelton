<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Buttons</vt@page-header>
    <vt@page-intro>
      Use our iOS integration to style your native iOS applications to be consistent with the <span>hogehoge</span>
    </vt@page-intro>

    <vt@page-section title id="flat" data-anchor-point>
      <vt@btn
        v-for="myType in CONTEXT_TYPES"
        :key="myType"
        v-bind="{[myType]: true}"
        flat
      >{{myType}}</vt@btn>
    </vt@page-section>

    <vt@page-section title id="fill" data-anchor-point>
      <vt@btn
        v-for="myType in CONTEXT_TYPES"
        :key="myType"
        v-bind="{[myType]: true}"
      >{{myType}}</vt@btn>
    </vt@page-section>

    <vt@page-section title id="outline" data-anchor-point>
      <vt@btn
        v-for="myType in CONTEXT_TYPES"
        :key="myType"
        v-bind="{[myType]: true}"
        outline
      >{{myType}}</vt@btn>
    </vt@page-section>

    <vt@page-section title id="color" data-anchor-point>
      <vt@btn layer-color="indigo" class="vc@text--shades-white">indigo</vt@btn>
      <vt@btn layer-color="brown-lighten-2" class="vc@text--shades-white">brown-lighten-2</vt@btn>
      <vt@btn layer-color="deep-orange" class="vc@text--shades-white">deep-orange</vt@btn>
      <vt@btn layer-color="indigo" outline>indigo</vt@btn>
      <vt@btn layer-color="brown-lighten-2" outline>brown-lighten-2</vt@btn>
      <vt@btn layer-color="deep-orange" outline>deep-orange</vt@btn>
    </vt@page-section>

    <vt@page-section title id="block" data-anchor-point>
      <vt@btn primary block>Block</vt@btn>
    </vt@page-section>

    <vt@page-section title id="size" data-anchor-point>
      <vt@btn
        v-for="size in ['sm', 'default', 'lg']"
        :key="size"
        v-bind="{[size]: size !== 'default'}"
        info
      >{{size}}</vt@btn>
    </vt@page-section>

    <vt@page-section title id="icon" data-anchor-point>
      <vt@btn
        v-for="size in ['sm', 'default', 'lg']"
        :key="size"
        v-bind="{[size]: size !== 'default'}"
        icon
      ><vt@icon>bars</vt@icon></vt@btn>

      <vt@btn
        v-for="size in ['sm', 'default', 'lg']"
        :key="size"
        v-bind="{[size]: size !== 'default'}"
        icon
        primary
      ><vt@icon>bars</vt@icon></vt@btn>

      <vt@btn
        v-for="size in ['sm', 'default', 'lg']"
        :key="size"
        v-bind="{[size]: size !== 'default'}"
        icon
        outline
        info
      ><vt@icon>bars</vt@icon></vt@btn>
    </vt@page-section>

    <vt@page-section title id="includes-icon" data-anchor-point>
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
    </vt@page-section>

    <vt@page-section title id="disabled" data-anchor-point>
      <vt@btn
        v-for="myType in ['flat', 'default', 'outline']"
        :key="myType"
        v-bind="{[myType]: myType !== 'default'}"
        info
        disabled
      >{{myType}}</vt@btn>
      <vt@btn
        icon
        disabled
      ><vt@icon>bars</vt@icon></vt@btn>
    </vt@page-section>

    <vt@page-section title id="loaders" data-anchor-point>
      <vt@btn
        secondary
        :loading="loading1"
        :disabled="loading1"
        @click="startLoading('loading1')"
      >
        Accept Terms
      </vt@btn>

      <vt@btn
        primary
        :loading="loading2"
        :disabled="loading2"
        @click="startLoading('loading2')"
      >
        <vt@icon left>address-book</vt@icon>
        left
      </vt@btn>

      <vt@btn
        info
        :loading="loading3"
        :disabled="loading3"
        @click="startLoading('loading3')"
      >
        Custom Loader
        <span slot="loader">Loading...</span>
      </vt@btn>

      <vt@btn
        warning
        :loading="loading4"
        :disabled="loading4"
        @click="startLoading('loading4')"
      >
        Icon Loader
        <span slot="loader">
          <vt@icon rotate>refresh</vt@icon>
        </span>
      </vt@btn>
    </vt@page-section>
  </vt@page>
</template>

<script>
import themes from '~~/config/css/themes';



const CONTEXT_TYPES = themes['color-keys'].context;



export default {
  $_anchors,

  head() {
    return {
      title: 'Button',
    }
  },

  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      loading4: false,
    }
  },

  computed: {
    CONTEXT_TYPES() { return CONTEXT_TYPES },
  },

  methods: {
    startLoading(key) {
      this[key] = true;
      setTimeout(() => (this[key] = false), 3000);
    },
  },

  created() {
  },
}
</script>
