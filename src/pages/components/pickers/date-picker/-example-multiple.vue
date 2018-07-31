<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
      <p>
        開始日、終了日からなる複数の日付を選択する事が可能です。<br>
        この時 <code>v-model</code> は初期値として空の配列である必要がある事に注意してください。<br>
        いかなる場合でもインデックス0に開始日、1に終了日が格納されますが、<br>
        emptyな状態では空の配列となります。つまり、インデックス0も1も <var>undefined</var> な状態が存在する事を忘れないでください。
      </p>

      <p>
        <code>multiple</code> で動作をさせる場合、ダイアログ等の補助となる fragment 機構は現在利用できません。<br>
        これは入力対象となる v-model を特定する実装を現時点で行っていない事が原因です。<br>
        ダイアログやメニューと連動した実装を行うためには <code>vt@menu</code> などを併用する必要があります。
      </p>
    </template>

    <pre><code>{{ picked }}</code></pre>

    <vt@row align-end>
      <vt@col col-12 col-sm-6>
      </vt@col>
      <vt@col col-12 col-sm-6>
      </vt@col>
    </vt@row>


    <vt@row align-end>
      <vt@col col-12 col-sm-6>
        <vt@input v-model="picked[0]">
          <vt@icon>calendar</vt@icon>
        </vt@input>
      </vt@col>
      <vt@col col-12 col-sm-6>
        <vt@input v-model="picked[1]">
          <vt@icon>calendar</vt@icon>
        </vt@input>
      </vt@col>
    </vt@row>

    <vt@date-picker
      multiple
      v-model="picked"
    />
  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      picked: [],
    }
  },
}
</script>
