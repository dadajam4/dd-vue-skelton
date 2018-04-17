<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      <code>vt@accordion-group</code> をを利用する事で複数の <code>vt@accordion</code> をグルーピングできます。<br>
      <code>styled</code> 属性を <code>vt@accordion-group</code> に設定した場合、子の <code>vt@accordion</code> に受け継がれます。<br>
      グループ内のアコーディオンはデフォルトではいずれか1つのみがアクティブとなるよう排他制御されます。<br>
      これをキャンセルするためには <code>exclusive</code> 属性に <var>false</var> を設定してください。<br>
      <code>vt@accordion-group</code> の中には <code>vt@accordion</code> 以外の要素も設置可能です。
    </template>

    <vt@accordion-group>
      <vt@accordion
        v-for="n in 3"
        :key="n"
      >
        <vt@accordion-title>Accordion {{n}}</vt@accordion-title>
        <p>This is {{n}}.</p>
      </vt@accordion>
    </vt@accordion-group>

    <vt@accordion-group styled>
      <vt@accordion
        v-for="n in 3"
        :key="n"
      >
        <vt@accordion-title primary>Accordion {{n}}</vt@accordion-title>
        <p>This is {{n}}.</p>
      </vt@accordion>
    </vt@accordion-group>

    <vt@accordion-group title-nowrap>
      <vt@accordion>
        <vt@accordion-title icon="cube">What is a dog?</vt@accordion-title>
        <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
      </vt@accordion>
      <vt@tile>
        <vt@tile-action>
          <vt@checkbox></vt@checkbox>
        </vt@tile-action>
        <vt@tile-content>
          タイル1つ分です
        </vt@tile-content>
      </vt@tile>
      <vt@accordion>
        <vt@accordion-title>What kinds of dogs are there?</vt@accordion-title>
        <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
      </vt@accordion>
    </vt@accordion-group>

  </docs-example>
</template>

<script>
export default {
}
</script>