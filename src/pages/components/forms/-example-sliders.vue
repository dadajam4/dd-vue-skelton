<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@slider
      step="0"
      label="モデルなし"
      name="slider0"
      :rules="[
        {rule: 'max_value:30', message: '30以内にしてね'},
      ]"
    ></vt@slider>

    <vt@slider
      v-model="slider1"
      step="0"
      :label="`モデルあり : ${slider1}`"
      :rules="[
        {rule: 'max_value:30', message: '30以内にしてね'},
      ]"
    ></vt@slider>

    <vt@slider v-model="slider2" step="0" label="label" disabled></vt@slider>
    <h3>Discrete</h3>
    <vt@slider v-model="slider3" label="label" thumb-label step="10" max="1000" ticks></vt@slider>

    <h3>Icons</h3>
    <vt@slider v-model="slider4" step="0" left-icon="user"></vt@slider>
    <vt@slider v-model="slider5" step="0" right-icon="user"></vt@slider>
  </docs-example>
</template>

<script>
export default {

  data() {
    return {
      slider1: 0,
      slider2: 0,
      slider3: 0,
      slider4: 0,
      slider5: 0,
    }
  },
}
</script>