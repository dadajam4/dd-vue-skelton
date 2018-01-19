const loaderUtils = require('loader-utils');
const prettier = require('prettier');



function escape(source = '', indentAdjust = false) {
  if (indentAdjust) {
    let minIndent = '';
    source.split('\n').forEach(row => {
      if (/^[\n\r\s\t]*$/.test(row)) return;
      const myIndent = row.match(/^[\s\t]*/);
      if (myIndent[0].length > minIndent.length) minIndent = myIndent;
    });

    const minIndentRe = new RegExp('^' + minIndent);
    source = source.split('\n').map(row => row.replace(minIndentRe, '')).join('\n').trim();
  }
  source = source.replace(/export default \{\};?/, '').trim();
  return source;
}



module.exports = function(source, map) {
  this.cacheable();

  if (source.match(/<docs-example/)) {
    source = prettier.format(source, {filepath: this.resourcePath});

    const id = this.resourcePath.match(/-example-(.*?)\.vue$/)[1];
    const styleMach = source.match(/<style([\s\S]*?)>([\s\S]*)<\/style>/);
    const templateMach = source.match(/<docs-example([\s\S]*?)>([\s\S]*)<\/docs-example>/);
    const scriptMach = source.match(/<script([\s\S]*?)>([\s\S]*)<\/script>/);
    const template = templateMach && escape(templateMach[2], true) || '';
    const script = scriptMach && escape(scriptMach[2]) || '';
    const css = styleMach && escape(styleMach[2]) || '';

    const $_docsExampleData = {id, template, script, css};
    const dataString = JSON.stringify($_docsExampleData);
    source = source.replace(/(<docs-example(.*?))/, '$1 :id="$_docsExampleData.id" :template="$_docsExampleData.template" :script="$_docsExampleData.script" :css="$_docsExampleData.css"');

    const computedMatch = source.match(/  computed: \{/);
    if (computedMatch) {
      source = source.replace(/  computed: \{/, '  computed: {$_docsExampleData(){return' + dataString + '},');
    } else {
      source = source.replace(/export default \{/, 'export default {computed: {$_docsExampleData(){return' + dataString + '}},');
    }
  }

  this.callback(null, source, map);
};