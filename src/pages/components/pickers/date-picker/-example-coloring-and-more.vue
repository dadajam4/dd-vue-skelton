<style lang="scss" scoped>
</style>

<template>
  <docs-example title="Coloring &amp; more">
    <template slot="description">
      いくつかのカラー設定や、表示オプションがあります。

      <dl>
        <dt>picked-color</dt>
        <dd>
          選択した日付のカラーを設定可能です。デフォルトは <var>primary</var> です。
        </dd>
      </dl>
      <dl>
        <dt>current-color</dt>
        <dd>
          現在の日付のカラーを設定可能です。デフォルトは <var>primary</var> です。
        </dd>
      </dl>
      <dl>
        <dt>show-current</dt>
        <dd>
          現在の日付を強調表示したくない場合、 <var>false</var> を指定します。
        </dd>
      </dl>
      <dl>
        <dt>show-fill-day</dt>
        <dd>
          現在の月からはみ出した日付を表示する場合、 <var>true</var> を指定します。
        </dd>
      </dl>
    </template>

    <div>
      <vt@switch
        v-model="showCurrent"
        :value="true"
      >show-current</vt@switch>
      <vt@switch
        v-model="showFillDay"
        :value="true"
      >show-fill-day</vt@switch>
    </div>

    <vt@date-picker
      cancellable
      picked-color="info"
      current-color="info"
      :show-current="showCurrent"
      :show-fill-day="showFillDay"
    />
  </docs-example>
</template>

<script>
export default {
  data() {
    const dt = new Date();
    return {
      picked: null,
      showCurrent: true,
      showFillDay: true,
    }
  },
}
</script>
