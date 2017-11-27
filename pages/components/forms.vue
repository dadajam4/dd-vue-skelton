<style lang="scss" scoped>
</style>

<template>
  <div>
    <header class="vc@page-header">
      <h1 class="vc@page-header__inner vc@page__container">Forms</h1>
    </header>

    <main class="vc@page">
      <div class="vc@page__container">
        <p class="vc@page__introduction">Use our iOS integration to style your native iOS applications to be consistent with the <span>hogehoge</span></p>
      </div>

<!--
      <section>
        <h2>Text Fields</h2>
        <div v-for="type in INPUT_TYPES" :key="type">
          <vt@text-field
            :type="type"
            :label="type"
            :name="`input_type_${type}`"
            :placeholder="type"
            v-model="inputType[type]"
          ></vt@text-field>
          <p>{{inputType[type]}}</p>
        </div>
      </section>
-->

      <section id="textfields" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Text fields</h2>

        <vt@text-field
          label="氏名"
          name="input_1"
          placeholder="田中　太郎"
          hint="3文字以上、5文字以内で入力してください"
          counter="10"
          :rules="[
            {rule: 'min:3', message: '3文字以上にしてね'},
            {rule: 'max:5', message: '5文字以内にしてね'},
          ]"
        ></vt@text-field>

        <vt@text-field
          label="文章"
          type="textarea"
          name="input_2"
          placeholder="プレースホルダ"
          hint="100文字以内で入力してください"
          counter="10"
          :rules="[
            {rule: 'max:100', message: '100文字以内にしてね'},
          ]"
        ></vt@text-field>

        <vt@text-field
          label="Ammount"
          prefix="$"
        ></vt@text-field>

        <vt@text-field
          label="Email address"
          suffix="@gmail.com"
        ></vt@text-field>

        <vt@text-field
          label="Phone number"
          left-icon="phone"
        ></vt@text-field>

        <vt@text-field
          label="Phone number"
          right-icon="phone"
        ></vt@text-field>

        <vt@text-field
          label="Search"
          type="search"
          left-icon="search"
          :suggest="[
            'サジェスト1',
            '長ーいサジェスト2です。長ーいサジェスト2です。長ーいサジェスト2です。長ーいサジェスト2です。長ーいサジェスト2です。長ーいサジェスト2です。',
            'サジェスト3',
          ]"
        ></vt@text-field>

        <vt@text-field
          label="Search"
          type="search"
          left-icon="search"
        >
          <vt@btn slot="leftBtn" primary outline>左ボタン</vt@btn>
        </vt@text-field>

        <vt@text-field
          label="Search"
          type="search"
          left-icon="search"
          :suggest="[
            'サジェスト1',
            '長ーいサジェスト2です。長ーいサジェスト2です。長ーいサジェスト2です。長ーいサジェスト2です。長ーいサジェスト2です。長ーいサジェスト2です。',
            'サジェスト3',
          ]"
        >
          <vt@btn slot="rightBtn" primary icon><vt@icon>search</vt@icon></vt@btn>
        </vt@text-field>

        <vt@text-field
          label="Comment"
          type="textarea"
        >
          <vt@btn slot="leftBtn" secondary><vt@icon>upload</vt@icon></vt@btn>
        </vt@text-field>
      </section>

      <section id="checkboxes" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Checkboxes</h2>
        <vt@checkbox
          label="modelなし"
          light
          value="aaa"
          name="checkbox1"
          :rules="[
            {rule: 'required', message: 'この項目は必須だよ'},
          ]"
        ></vt@checkbox>

        <vt@checkbox
          :label="`modelあり: ${checkbox1 === null ? 'null' : checkbox1.toString()}`"
          v-model="checkbox1"
          light
          value="checked"
          :rules="[
            {rule: 'required', message: 'この項目は必須だよ'},
          ]"
        ></vt@checkbox>

        <h3>Array</h3>
        <div>{{checkbox2}}</div>
        <vt@checkbox
          label="太郎"
          v-model="checkbox2"
          light
          value="太郎"
        ></vt@checkbox>

        <vt@checkbox
          label="花子"
          v-model="checkbox2"
          light
          value="花子"
        ></vt@checkbox>

        <h3>States</h3>
        <vt@checkbox input-value="true" value label="on"></vt@checkbox>
        <vt@checkbox value label="off"></vt@checkbox>
        <vt@checkbox value indeterminate label="indeterminate"></vt@checkbox>
        <vt@checkbox input-value="true" value disabled label="on disabled"></vt@checkbox>
        <vt@checkbox value disabled label="off disabled"></vt@checkbox>
      </section>

      <section id="radios" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Radios</h2>

        <h3>モデル無し</h3>
        <vt@radio-group name="radio1">
          <vt@radio label="Radio 1" value="radio-1"></vt@radio>
          <vt@radio label="Radio 2" value="radio-2"></vt@radio>
        </vt@radio-group>

        <h3>モデル有り</h3>
        <p>&gt;&gt;&gt; {{radio1}}</p>
        <vt@radio-group v-model="radio1" row>
          <vt@radio label="Radio 1" value="radio-1"></vt@radio>
          <vt@radio label="Radio 2" value="radio-2"></vt@radio>
          <vt@radio label="Radio 3" value="radio-3"></vt@radio>
          <vt@radio label="Radio 4" value="radio-4"></vt@radio>
          <vt@radio label="Radio 5" value="radio-5"></vt@radio>
          <vt@radio label="Radio 6" value="radio-6"></vt@radio>
          <vt@radio label="Radio 7" value="radio-7"></vt@radio>
          <vt@radio label="Radio 8" value="radio-8"></vt@radio>
          <vt@radio label="Radio 9" value="radio-9"></vt@radio>
          <vt@radio label="Radio 10" value="radio-10"></vt@radio>
        </vt@radio-group>

        <h3>状態</h3>
        <vt@radio-group name="radio2" disabled>
          <vt@radio label="Radio 1" value="radio-1"></vt@radio>
          <vt@radio label="Radio 2" value="radio-2"></vt@radio>
        </vt@radio-group>
      </section>

      <section id="selects" class="vc@page__section vc@page__container" data-anchor-point>
        <h2 class="vc@page__section-header">Selects</h2>

        <h3>モデルなし。option直書き</h3>
        <vt@select name="dummy-select-name">

          <vt@option v-for="item in selectItems" :key="item.value" :value="item.value">{{item.content}}</vt@option>
        </vt@select>

        <h3>モデルあり。props渡し</h3>
        <p>&gt;&gt;&gt; {{selectItems.filter(item => item.value === select1)[0] || '未選択'}}</p>
        <vt@select v-model="select1" :items="selectItems"></vt@select>

        <h3>複数選択</h3>
        <p>&gt;&gt;&gt; {{select2}}</p>
        <vt@select v-model="select2" :items="selectItems" multiple></vt@select>
      </section>
    </main>
  </div>
</template>

<script>
const INPUT_TYPES = [
  'text',
  'search',
  'tel',
  'url',
  'email',
  'password',
  'number',
  'datetime',
  'date',
  'month',
  'week',
  'time',
  'datetime-local',
];


export default {
  head() {
    return {
      title: 'Forms',
    }
  },

  data() {
    return {
      inputType: {},
      hoge: '',
      checkbox1: null,
      checkbox2: [],
      radio1: null,
      select1: null,
      select2: [],
      selectItems: [
        {content: '選択肢1', value: 1},
        {content: '選択肢2', value: 2},
        {content: '選択肢3', value: 3},
        {content: 'これは長い項目です', value: 4},
        {content: '選択肢5', value: 5},
      ],
    }
  },

  computed: {
    INPUT_TYPES() { return INPUT_TYPES },
  },

  created() {
    INPUT_TYPES.forEach(type => {
      this.$set(this.inputType, type, null);
    });
  },
}
</script>
