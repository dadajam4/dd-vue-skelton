<style lang="scss" scoped>
.my-spinner {
  margin: 1rem;
}
</style>

<template>
  <div>
    <header class="vc@page-header">
      <h1 class="vc@page-header__inner vc@page__container">Progress</h1>
    </header>

    <main class="vc@page">
      <div class="vc@page__container">
        <p class="vc@page__introduction">Use our iOS integration to style your native iOS applications to be consistent with the <span>hogehoge</span></p>
      </div>

      <section id="default" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Default</h2>

        <div>
          <vt@spinner class="my-spinner" v-for="value in [0, 20, 40, 60, 80, 100]" :value="value" :key="value" />
        </div>
      </section>

      <section id="colored" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Colored</h2>

        <div>
          <vt@spinner class="my-spinner" v-for="color in TEXT_COLORS" :color="color" value="50" :key="color" />
        </div>
      </section>

      <section id="indeterminate" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Indeterminate</h2>

        <div>
          <vt@spinner class="my-spinner" v-for="color in TEXT_COLORS" :color="color" indeterminate :key="color" />
        </div>
      </section>

      <section id="size-and-width" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Size & Width</h2>

        <div>
          <vt@spinner class="my-spinner" color="base" indeterminate size="50" />
          <vt@spinner class="my-spinner" color="muted" indeterminate width="3" />
          <vt@spinner class="my-spinner" color="primary" indeterminate size="70" width="7" />
          <vt@spinner class="my-spinner" color="secondary" indeterminate width="3" />
          <vt@spinner class="my-spinner" color="info" indeterminate size="50" />
        </div>
      </section>

      <section id="rotate" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Rotate</h2>
        <div>
          <vt@spinner
            class="my-spinner"
            v-for="define in rotateDefines"
            :key="define.color"
            :rotate="define.rotate"
            :color="define.color"
            size="100"
            width="15"
            :value="rotateValue"
          >{{rotateValue}}</vt@spinner>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import themes from '~~/config/css/themes';

const TEXT_COLORS = themes['color-keys'].text;



export default {
  $_anchors,

  head() {
    return {
      title: 'Progress',
    }
  },

  data() {
    return {
      rotateInterval: {},
      rotateValue: 0,
      rotateDefines: [
        {color: 'base', rotate: 360},
        {color: 'primary', rotate: -90},
        {color: 'warning', rotate: 90},
        {color: 'error', rotate: 180},
      ],
    }
  },

  computed: {
    TEXT_COLORS() { return TEXT_COLORS },
  },

  methods: {
  },

  created() {
  },

  mounted() {
    this.rotateInterval = setInterval(() => {
      if (this.rotateValue === 100) return (this.rotateValue = 0);
      this.rotateValue += 10
    }, 1000);
  },

  beforeDestroy() {
    clearInterval(this.rotateInterval);
  },
}
</script>
