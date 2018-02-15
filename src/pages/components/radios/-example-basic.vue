<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <vt@radio-group
      label="モデル無し"
      name="radio"
    >
      <vt@radio
        v-for="item in items"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </vt@radio-group>

    <vt@radio-group
      label="モデルあり"
      v-model="checked"
    >
      <vt@radio
        v-for="item in items"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </vt@radio-group>

    <pre><code>{{checked}}</code></pre>
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      checked: null,
      items: [
        {label: 'Radio 1', value: 'radio-1'},
        {label: 'Radio 2', value: 'radio-2'},
        {label: 'Radio 3', value: 'radio-3'},
      ],
    }
  },
}
</script>