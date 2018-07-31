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
        <vt@input
          label="Search"
          type="search"
          v-model="search"
          :suggests="tags"
        >
          <vt@icon>search</vt@icon>
        </vt@input>
      </div>

      <vt@row justify-center>
        <vt@col
          v-for="icon in computedIcons"
          :key="icon.name"
          class="my-container"
        >
          <my-icon
            :name="icon.name"
            :label="icon.label"
          />
        </vt@col>
      </vt@row>
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
