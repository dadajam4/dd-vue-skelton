<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>テスト</vt@page-header>
    <vt@page-intro>
      これはページのイントロダクションです。これはページのイントロダクションです。これはページのイントロダクションです。
    </vt@page-intro>

<!--
    <vt@combobox
      :selected="comboselect1"
      @change="comboselect1 = $event"
      select
      placeholder="コンボ-選択-単一"
    >
      <vt@optgroup>
        <vt@optgroup-label>ラベル1</vt@optgroup-label>
        <vt@option value="1">セレクト1</vt@option>
        <vt@option value="2">セレクト2</vt@option>
      </vt@optgroup>
      <vt@optgroup
        label="Label 2"
        :options="[
          {value: '3', label: 'セレクト3'},
          {value: '4', label: 'セレクト4'},
          {value: '5', label: 'セレクト5'},
        ]"
      />
    </vt@combobox>

    <vt@combobox
      :selected="comboselect2"
      @change="comboselect2 = $event"
      select
      multiple
      placeholder="コンボ-選択-複数"
    >
      <vt@btn primary icon="search" @click="hoge"></vt@btn>

      <vt@option value="1">項目1</vt@option>
      <vt@option value="2">項目2</vt@option>
      <vt@option value="3">項目3</vt@option>
    </vt@combobox>
-->

<!--
    <p>{{input1}}</p>
    <vt@combobox
      sm
      v-model="input1"
      placeholder="プレースホルダ"
    >
      <vt@icon>search</vt@icon>
      <vt@btn icon="search" primary></vt@btn>
    </vt@combobox>

    <vt@combobox
      v-model="input1"
      placeholder="プレースホルダ"
    >
      <vt@icon>search</vt@icon>
      <vt@btn icon="search" primary></vt@btn>
    </vt@combobox>

    <vt@combobox
      lg
      v-model="input1"
      placeholder="プレースホルダ"
    >
      <vt@icon>search</vt@icon>
      <vt@btn icon="search" primary></vt@btn>
    </vt@combobox>

    <vt@combobox
      v-model="input1"
      placeholder="プレースホルダ"
      multiline
      sm
    >
      <vt@icon>search</vt@icon>
      <vt@btn icon="search" primary></vt@btn>
    </vt@combobox>
    <vt@combobox
      v-model="input1"
      placeholder="プレースホルダ"
      multiline
    >
      <vt@icon>search</vt@icon>
      <vt@btn icon="search" primary></vt@btn>
    </vt@combobox>
    <vt@combobox
      v-model="input1"
      placeholder="プレースホルダ"
      multiline
      lg
    >
      <vt@icon>search</vt@icon>
      <vt@btn icon="search" primary></vt@btn>
    </vt@combobox>
-->

    <vt@page-section title id="はじめに" data-anchor-point>

<!--
      <div>
        <p>■フラット選択</p>
        <input type="checkbox" v-model="flat" :value="true">
        {{flat}}
      </div>
      <vt@input
        label="サイズ小＆インライン"
        placeholder="プレースホルダ"
        sm
        inline
        prefix="$"
        right-icon="search"
        :flat="flat"
        counter="20"
      >
        <vt@btn secondary right icon="search" />
      </vt@input>

      <vt@input
        label="サイズ大＆インライン"
        placeholder="プレースホルダ"
        lg
        inline
        prefix="$"
        right-icon="search"
        :flat="flat"
        :counter="20"
      >
        <vt@btn secondary right icon="search" />
      </vt@input>

      <vt@input
        v-model="input1"
        placeholder="www.hoge-fuga"
        :left-icon="{name: 'search', click: e => { input1 = 'click!!' } }"
        prefix="http://"
        suffix=".com"
        :flat="flat"
        counter="20"
      >
        <vt@btn primary left>左ボタン</vt@btn>
        <template slot="label">ラベル</template>
      </vt@input>
      <p>{{input1}} <button @click="input1 = null">reset</button></p>

      <vt@textarea
        v-model="textarea1"
        label="らーべーる"
        placeholder="プレースホルだ"
        :flat="flat"
        :counter="20"
      >
        <vt@btn secondary>
          <vt@icon>search</vt@icon>
        </vt@btn>
      </vt@textarea>
      <p>{{textarea1}} <button @click="textarea1 = null">reset</button></p>

      <vt@textarea
        v-model="textarea1"
        label="サイズ小"
        placeholder="プレースホルだ"
        inline
        sm
        :flat="flat"
        counter="20"
      >
        <vt@btn secondary>
          <vt@icon>search</vt@icon>
        </vt@btn>
      </vt@textarea>

      <vt@textarea
        v-model="textarea1"
        label="サイズ大"
        placeholder="プレースホルだ"
        inline
        lg
        :flat="flat"
        :counter="20"
      >
        <vt@btn secondary>
          <vt@icon>search</vt@icon>
        </vt@btn>
      </vt@textarea>
