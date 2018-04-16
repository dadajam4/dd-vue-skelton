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

    <vt@page-section title id="はじめに" data-anchor-point>

<!--
      <div>
        <p>■フラット選択</p>
        <input type="checkbox" v-model="flat" :value="true">
        {{flat}}
      </div>

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

            'myVmSomeMethod: this.arg1, this.arg2 | メッセージ',
            'min_value:8 | 8以上でなければ、、',
            'max_value:70 | 70以下でなければ、、',
            {handler: val => (val !== 10 && val !== 20 && val !== 90), message: '10と20と90はダメなんだ'}
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
