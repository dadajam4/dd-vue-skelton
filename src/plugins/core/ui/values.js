export default function values(uiValues) {
  if (uiValues) return uiValues;

  uiValues = {
    breakPoints: [],
    mediaMatches: [],
    mediaMatchAliases: {},
    toolbarHeights: {},
    theme: {
      contexts: [],
      contextMapping: {},
      default: null,
      keys: [],
    },
  };

  if (typeof window !== 'undefined') {
    let $cssValues = document.createElement('div');
    $cssValues.setAttribute('class', 'vc@css-values');
    document.body.appendChild($cssValues);
    const styles = window.getComputedStyle($cssValues, null);
    const values = JSON.parse(JSON.parse(styles.content));
    document.body.removeChild($cssValues);
    $cssValues = null;
    for (const key in uiValues) {
      const value = values[key];
      if (value !== undefined) uiValues[key] = value;
    }
  }

  return uiValues;
}