-->

<!--
      <vt@checkbox v-model="check0">チェック単一</vt@checkbox>
      <p>{{check0}} <button @click="check0 = null">reset</button></p>

      <vt@checkbox v-model="check1" value="s1">チェック単一</vt@checkbox>
      <p>{{check1}} <button @click="check1 = null">reset</button></p>

      <vt@checkbox v-model="check2" value="m1">チェック1</vt@checkbox>
      <vt@checkbox v-model="check2" value="m2">チェック2</vt@checkbox>
      <vt@checkbox v-model="check2" value="m3">チェック3</vt@checkbox>
      <p>{{check2}} <button @click="check2 = null">reset</button></p>


      <vt@radio v-model="radio1" value="m1">ラジオ1</vt@radio>
      <vt@radio v-model="radio1" value="m2">ラジオ2</vt@radio>
      <vt@radio v-model="radio1" value="m3">ラジオ3</vt@radio>
      <p>{{radio1}} <button @click="radio1 = null">reset</button></p>

      <vt@radio name="radio2" value="m1">ラジオ1</vt@radio>
      <vt@radio name="radio2" value="m2">ラジオ2</vt@radio>
      <vt@radio name="radio2" value="m3" checked>ラジオ3</vt@radio>

      <vt@radio name="radio3" value="m1" disabled>ラジオ1</vt@radio>
      <vt@radio name="radio3" value="m2">ラジオ2</vt@radio>
      <vt@radio name="radio3" value="m3" checked>ラジオ3</vt@radio>
-->

<!--
      <vt@select
        label="セレクト"
        v-model="select0"
        multiple
      >
        <template slot="selection" slot-scope="option">
          <vt@chip
            info
            :close="option.deselect"
            :key="option.value"
          >
            {{option.label}}
          </vt@chip>
        </template>
        <vt@option value="1">項目1</vt@option>
        <vt@option value="2">項目2</vt@option>
        <vt@option value="3">項目3</vt@option>
      </vt@select>
      <p>{{select0}}</p>

      <vt@select
        label="セレクト"
        v-model="select0"
        multiple
      >
        <vt@option value="1">項目1</vt@option>
        <vt@option value="2">項目2</vt@option>
        <vt@option value="3">項目3</vt@option>
      </vt@select>
      <p>{{select0}}</p>

      <vt@select
        label="セレクト"
        v-model="select0"
        :groups="[
          {
            disabled: true,
            options: [
              {value: 1, label: 'セレクト1'},
              {value: 2, label: 'セレクト2'},
              {value: 3, label: 'セレクト3', disabled: true},
            ],
          },
          {
            label: 'グループ2',
            options: [
              {value: 4, label: 'セレクト4'},
              {value: 5, label: 'セレクト5', selected: true},
              {value: 6, label: 'セレクト6', disabled: true},
            ],
          },
        ]"
      />
-->

