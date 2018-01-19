<style lang="scss" scoped>
</style>

<template>
  <vt@page>
    <vt@page-header>Content</vt@page-header>
    <vt@page-intro>
      Use our iOS integration to style your native iOS applications to be consistent with the <span>hogehoge</span>
    </vt@page-intro>

    <vt@page-section title id="blockquote" data-anchor-point>
      <blockquote>Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.</blockquote>
    </vt@page-section>

    <vt@page-section title id="paragraphs" data-anchor-point>
      <p>Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.</p>

      <p>Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.</p>
    </vt@page-section>

    <vt@page-section title id="code" data-anchor-point>
      Example of an inline <code>&lt;code&gt;</code> element.
    </vt@page-section>

    <vt@page-section title id="variables" data-anchor-point>
      <var>v</var> = <var>u</var> * <var>e</var>
    </vt@page-section>

    <vt@page-section title id="user-input" data-anchor-point>
      To install Vuetify, type <kbd>npm install vuetify</kbd> into your console. Once complete, type <kbd>cd &lt;project name&gt;</kbd> and run <kbd>npm install</kbd>
    </vt@page-section>
  </vt@page>
</template>

<script>

export default {
  $_anchors,

  head() {
    return {
      title: 'Content',
    }
  },
}
</script>
