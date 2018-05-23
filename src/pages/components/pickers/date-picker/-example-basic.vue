<style lang="scss" scoped>
</style>

<template>
  <docs-example>
    <template slot="description">
    </template>

    <vt@select
      label="locale"
      autocomplete
      v-model="locale"
      :options="locales"
    />

    <vt@card style="display: inline-block;">
      <vt@calendar
        :locale="locale"
        v-model="date1"
        picker
        multiple-picker
        :pickedValue="date1Picked"
        @inputPickedDate="date1Picked = $event"
        :events="['2018-5-1', '2018-5-19', {value: '2018-5-19', color: 'red'}]"
      />
    </vt@card>
    <pre><code>{{date1}}</code></pre>
    <pre><code>{{date1Picked}}</code></pre>

    <div class="vc@m-t--lg">
      <vt@calendar
        :locale="locale"
        v-model="date2"
        min="2018-5-2"
        max="2018-5-25"
        allowed-dates="2018-5-6"
      />
    </div>
    <pre><code>{{date2}}</code></pre>
<!--
    <vt@date-picker
      v-model="date1Picked"
      :locale="locale"
      :events="['2018-5-1', '2018-5-19', {value: '2018-5-19', color: 'red'}]"
    />
-->

  </docs-example>
</template>

<script>
export default {
  data() {
    return {
      date1: null,
      date2: '2018-04',
      date1Picked: null,
      locale: null,
    }
  },

  computed: {

    // https://gist.github.com/vitoziv/9108407
    locales() {
      return [
        {label: 'ブラウザデフォルト', value: null},
        {label: 'Arabic (Saudi Arabia)', value: 'ar-SA'},
        {label: 'Chinese (China)', value: 'zh-CN'},
        {label: 'Chinese (Hong Kong SAR China)', value: 'zh-HK'},
        {label: 'Chinese (Taiwan)', value: 'zh-TW'},
        {label: 'Czech (Czech Republic)', value: 'cs-CZ'},
        {label: 'Danish (Denmark)', value: 'da-DK'},
        {label: 'Dutch (Belgium)', value: 'nl-BE'},
        {label: 'Dutch (Netherlands)', value: 'nl-NL'},
        {label: 'English (Australia)', value: 'en-AU'},
        {label: 'English (Ireland)', value: 'en-IE'},
        {label: 'English (South Africa)', value: 'en-ZA'},
        {label: 'English (United Kingdom)', value: 'en-GB'},
        {label: 'English (United States)', value: 'en-US'},
        {label: 'Finnish (Finland)', value: 'fi-FI'},
        {label: 'French (Canada)', value: 'fr-CA'},
        {label: 'French (France)', value: 'fr-FR'},
        {label: 'German (Germany)', value: 'de-DE'},
        {label: 'Greek (Greece)', value: 'el-GR'},
        {label: 'Hindi (India)', value: 'hi-IN'},
        {label: 'Hungarian (Hungary)', value: 'hu-HU'},
        {label: 'Indonesian (Indonesia)', value: 'id-ID'},
        {label: 'Italian (Italy)', value: 'it-IT'},
        {label: 'Japanese (Japan)', value: 'ja-JP'},
        {label: 'Korean (South Korea)', value: 'ko-KR'},
        {label: 'Norwegian (Norway)', value: 'no-NO'},
        {label: 'Polish (Poland)', value: 'pl-PL'},
        {label: 'Portuguese (Brazil)', value: 'pt-BR'},
        {label: 'Portuguese (Portugal)', value: 'pt-PT'},
        {label: 'Romanian (Romania)', value: 'ro-RO'},
        {label: 'Russian (Russia)', value: 'ru-RU'},
        {label: 'Slovak (Slovakia)', value: 'sk-SK'},
        {label: 'Spanish (Mexico)', value: 'es-MX'},
        {label: 'Spanish (Spain)', value: 'es-ES'},
        {label: 'Swedish (Sweden)', value: 'sv-SE'},
        {label: 'Thai (Thailand)', value: 'th-TH'},
        {label: 'Turkish (Turkey)', value: 'tr-TR'},
      ];
    },
  },
}
</script>
