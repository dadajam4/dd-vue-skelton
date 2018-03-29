<style lang="scss" scoped>
@import "./core/index";
.my-debug {
  position: fixed;
  z-index: 1000;
  left: 0;
  bottom: 0;
  @include theme-color(background, background);
  padding: get-space(md);
  @include elevation(2);
}
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

      <vt@input
        label="サジェスト"
        placeholder="プレースホルダ"
        prefix="$"
        :flat="flat"
        :disabled="hasDisabled"
        rules="min:10|10文字以上必須すよー"
        color="secondary"
        always-suggests
        :suggests="['This is a dog.', 'this IS A PEN!', 'サジェスト1', 'サジェスト2', 'サジェスト11']"
      >
        <vt@icon right>search</vt@icon>
        <vt@btn secondary right icon="search" />
      </vt@input>
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
        :flat="flat"
        counter="20"
        :disabled="hasDisabled"
        rules="min:10|10文字以上必須すよー"
        color="secondary"
      >
        <vt@icon right>search</vt@icon>
        <vt@btn secondary right icon="search" />
      </vt@input>

      <vt@input
        label="サイズ大＆インライン"
        placeholder="プレースホルダ"
        lg
        inline
        prefix="$"
        :flat="flat"
        :counter="20"
        :disabled="hasDisabled"
      >
        <vt@icon right>search</vt@icon>
        <vt@btn secondary right icon="search" />
      </vt@input>

      <vt@input
        v-model="input1"
        placeholder="www.hoge-fuga"
        prefix="http://"
        suffix=".com"
        :flat="flat"
        counter="20"
        :disabled="hasDisabled"
      >
        <vt@icon left @click="e => { input1 = 'click!!' }">search</vt@icon>
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
        :disabled="hasDisabled"
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
        :disabled="hasDisabled"
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
        :disabled="hasDisabled"
      >
        <vt@btn secondary>
          <vt@icon>search</vt@icon>
        </vt@btn>
      </vt@textarea>
-->

<!--
      <vt@checkbox
        v-model="check0"
        rules="required|必須すよー"
        color="primary"
        :disabled="hasDisabled"
      >チェック単一</vt@checkbox>
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
        label="シングル"
        :flat="flat"
        :disabled="hasDisabled"
      >
        <vt@option value="1">項目1</vt@option>
        <vt@option value="2">項目2</vt@option>
        <vt@option value="3">項目3</vt@option>
      </vt@select>

      <vt@select
        label="マルチ"
        v-model="select0"
        multiple
        :flat="flat"
        :disabled="hasDisabled"
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
        label="シングル - グループ"
        :flat="flat"
        :disabled="hasDisabled"
      >
        <vt@optgroup label="野菜">
          <vt@option value="1">人参</vt@option>
          <vt@option value="2">大根</vt@option>
          <vt@option value="3">セロリ</vt@option>
        </vt@optgroup>
        <vt@optgroup label="ドリンク">
          <vt@option value="4">コーラ</vt@option>
          <vt@option value="5">アクエリアス</vt@option>
        </vt@optgroup>
      </vt@select>

      <vt@select
        label="マルチ - グループ"
        multiple
        :flat="flat"
        :disabled="hasDisabled"
      >
        <vt@optgroup label="野菜">
          <vt@option value="1">人参</vt@option>
          <vt@option value="2">大根</vt@option>
          <vt@option value="3">セロリ</vt@option>
        </vt@optgroup>
        <vt@optgroup label="ドリンク">
          <vt@option value="4">コーラ</vt@option>
          <vt@option value="5">アクエリアス</vt@option>
        </vt@optgroup>
      </vt@select>
-->

