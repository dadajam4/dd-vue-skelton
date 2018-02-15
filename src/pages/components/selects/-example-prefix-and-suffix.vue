<style lang="scss" scoped>
</style>

<template>
  <docs-example title="Prefix &amp; suffix">
    <vt@select
      label="Ammount"
      prefix="$"
      :items="[100, 200, 300, 400, 500]"
    />

    <vt@select
      label="Email address"
      suffix="@gmail.com"
      :items="items"
    />
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      items: [
        'hogehoge',
        'fugafuga',
      ],
    }
  },
}
</script>