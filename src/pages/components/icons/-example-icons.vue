<style lang="scss" scoped>
@import "core/index";

.my-container {
  flex-basis: 100px;
  max-width: 100px;
}

</style>

<template>
  <docs-example :source="false">
    <div>
      <div>
<!--
-->
        <vt@text-field
          label="Search"
          type="search"
          left-icon="search"
          v-model="search"
          :suggest="tags"
        ></vt@text-field>
      </div>

      <vt@container grid-list-md>
        <vt@layout row wrap justify-center>
          <vt@flex
            v-for="icon in computedIcons"
            :key="icon.name"
             class="my-container"
          >
            <my-icon
              :name="icon.name"
              :label="icon.label"
            />
          </vt@flex>
        </vt@layout>
      </vt@container>
    </div>
  </docs-example>
</template>

<script>
import iconInfo from '~/constants/icon';
import MyIcon from './-example-icon';



export default {
  components: {
    MyIcon,
  },

  data() {
    return {
      search: null,
      icons: iconInfo.icons.map(icon => { return {name: icon.name, label: icon.label, copied: false} }),
    }
  },
  computed: {
    tags() { return iconInfo.tags },
    computedIcons() {
      if (!this.search) return this.icons;
      return this.icons.filter(icon => icon.name.includes(this.search));
    },
  },
}
</script>