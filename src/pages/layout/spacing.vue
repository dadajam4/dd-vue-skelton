<style lang="scss" scoped>

.my__container {
  overflow: hidden;
}
</style>

<template>
  <vt@page>
    <vt@page-header>Spacing</vt@page-header>
    <vt@page-intro>
      Use our iOS integration to style your native iOS applications to be consistent with the <span>hogehoge</span>
    </vt@page-intro>

    <vt@page-section title id="margin" data-anchor-point>
      <div class="my__container vc@context-color--secondary">
        <template v-for="direction in DIRECTIONS">
          <div
            v-for="space in SPACES"
            :key="space.key"
            :class="`vc@context-color--primary vc@m-${direction.key}--${space.key}`"
          >{{`vc@m-${direction.key}--${space.key}`}}</div>
        </template>
      </div>
    </vt@page-section>

    <vt@page-section title id="padding" data-anchor-point>
      <div>
        <template v-for="direction in DIRECTIONS">
          <div
            v-for="space in SPACES"
            :key="space.key"
            :class="`my__container vc@p-${direction.key}--${space.key}`"
          ><div class="my__div">{{`vc@p-${direction.key}--${space.key}`}}</div></div>
        </template>
      </div>
    </vt@page-section>
  </vt@page>
</template>

<script>
const DIRECTIONS = [
  {key: 't', props: ['top']},
  {key: 'r', props: ['right']},
  {key: 'b', props: ['bottom']},
  {key: 'l', props: ['left']},
  {key: 'v', props: ['top', 'bottom']},
  {key: 'h', props: ['left', 'right']},
  {key: 'a', props: ['top', 'bottom', 'left', 'right']},
];

const SPACES = [
  {key: 'none', rem: 0    },
  {key: 'xxxs', rem: 0.125},
  {key: 'xxs' , rem: 0.25 },
  {key: 'xs'  , rem: 0.5  },
  {key: 'sm'  , rem: 0.75 },
  {key: 'md'  , rem: 1    },
  {key: 'lg'  , rem: 1.5  },
  {key: 'xl'  , rem: 2    },
  {key: 'xxl' , rem: 3    },
];

export default {
  $_anchors,

  head() {
    return {
      title: 'Spacing',
    }
  },

  data() {
    return {
    }
  },

  computed: {
    DIRECTIONS: () => DIRECTIONS,
    SPACES: () => SPACES,
  },
}
</script>
