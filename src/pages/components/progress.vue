<style lang="scss" scoped>
.my-spinner {
  margin: 1rem;
}
</style>

<template>
  <vt@page>
    <vt@page-header>Progress</vt@page-header>
    <vt@page-intro>
      Use our iOS integration to style your native iOS applications to be consistent with the <span>hogehoge</span>
    </vt@page-intro>

    <vt@page-section title id="default" data-anchor-point>
      <div>
        <vt@spinner class="my-spinner" v-for="value in [0, 20, 40, 60, 80, 100]" :value="value" :key="value" />
      </div>
    </vt@page-section>

    <vt@page-section title id="colored" data-anchor-point>
      <div>
        <vt@spinner class="my-spinner" v-for="color in TEXT_COLORS" :text-color="color" value="50" :key="color" />
      </div>
    </vt@page-section>

    <vt@page-section title id="indeterminate" data-anchor-point>
      <div>
        <vt@spinner class="my-spinner" v-for="color in TEXT_COLORS" :text-color="color" indeterminate :key="color" />
      </div>
    </vt@page-section>

    <vt@page-section title="Size &amp; Width" id="size-and-width" data-anchor-point>
      <div>
        <vt@spinner class="my-spinner" text-color="base" indeterminate size="50" />
        <vt@spinner class="my-spinner" text-color="muted" indeterminate width="3" />
        <vt@spinner class="my-spinner" text-color="primary" indeterminate size="70" width="7" />
        <vt@spinner class="my-spinner" text-color="secondary" indeterminate width="3" />
        <vt@spinner class="my-spinner" text-color="info" indeterminate size="50" />
      </div>
    </vt@page-section>

    <vt@page-section title id="rotate" data-anchor-point>
      <div>
        <vt@spinner
          class="my-spinner"
          v-for="define in rotateDefines"
          :key="define.color"
          :rotate="define.rotate"
          :text-color="define.color"
          size="100"
          width="15"
          :value="rotateValue"
        >{{rotateValue}}</vt@spinner>
      </div>
    </vt@page-section>
  </vt@page>
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