<!--

      <vt@select
        label="セレクト"
        v-model="select0"
        multiple
        :flat="flat"
        :disabled="hasDisabled"
      >
        <vt@option value="1">項目1</vt@option>
        <vt@option value="2">項目2</vt@option>
        <vt@option value="3">項目3</vt@option>
      </vt@select>
      <p>{{select0}}</p>

      <vt@select
        label="セレクト"
        v-model="select0"
        multiple
        :flat="flat"
        :disabled="hasDisabled"
        :groups="[
          {
            label: 'グループ1(disabled)',
            disabled: true,
            options: [
              {value: '1', label: 'セレクト1'},
              {value: '2', label: 'セレクト2'},
              {value: '3', label: 'セレクト3', disabled: true},
            ],
          },
          {
            label: 'グループ2',
            options: [
              {value: '4', label: 'セレクト4'},
              {value: '5', label: 'セレクト5', selected: true},
              {value: '6', label: 'セレクト6', disabled: true},
            ],
          },
        ]"
      />

-->

<!--
      <vt@tile @click="" :disabled="tileDisabled" :dense="tileDense" divider="pull">
        <vt@tile-avatar src="~assets/img/avatar/nigaoe_murou_saisei.png" />
        <vt@tile-content>
          <vt@tile-title>2018/3時点における日本の経済事情から推察する水漏れ事情</vt@tile-title>
          <vt@tile-sub-title>野村うんちゃん先生の観察日記</vt@tile-sub-title>
          <vt@tile-text>みなさんこんにちわ。野村うんちゃん先生です。しばらく暑い日が続いていますがみなさんいかがお過ごしですか？</vt@tile-text>
        </vt@tile-content>
        <vt@tile-action>
          <vt@tooltip-fragment>
            <vt@btn icon="search" />
            <vt@tooltip>検索</vt@tooltip>
          </vt@tooltip-fragment>
        </vt@tile-action>
      </vt@tile>

      <vt@tile :disabled="tileDisabled" :dense="tileDense" divider>
        <vt@tile-avatar></vt@tile-avatar>
        <vt@tile-content>
          <vt@tile-title>2018/3時点における日本の経済事情から推察する水漏れ事情</vt@tile-title>
          <vt@tile-sub-title>野村うんちゃん先生の観察日記</vt@tile-sub-title>
          <vt@tile-text>みなさんこんにちわ。野村うんちゃん先生です。しばらく暑い日が続いていますがみなさんいかがお過ごしですか？</vt@tile-text>
        </vt@tile-content>
        <vt@tile-action>
          <vt@tile-action-text>12 hour</vt@tile-action-text>
          <vt@tooltip-fragment>
            <vt@btn icon="search" />
            <vt@tooltip>検索</vt@tooltip>
          </vt@tooltip-fragment>
        </vt@tile-action>
      </vt@tile>
      <vt@tile :disabled="tileDisabled" :dense="tileDense" :to="{name: 'components-alerts'}">
        <vt@tile-avatar src="~assets/img/avatar/boy_1.png" />
        <vt@tile-content>
          <vt@tile-title>2018/3時点における日本の経済事情から推察する水漏れ事情</vt@tile-title>
          <vt@tile-sub-title>野村うんちゃん先生の観察日記</vt@tile-sub-title>
          <vt@tile-text>みなさんこんにちわ。野村うんちゃん先生です。しばらく暑い日が続いていますがみなさんいかがお過ごしですか？</vt@tile-text>
        </vt@tile-content>
        <vt@tile-action>
          <vt@tile-action-text>12 hour</vt@tile-action-text>
          <vt@tooltip-fragment>
            <vt@btn icon="star" />
            <vt@tooltip>お気に入りに登録</vt@tooltip>
          </vt@tooltip-fragment>
        </vt@tile-action>
      </vt@tile>
      <vt@tile :disabled="tileDisabled" :dense="tileDense" :to="{name: 'components-alerts'}">
        <vt@tile-action>
          <vt@tile-action-text>12 hour</vt@tile-action-text>
          <vt@tooltip-fragment>
            <vt@btn icon="star" />
            <vt@tooltip>お気に入りに登録</vt@tooltip>
          </vt@tooltip-fragment>
        </vt@tile-action>
        <vt@tile-content>
          <vt@tile-title>2018/3時点における日本の経済事情から推察する水漏れ事情</vt@tile-title>
          <vt@tile-sub-title>野村うんちゃん先生の観察日記</vt@tile-sub-title>
          <vt@tile-text>みなさんこんにちわ。野村うんちゃん先生です。しばらく暑い日が続いていますがみなさんいかがお過ごしですか？</vt@tile-text>
        </vt@tile-content>
        <vt@tile-avatar src="~assets/img/avatar/boy_1.png" />
      </vt@tile>

      <vt@tile :disabled="tileDisabled" :dense="tileDense">
        <vt@tile-action>
          <vt@checkbox></vt@checkbox>
        </vt@tile-action>
        <vt@tile-content>
          タイル1つ分です
        </vt@tile-content>
      </vt@tile>



      <div>
        <vt@switch v-model="tileDisabled" :value="true">tileDisabled</vt@switch>
        <vt@switch v-model="tileDense" :value="true">tileDense</vt@switch>
      </div>



      <vt@tile-group :disabled="tileDisabled" :dense="tileDense" divider="pull">
        <vt@tile @click="">
          <vt@tile-avatar src="~assets/img/avatar/nigaoe_murou_saisei.png" />
          <vt@tile-content>
            <vt@tile-title>2018/3時点における日本の経済事情から推察する水漏れ事情</vt@tile-title>
            <vt@tile-sub-title>野村うんちゃん先生の観察日記</vt@tile-sub-title>
            <vt@tile-text>みなさんこんにちわ。野村うんちゃん先生です。しばらく暑い日が続いていますがみなさんいかがお過ごしですか？</vt@tile-text>
          </vt@tile-content>
          <vt@tile-action>
            <vt@tooltip-fragment>
              <vt@btn icon="search" />
              <vt@tooltip>検索</vt@tooltip>
            </vt@tooltip-fragment>
          </vt@tile-action>
        </vt@tile>
        <vt@tile>
          <vt@tile-avatar></vt@tile-avatar>
          <vt@tile-content>
            <vt@tile-title>2018/3時点における日本の経済事情から推察する水漏れ事情</vt@tile-title>
            <vt@tile-sub-title>野村うんちゃん先生の観察日記</vt@tile-sub-title>
            <vt@tile-text>みなさんこんにちわ。野村うんちゃん先生です。しばらく暑い日が続いていますがみなさんいかがお過ごしですか？</vt@tile-text>
          </vt@tile-content>
          <vt@tile-action>
            <vt@tile-action-text>12 hour</vt@tile-action-text>
            <vt@tooltip-fragment>
              <vt@btn icon="search" />
              <vt@tooltip>検索</vt@tooltip>
            </vt@tooltip-fragment>
          </vt@tile-action>
        </vt@tile>
        <vt@tile :to="{name: 'components-alerts'}">
          <vt@tile-avatar src="~assets/img/avatar/boy_1.png" />
          <vt@tile-content>
            <vt@tile-title>2018/3時点における日本の経済事情から推察する水漏れ事情</vt@tile-title>
            <vt@tile-sub-title>野村うんちゃん先生の観察日記</vt@tile-sub-title>
            <vt@tile-text>みなさんこんにちわ。野村うんちゃん先生です。しばらく暑い日が続いていますがみなさんいかがお過ごしですか？</vt@tile-text>
          </vt@tile-content>
          <vt@tile-action>
            <vt@tile-action-text>12 hour</vt@tile-action-text>
            <vt@tooltip-fragment>
              <vt@btn icon="star" />
              <vt@tooltip>お気に入りに登録</vt@tooltip>
            </vt@tooltip-fragment>
          </vt@tile-action>
        </vt@tile>
        <vt@tile :to="{name: 'components-alerts'}">
          <vt@tile-action>
            <vt@tile-action-text>12 hour</vt@tile-action-text>
            <vt@tooltip-fragment>
              <vt@btn icon="star" />
              <vt@tooltip>お気に入りに登録</vt@tooltip>
            </vt@tooltip-fragment>
          </vt@tile-action>
          <vt@tile-content>
            <vt@tile-title>2018/3時点における日本の経済事情から推察する水漏れ事情</vt@tile-title>
            <vt@tile-sub-title>野村うんちゃん先生の観察日記</vt@tile-sub-title>
            <vt@tile-text>みなさんこんにちわ。野村うんちゃん先生です。しばらく暑い日が続いていますがみなさんいかがお過ごしですか？</vt@tile-text>
          </vt@tile-content>
          <vt@tile-avatar src="~assets/img/avatar/boy_1.png" />
        </vt@tile>

        <vt@tile>
          <vt@tile-action>
            <vt@checkbox></vt@checkbox>
          </vt@tile-action>
          <vt@tile-content>
            タイル1つ分です
          </vt@tile-content>
        </vt@tile>
      </vt@tile-group>




      <vt@accordion>
        <vt@accordion-title icon="cube">アコーディオンタイトルです。アコーディオンタイトルです。アコーディオンタイトルです。アコーディオンタイトルです。アコーディオンタイトルです。</vt@accordion-title>
        <p>これはアコーディオンです。</p>
        <p>これはアコーディオンです。</p>
        <p>これはアコーディオンです。</p>
        <p>これはアコーディオンです。</p>
        <p>これはアコーディオンです。</p>
      </vt@accordion>
      <vt@accordion>
        <vt@accordion-title :wrap="false">アコーディオンタイトルです。アコーディオンタイトルです。アコーディオンタイトルです。アコーディオンタイトルです。アコーディオンタイトルです。</vt@accordion-title>
        <p>これはアコーディオンです。</p>
        <p>これはアコーディオンです。</p>
        <p>これはアコーディオンです。</p>
        <p>これはアコーディオンです。</p>
        <p>これはアコーディオンです。</p>
      </vt@accordion>

      <vt@accordion styled>
        <vt@accordion-title info icon="cube">アコーディオンタイトルです。アコーディオンタイトルです。アコーディオンタイトルです。アコーディオンタイトルです。アコーディオンタイトルです。</vt@accordion-title>
        <p>これはアコーディオンです。</p>
        <p>これはアコーディオンです。</p>
        <p>これはアコーディオンです。</p>
        <p>これはアコーディオンです。</p>
        <p>これはアコーディオンです。</p>
      </vt@accordion>
      <vt@accordion styled>
        <vt@accordion-title info :wrap="false">アコーディオンタイトルです。アコーディオンタイトルです。アコーディオンタイトルです。アコーディオンタイトルです。アコーディオンタイトルです。</vt@accordion-title>
        <p>これはアコーディオンです。</p>
        <p>これはアコーディオンです。</p>
        <p>これはアコーディオンです。</p>
        <p>これはアコーディオンです。</p>
        <p>これはアコーディオンです。</p>
      </vt@accordion>

      <h2>グループ</h2>
      <vt@accordion-group :wrap="false">
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

      <vt@accordion-group styled :wrap="false">
        <vt@accordion>
          <vt@accordion-title info icon="cube">What is a dog?</vt@accordion-title>
          <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
        </vt@accordion>
        <vt@accordion>
          <vt@accordion-title info>What kinds of dogs are there?</vt@accordion-title>
          <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
        </vt@accordion>
      </vt@accordion-group>


      <vt@tile-group>
        <vt@tile
          v-for="tile, index in ['Breakfast &amp; brunch','New American','Sushi']"
          :key="index"
          @click=""
        >
          <vt@tile-avatar></vt@tile-avatar>
          <vt@tile-content>{{tile}}</vt@tile-content>
        </vt@tile>
      </vt@tile-group>


      <vt@avatar>
        <img src="~assets/img/avatar/nigaoe_murou_saisei.png" alt="">
      </vt@avatar>

      <vt@avatar :src="{
        default: '~assets/img/avatar/nigaoe_murou_saisei.png',
        desktop: {src: '~assets/img/avatar/boy_1.png', width: 50},
      }" />

      <vt@avatar class="vc@context-color--primary">
        <vt@icon lg>user-circle</vt@icon>
      </vt@avatar>

      <vt@avatar class="vc@layer-color--brand-secondary vc@text-color--shades-white">
        <span class="vc@headline">C</span>
      </vt@avatar>
