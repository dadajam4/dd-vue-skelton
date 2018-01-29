<style lang="scss" scoped>
@import "core/index";

.my-icon {
  &-container {
    flex-basis: 100px;
    max-width: 100px;
  }

  @include btn-style-reset($display: block);
  user-select: auto;

  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 2px;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transition: get-transition(primary);
  text-align: center;

  &__icon {
    transition: get-transition(primary);
    padding: 10px;
    border-radius: 2px 2px 0 0;
  }

  &__node {
  }

  &__label {
    @include font-size(xs);
    padding: 10px 5px;
    padding-top: 5px;
  }

  &:hover,
  &:focus {
    .my-icon__icon {
      @include theme-color(background, background-light);
    }

    .my-icon__node {
      transform: scale(1.8);
    }
  }

  &--copied {
    @include elevation(2);

    &,
    &:hover,
    &:focus {
      .my-icon__icon {
        @include theme-color(background, background-primary);
        @include theme-color(color, text-inverted);
      }
    }
  }
}

.my-copied {
  position: absolute;
  @include theme-color(background, background-darken);
  @include theme-color(color, text-inverted);
  @include elevation(2);
  @include font-size(xs);
  border-radius: 2px;
  right: 0px;
  top: -10px;
  padding: 0 5px;
  pointer-events: none;
  opacity: 0;
  transition: get-transition(primary);

  .my-icon--copied & {
    opacity: 1;
    right: -10px;
  }
}
</style>

<template>
  <docs-example>
    <div>
      <div>
<!--
          :suggest="tags"
-->
        <vt@text-field
          label="Search"
          type="search"
          left-icon="search"
          v-model="search"
        ></vt@text-field>
      </div>

      <vt@container grid-list-md>
        <vt@layout row wrap justify-start>
          <vt@flex
            v-for="icon in computedIcons"
            :key="icon.name"
             class="my-icon-container"
          >
            <div
              class="my-icon"
              :class="{'my-icon--copied': icon.copied}"
              tabindex="0"
              @click="copy(icon)"
              @keyup.enter="copy(icon)"
            >
              <div class="my-icon__icon"><vt@icon class="my-icon__node">{{icon.name}}</vt@icon></div>
              <div class="my-icon__label" :ref="`copy-${icon.name}`">{{icon.name}}</div>
              <div class="my-copied">Copied</div>
            </div>
          </vt@flex>
        </vt@layout>
      </vt@container>
    </div>
  </docs-example>
</template>

<script>
import fontInfo from '~/assets/css/.tmp/dd-icon/dd-icon.json';



const icons = fontInfo.glyphs.map(glyph => glyph.name);
const tags = [];
icons.forEach(icon => {
  const tmp = icon.split('-');
  tmp.forEach(tag => {
    if (tag.length > 2 && !tags.includes(tag)) tags.push(tag);
  });
});



export default {
  data() {
    return {
      search: null,
      icons: icons.map(icon => { return {name: icon, copied: false} }),
    }
  },
  computed: {
    tags() { return tags },
    computedIcons() {
      if (!this.search) return this.icons;
      return this.icons.filter(icon => icon.name.includes(this.search));
    },
  },
  methods: {
    copy(icon, e) {
      this.clearTimer(icon);

      try {
        const $copy = this.$refs[`copy-${icon.name}`][0];
        const range = document.createRange();
        range.selectNode($copy);

        const selection = getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');

        icon.copied = setTimeout(() => {
          this.clearTimer(icon);
        }, 2000);
      } catch(e) {
      }
    },
    clearTimer(icon) {
      if (typeof icon.copied !== 'boolean') {
        clearTimeout(icon.copied);
        icon.copied = false;
      }
    },
  },
}
</script>