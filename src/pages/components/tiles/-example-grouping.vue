<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      <code>vt@tile-group</code> を利用する事で複数のタイルをグルーピングする事が可能です。<br>
      「グルーピングすると何がいいの？」ですが、たとえば各タイルの状態を vt@groupで一元的に設定可能です。具体的に設定できる項目は以下です。

      <ol>
        <li>区切り線（vt@divider） ※末尾の要素の区切り線は自動で非表示にします</li>
        <li>無効状態（disabled）</li>
        <li>改行許可（wrap）</li>
        <li>狭め設定（dense）</li>
      </ol>
    </template>

    <vt@tile-group divider>
      <vt@tile
        v-for="n in 3"
        :key="n"
      >
        <vt@tile-content>
          <vt@tile-title>タイル{{n}}</vt@tile-title>
        </vt@tile-content>
      </vt@tile>
    </vt@tile-group>

    <vt@tile-group divider disabled>
      <vt@tile
        v-for="n in 3"
        :key="n"
        href="https://www.google.co.jp/"
      >
        <vt@tile-content>
          <vt@tile-title>タイル{{n}}</vt@tile-title>
        </vt@tile-content>
      </vt@tile>
    </vt@tile-group>

    <vt@tile-group divider wrap dense>
      <vt@tile
        v-for="n in 3"
        :key="n"
      >
        <vt@tile-content>
          <vt@tile-title>タイル{{n}}ながーーーいテキストです。ながーーーいテキストです。ながーーーいテキストです。ながーーーいテキストです。</vt@tile-title>
          <vt@tile-sub-title>ながーーーいテキストです。ながーーーいテキストです。ながーーーいテキストです。ながーーーいテキストです。ながーーーいテキストです。ながーーーいテキストです。</vt@tile-sub-title>
          <vt@tile-text>ながーーーいテキストです。ながーーーいテキストです。ながーーーいテキストです。ながーーーいテキストです。ながーーーいテキストです。ながーーーいテキストです。ながーーーいテキストです。</vt@tile-text>
        </vt@tile-content>
      </vt@tile>
    </vt@tile-group>
  </docs-example>
</template>

<script>
export default {
}
</script>