<!--
      <p>{{select0}} <button @click="select0 = null">reset</button></p>
      <vt@select v-model="select0"
        :options="[
          {value: 1, label: 'セレクト1'},
          {value: 2, label: 'セレクト2'},
          {value: 3, label: 'セレクト3', disabled: true},
        ]"
      />
      <p>{{select0}} <button @click="select0 = null">reset</button></p>

      <vt@select v-model="select0">
        <vt@option value="1">セレクト1</vt@option>
        <vt@option value="2">セレクト2</vt@option>
        <vt@option value="3">セレクト3</vt@option>
      </vt@select>
      <p>{{select0}} <button @click="select0 = null">reset</button></p>

      <vt@select v-model="select1" :disabled="select1Disabled">
        <vt@optgroup>
          <vt@option value="1">セレクト1</vt@option>
          <vt@option value="2">セレクト2</vt@option>
        </vt@optgroup>
        <vt@optgroup>
          <vt@optgroup-label>グループ2</vt@optgroup-label>
          <vt@option value="3">セレクト3</vt@option>
          <vt@option value="4">セレクト4</vt@option>
          <vt@option value="5" selected>セレクト5</vt@option>
        </vt@optgroup>
      </vt@select>
      <p>{{select1}} <button @click="select1 = null">reset</button></p>
      <p @click="select1Disabled = !select1Disabled">【disabled{{select1Disabled ? '解除' : ''}}】</p>

      <vt@select v-model="select2" multiple>
        <vt@optgroup :disabled="select2Disabled">
          <vt@option value="1">セレクト1</vt@option>
          <vt@option value="2">セレクト2</vt@option>
        </vt@optgroup>
        <vt@optgroup>
          <vt@optgroup-label>グループ2</vt@optgroup-label>
          <vt@option value="3">セレクト3</vt@option>
          <vt@option value="4">セレクト4</vt@option>
          <vt@option value="5">セレクト5</vt@option>
        </vt@optgroup>
      </vt@select>
      <p>{{select2}} <button @click="select2 = null">reset</button></p>
      <p @click="select2Disabled = !select2Disabled">【disabled{{select2Disabled ? '解除' : ''}}】</p>
-->

<!--

      <vt@select
        v-model="select1"
        :items="[
          {label: 'セレクト1', value: '1'},
          {label: 'セレクト2', value: '2', disabled: true},
        ]"
      />

      <vt@select v-model="select1">
        <vt@optgroup>
          <vt@optgroup-label>グループ2</vt@optgroup-label>
          <vt@option value="1">セレクト1</vt@option>
          <vt@option value="2">セレクト2</vt@option>
          <vt@option value="3">セレクト3</vt@option>
        </vt@optgroup>
        <vt@optgroup
          disabled
          label="グループ2"
          :items="[
            {label: 'セレクト1', value: '1'},
            {label: 'セレクト2', value: '2', disabled: true},
          ]"
        />
      </vt@select>

      <vt@input
        type="range"
        v-model="input1"
      >ラベル</vt@input>

      <vt@input
        type="range"
        multiple
        v-model="range2"
      ></vt@input>

      ■標準UIの入力を利用するのは
      input text系
      textarea
      select[autocomplete]

      ■clearableなのは
      input text系
      textarea
      select
-->

<!--
      <vt@switch v-model="switch0">スイッチ単一</vt@switch>
      <p>{{switch0}} <button @click="switch0 = null">reset</button></p>

      <vt@switch v-model="switch1" value="s1" multiple>スイッチ複数</vt@switch>
      <vt@switch v-model="switch1" value="s2" multiple>スイッチ複数</vt@switch>
      <vt@switch v-model="switch1" value="s3" multiple>スイッチ複数</vt@switch>
      <p>{{switch1}} <button @click="switch1 = null">reset</button></p>
-->
      <div>
        <vt@switch label="disabled" v-model="hasDisabled"></vt@switch>
        <vt@switch label="error" v-model="hasError"></vt@switch>
      </div>
      <vt@slider
        v-model="slider1"
        :disabled="hasDisabled"
        :error="hasError"
      ></vt@slider>
      <p>{{slider1}} <button @click="slider1 = null">reset</button></p>

      <vt@slider
        v-model="slider2"
        :disabled="hasDisabled"
        :error="hasError"
        multiple
        thumb-label
      ></vt@slider>
      <p>{{slider2}} <button @click="slider2 = null">reset</button></p>
    </vt@page-section>
  </vt@page>
</template>

<script>

export default {
  $_anchors,

  head() {
    return {
      title: 'テスト',
    }
  },

  methods: {
    hoge() {
      alert('hoge');
    },
  },

  data() {
    return {
      flat: false,
      input1: 'あいうえお',
      textarea1: null,
      check0: null,
      check1: null,
      check2: null,
      radio1: 'm2',
      select0: null,
      select1: null,
      select1Disabled: false,
      select2: null,
      select2Disabled: false,
      comboselect1: null,
      comboselect2: null,
      switch0: null,
      switch1: null,
      slider1: null,
      slider2: null,
      hasError: false,
      hasDisabled: false,
    }
  },
}
</script>