-->


      <p v-for="n in 100" :key="n">ダミーテキスト{{n}}</p>

<!--
      <vt@select
        label="autocomplete"
        :flat="flat"
        :disabled="hasDisabled"
        autocomplete
      >
        <vt@option value="1">This is a dog</vt@option>
        <vt@option value="2">this IS a PEN</vt@option>
        <vt@option value="3">項目3</vt@option>
      </vt@select>

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
      <vt@switch
        v-model="switch0"
        rules="required|必須だっての！"
        :disabled="hasDisabled"
        color="indigo"
      >スイッチ単一</vt@switch>
      <p>{{switch0}} <button @click="switch0 = null">reset</button></p>

      <vt@switch v-model="switch1" value="s1" multiple>スイッチ複数</vt@switch>
      <vt@switch v-model="switch1" value="s2" multiple>スイッチ複数</vt@switch>
      <vt@switch v-model="switch1" value="s3" multiple>スイッチ複数</vt@switch>
      <p>{{switch1}} <button @click="switch1 = null">reset</button></p>


            'myVmSomeMethod: this.arg1, this.arg2 | メッセージ',
            'min_value:8 | 8以上でなければ、、',
            'max_value:70 | 70以下でなければ、、',
            {handler: val => (val !== 10 && val !== 20 && val !== 90), message: '10と20と90はダメなんだ'}
