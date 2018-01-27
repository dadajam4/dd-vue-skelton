<style lang="scss" scoped>
@import "core/index";

.my-btn {
  transition: get-transition(primary);

  &:hover,
  &:focus {
    @include theme-color(background, background);
    transform: scale(2);
    @include elevation(2);
  }
}
</style>

<template>
  <docs-example>
    <div>
      <div>
        <vt@text-field
          label="Search"
          type="search"
          left-icon="search"
          :suggest="tags"
          v-model="search"
        ></vt@text-field>
      </div>
      <vt@tooltip
        bottom
        icon
        v-for="icon in computedIcons"
        :key="icon"
      >
        <vt@btn class="my-btn" icon slot="activator">
          <vt@icon class="my-icon">{{icon}}</vt@icon>
        </vt@btn>
        <span>{{icon}}</span>
      </vt@tooltip>
    </div>
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      search: null,
    }
  },
  computed: {
    icons() { return $docs.icons },
    tags() {
      const icons = this.icons.slice();
      icons.forEach(icon => {
        const tags = icon.split('-');
        tags.forEach(tag => {
          if (tag.length > 1 && !icons.includes(tag)) icons.push(tag);
        });
      });
      return icons;
    },
    computedIcons() {
      if (!this.search) return this.icons;
      return this.icons.filter(icon => icon.includes(this.search));
    },
  },
}
</script>