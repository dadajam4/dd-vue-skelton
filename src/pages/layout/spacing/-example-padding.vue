<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <div>
      <template v-for="direction in DIRECTIONS">
        <div
          v-for="space in SPACES"
          :key="space.key"
          :class="`vc@secondary vc@mt-sm vc@p${direction.key}-${space.key}`"
        ><div class="my__div vc@primary">{{`vc@p${direction.key}-${space.key}`}}</div></div>
      </template>
    </div>
  </docs-example>
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

  computed: {
    DIRECTIONS: () => DIRECTIONS,
    SPACES: () => SPACES,
  },
}
</script>
