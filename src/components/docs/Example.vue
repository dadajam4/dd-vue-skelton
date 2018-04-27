<style lang="scss" scoped>
@import "core/index";

.my-description {
  @include font-size(sm);
  margin: get-space(md) 0;
}
</style>

<template>
  <vt@page-section :id="id">
    <h2 class="vc@page__section-header">
      <vt@icon>link</vt@icon>
      {{computedTitle}}
    </h2>
    <div v-if="$slots.description" class="my-description"><slot name="description" /></div>
    <vt@card>
      <vt@toolbar
        class="vc@elevation--0"
        background-color="light"
        text-color="grey-darken-1"
        dense
      >
<!--
        <vt@toolbar-title tag="h2">{{computedTitle}}</vt@toolbar-title>
-->
        <vt@spacer />
        <vt@tooltip-fragment>
          <vt@btn icon flat @click="sourceActive = !sourceActive">
            <vt@icon>code</vt@icon>
          </vt@btn>
          <vt@tooltip bottom>
            <span>View source</span>
          </vt@tooltip>
        </vt@tooltip-fragment>
      </vt@toolbar>
      <vt@accordion v-model="sourceActive">
        <vt@tabs class="my-source">
          <vt@tabs-item
            v-for="tab in tabs"
            :key="tab.name"
          >
            <vt@tabs-trigger>{{tab.name}}</vt@tabs-trigger>
            <vt@tabs-content>
              <docs-source
                :source="tab.source"
                :lang="tab.lang"
              />
            </vt@tabs-content>
          </vt@tabs-item>
        </vt@tabs>
      </vt@accordion>
      <vt@card-text>
        <slot />
      </vt@card-text>
    </vt@card>
  </vt@page-section>
</template>

<script>
import { capitalize } from '~/helpers';



const SETTINGS = [
  {key: 'template', lang: 'html'},
  {key: 'script'  , lang: 'js'  },
  {key: 'css'     , lang: 'scss'},
];

export default {
  name: 'docs-example',

  props: {
    id: String,
    title: String,
    template: String,
    script: String,
    css: String,
    source: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      sourceActive: false,
    }
  },

  computed: {
    computedTitle() { return this.title || capitalize(this.id.replace(/-/g, ' ')) },
    tabs() {
      const tabs = [];
      SETTINGS.forEach(setting => {
        if (this[setting.key]) {
          tabs.push({name: setting.key.toUpperCase(), lang: setting.lang, source: this[setting.key]});
        }
      });
      return tabs;
    },
  },
}
</script>
