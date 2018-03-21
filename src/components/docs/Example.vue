<style lang="scss" scoped>
@import "core/index";

.my-source {
  transition: get-transition(primary);
}

</style>

<template>
  <vt@page-section :id="id">
    <vt@card>
      <vt@toolbar secondary>
        <vt@toolbar-title tag="h2">{{computedTitle}}</vt@toolbar-title>
        <vt@spacer />
        <vt@tooltip-fragment>
          <vt@btn icon @click="sourceActive = !sourceActive">
            <vt@icon>code</vt@icon>
          </vt@btn>
          <vt@tooltip bottom>
            <span>View source</span>
          </vt@tooltip>
        </vt@tooltip-fragment>
      </vt@toolbar>
      <vt@expand-transition v-if="source">
        <vt@tabs class="my-source" v-if="sourceActive">
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
      </vt@expand-transition>
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
