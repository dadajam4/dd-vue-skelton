<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Chips</vt@page-header>
    <vt@page-intro>
      ほげほげ
    </vt@page-intro>

    <vt@page-section title id="default" data-anchor-point>
      <vt@chip close>Example Chip</vt@chip>
      <vt@chip>Example Chip</vt@chip>
      <vt@chip close>
        <vt@avatar class="vc@background-color--shades-white">
          <img src="~/assets/img/avatar/boy_1.png" alt="trevor">
        </vt@avatar>
        Trevor Hansen
      </vt@chip>
      <vt@chip close>
        <vt@avatar background-color="teal">A</vt@avatar>
        ANZ Bank
      </vt@chip>
    </vt@page-section>

    <vt@page-section title id="colored" data-anchor-point>
      <vt@chip close primary>Primary</vt@chip>
      <vt@chip close secondary>Secondary</vt@chip>
      <vt@chip close error>Error</vt@chip>
      <vt@chip close background-color="teal" text-color="red">Error</vt@chip>
    </vt@page-section>

    <vt@page-section title id="icon" data-anchor-point>
      <vt@chip>
        <vt@avatar>
          <vt@icon>user-circle</vt@icon>
        </vt@avatar>
        Ranee
      </vt@chip>
      <vt@chip>
        Premium
        <vt@icon right>star</vt@icon>
      </vt@chip>
      <vt@chip>
        1 Year
        <vt@icon right>birthday-cake</vt@icon>
      </vt@chip>
      <vt@chip background-color="green" text-color="shades-white">
        <vt@avatar background-color="green-darken-4">1</vt@avatar>
        Year
      </vt@chip>
      <vt@chip close>
        <vt@avatar>
          <vt@icon>check-circle</vt@icon>
        </vt@avatar>
        Ranee
      </vt@chip>
    </vt@page-section>

    <vt@page-section title id="outline" data-anchor-point>
      <vt@chip close outline>Outline</vt@chip>
      <vt@chip close outline primary>Colored</vt@chip>
      <vt@chip close outline warning>
        <vt@avatar>
          <vt@icon>user-circle</vt@icon>
        </vt@avatar>
        Icon
      </vt@chip>
    </vt@page-section>

    <vt@page-section title id="label" data-anchor-point>
      <vt@chip label>Label</vt@chip>
      <vt@chip label background-color="pink" text-color="shades-white">
        <vt@icon left>tag</vt@icon>
        Tags
      </vt@chip>
      <vt@chip label outline warning>Outline</vt@chip>
    </vt@page-section>

    <vt@page-section title id="closable" data-anchor-point>
      <div class="vc@text--center">
        <vt@btn
          info
          @click="chip1 = true, chip2 = true, chip3 = true, chip4 = true"
          v-if="!chip1 || !chip2 || !chip3 || !chip4"
        >reset</vt@btn>
      </div>
      <vt@chip close v-model="chip1">Closable</vt@chip>
      <vt@chip close v-model="chip2" error>Remove</vt@chip>
      <vt@chip close v-model="chip3" success>Success</vt@chip>
      <vt@chip close v-model="chip4" warning>Comprete</vt@chip>
    </vt@page-section>

    <vt@page-section title id="sizing" data-anchor-point>
      <vt@chip sm>
        <vt@avatar>
          <vt@icon>user-circle</vt@icon>
        </vt@avatar>
        Ranee
      </vt@chip>
      <vt@chip sm>
        Premium
        <vt@icon right>star</vt@icon>
      </vt@chip>
      <vt@chip sm>
        1 Year
        <vt@icon right>birthday-cake</vt@icon>
      </vt@chip>
      <vt@chip background-color="green" text-color="shades-white" sm>
        <vt@avatar background-color="green-darken-4">1</vt@avatar>
        Year
      </vt@chip>
      <vt@chip close sm>
        <vt@avatar>
          <vt@icon>check-circle</vt@icon>
        </vt@avatar>
        Ranee
      </vt@chip>
    </vt@page-section>

  </vt@page>
</template>

<script>
export default {
  $_anchors,

  head() {
    return {
      title: 'Chips',
    }
  },

  data() {
    return {
      chip1: true,
      chip2: true,
      chip3: true,
      chip4: true,
    }
  },

  computed: {
  },

  methods: {
  },

  created() {
  },
}
</script>