-->

<!--
      <div class="my-sample">
        <vt@range
          v-model="range1"
          :disabled="hasDisabled"
          :has-error="hasError"
          label="レンジ - 単一"
          persistent-hint
          :rules="[
            'max_value:10 | 10以下でなければ、、',
            'max_value:20 | 20以下でなければ、、',
            'max_value:30 | 30以下でなければ、、',
            'max_value:40 | 40以下でなければ、、',
            'max_value:50 | 50以下でなければ、、',
            'max_value:60 | 60以下でなければ、、',
            'max_value:70 | 70以下でなければ、、',
            'max_value:80 | 80以下でなければ、、',
            'max_value:90 | 90以下でなければ、、',
          ]"
        >

          <span slot="hint">{{hint}} <vt@chip>chip</vt@chip></span>
        </vt@range>
        <p><code>{{JSON.stringify(range1)}}</code> <vt@btn sm secondary @click="range1 = null">reset</vt@btn></p>
      </div>
      <p><input type="text" v-model="hint"></p>

      <div class="my-sample">
        <vt@range
          v-model="range1"
          :disabled="hasDisabled"
          :has-error="hasError"
          thumb-label
          label="レンジ - ラベル"
        />
        <p><code>{{JSON.stringify(range1)}}</code> <vt@btn sm secondary @click="range1 = null">reset</vt@btn></p>
      </div>

      <div class="my-sample">
        <vt@range
          v-model="range1"
          :disabled="hasDisabled"
          :has-error="hasError"
          persistent-thumb-label
          label="レンジ - ラベル常時"
        />
        <p><code>{{JSON.stringify(range1)}}</code> <vt@btn sm secondary @click="range1 = null">reset</vt@btn></p>
      </div>

      <div class="my-sample">
        <vt@range
          v-model="range2"
          :disabled="hasDisabled"
          :has-error="hasError"
          label="レンジ - 複数"
          multiple
        />
        <p><code>{{JSON.stringify(range2)}}</code> <vt@btn sm secondary @click="range2 = null">reset</vt@btn></p>
      </div>

      <div class="my-sample">
        <vt@range
          v-model="range2"
          :disabled="hasDisabled"
          :has-error="hasError"
          label="レンジ - サムネイルカラー"
          multiple
          thumb-color="red"
        />
        <p><code>{{JSON.stringify(range2)}}</code> <vt@btn sm secondary @click="range2 = null">reset</vt@btn></p>
      </div>

      <div class="my-sample">
        <vt@range
          v-model="range2"
          :disabled="hasDisabled"
          :has-error="hasError"
          label="レンジ - サムネイルカラー（マルチ）"
          multiple
          :thumb-color="['pink', 'indigo']"
        />
        <p><code>{{JSON.stringify(range2)}}</code> <vt@btn sm secondary @click="range2 = null">reset</vt@btn></p>
      </div>

      <div class="my-sample">
        <vt@range
          v-model="range2"
          :disabled="hasDisabled"
          :has-error="hasError"
          label="レンジ - サムネイルラベルカラー"
          multiple
          :thumb-color="['pink', 'indigo']"
          :thumb-label-color="['shades-black', 'pink']"
          persistent-thumb-label
        />
        <p><code>{{JSON.stringify(range2)}}</code> <vt@btn sm secondary @click="range2 = null">reset</vt@btn></p>
      </div>

      <div class="my-sample">
        <vt@range
          v-model="range2"
          :disabled="hasDisabled"
          :has-error="hasError"
          label="レンジ - トラックカラー"
          multiple
          :thumb-color="['pink', 'indigo']"
          track-fill-color="orange"
        />
        <p><code>{{JSON.stringify(range2)}}</code> <vt@btn sm secondary @click="range2 = null">reset</vt@btn></p>
      </div>

      <div class="my-sample">
        <vt@range
          v-model="range1"
          :disabled="hasDisabled"
          :has-error="hasError"
          thumb-label
          label="ステップ表示"
          step="20"
          ticks
        />
        <p><code>{{JSON.stringify(range1)}}</code> <vt@btn sm secondary @click="range1 = null">reset</vt@btn></p>
      </div>

      <div class="my-sample">
        <vt@range
          v-model="range1"
          :disabled="hasDisabled"
          :has-error="hasError"
          thumb-label
          label="ステップ表示 - 常時"
          step="20"
          ticks
          persintent-ticks
        />
        <p><code>{{JSON.stringify(range1)}}</code> <vt@btn sm secondary @click="range1 = null">reset</vt@btn></p>
      </div>

      <div class="my-sample">
        <vt@range
          v-model="range1"
          :disabled="hasDisabled"
          :has-error="hasError"
          thumb-label
          label="ステップカラー"
          step="20"
          ticks
          persintent-ticks
          tick-color="red"
        />
        <p><code>{{JSON.stringify(range1)}}</code> <vt@btn sm secondary @click="range1 = null">reset</vt@btn></p>
      </div>

      <div class="my-sample">
        <vt@range
          v-model="range1"
          :disabled="hasDisabled"
          :has-error="hasError"
          thumb-label
          label="レンジ - アイコン"
        >
          <vt@icon>user</vt@icon>
          <vt@icon>search</vt@icon>
        </vt@range>
        <p><code>{{JSON.stringify(range1)}}</code> <vt@btn sm secondary @click="range1 = null">reset</vt@btn></p>
      </div>

      <div class="my-sample">
        <vt@range
          v-model="range1"
          :disabled="hasDisabled"
          :has-error="hasError"
          persistent-thumb-label
          :thumb-label="(val) => {
            return $createElement('div', {}, [
              $createElement('div', {}, 'custom'),
              val,
            ])
          }"
          label="レンジ - ラベルカスタム"
        />
        <p><code>{{JSON.stringify(range1)}}</code> <vt@btn sm secondary @click="range1 = null">reset</vt@btn></p>
      </div>
-->

<!--
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
-->
    </vt@page-section>

<!--
    <div class="my-debug">
      <vt@switch label="disabled" color="grey" v-model="hasDisabled"></vt@switch>
      <vt@switch label="error" color="error" v-model="hasError"></vt@switch>
    </div>
-->
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
      range1: null,
      range2: null,
      hint: 'これはヒントです',
      ttt: false,
      tttinput: '',
      usemenu: true,

      tileDisabled: false,
      tileDense: false,
    }
  },
}
</script>
