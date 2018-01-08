const tinycolor = require('tinycolor2');
const palette = require('./palette');
const DEFAULT_THEME = 'light';
const AUTO_BACKGROUND_BRIGHTNESS_AMMOUNT = 200;


/**
    context-primary-color: xxx,
    context-primary-border-color: 【デフォルトは背景色と一緒】,
    context-primary-text-color: 【自動算出】,
    context-primary-link-color: 【デフォルトは透過度90%のtext】,
    context-primary-link-hover-color: 【デフォルトは透過度80%のtext】,
    .....

    background-color: xxx,
    background-active-color: xxx,
    background-light-color: xxx,
    background-grey-color: xxx,
    background-dark-color: xxx,
    background-darken-color: xxx,
    background-highlight-color: xxx,

    text-color: 【デフォはpaletteのshades.black】,
    text-inverted-color: 【デフォはpaletteのshades.white】,
    text-muted-color: xxx,
    text-sub-color: 【デフォはpalette.grey.base】,
    text-[context-name]-color: xxx,
    ......

    link-color: xxx,
    link-hover-color: 【デフォルトはlinkと一緒】,

    divider-light-color: 【デフォルトはdividerと一緒】,
    divider-color: xxx,
    divider-dark-color: 【デフォルトはdividerと一緒】,

    form-divider-color: 【デフォルトはdividerと一緒】,
    'switch-track-color': xxx,
    'switch-pointer-color': xxx,
*/

const themes = {};
const settings = {
  light: {

    // text
    'text-color': 'rgba(0, 0, 0, .87)',
    'text-muted-color': 'rgba(0, 0, 0, .26)',

    // link
    'link-color': palette.brand.primary,

    // divider
    'divider-light-color': tinycolor(palette.grey.base).setAlpha(0.25).toRgbString(),
    'divider-color': tinycolor(palette.grey.base).setAlpha(0.5).toRgbString(),
    'divider-dark-color': tinycolor(palette.grey.base).setAlpha(1).toRgbString(),

    // form
    'form-divider-color': palette.grey['lighten-2'],
    'switch-track-color': 'rgba(0, 0, 0, .38)',
    'switch-pointer-color': '#fafafa',

    // background
    'background-color': palette.shades.white,
    'background-active-color': palette.grey['lighten-2'],
    'background-light-color': palette.grey['lighten-3'],
    'background-grey-color': palette.grey['lighten-1'],
    'background-dark-color': palette.grey['darken-1'],
    'background-darken-color': palette.grey['darken-3'],
    'background-highlight-color': palette.yellow.base,

    // context
    'context-primary-color': palette.brand.primary,
    'context-secondary-color': palette.brand.secondary,
    'context-info-color': palette.blue.base,
    'context-success-color': palette.green.base,
    'context-warning-color': palette.amber.base,
    'context-error-color': palette.red['accent-2'],
    'context-light-color': palette.grey['lighten-2'],
    'context-grey-color': palette.grey.base,
    'context-dark-color': palette.grey['darken-2'],
    'context-darken-color': palette.grey['darken-4'],
    'context-muted-color': 'rgba(0, 0, 0, .12)',
    'context-muted-text-color': 'rgba(0, 0, 0, .26)',
  },

  dark: {

    // text
    'text-color': palette.shades.white,
    'text-inverted-color': 'rgba(0, 0, 0, .87)',

    // link
    'link-color': palette.shades.white,

    // // divider
    // 'divider-light-color': 'rgba(0, 0, 0, .2)',
    // 'divider-color': 'rgba(0, 0, 0, .4)',
    // 'divider-dark-color': 'rgba(0, 0, 0, .6)',

    // // form
    // 'form-divider-color': palette.grey['lighten-2'],

    // background
    'background-color': palette.grey['darken-3'],
    'background-light-color': palette.grey['darken-2'],
    'background-grey-color': palette.grey['lighten-1'],
    'background-dark-color': palette.grey['lighten-1'],
    'background-darken-color': palette.grey['lighten-3'],
  },
};

// default setup
let defaultTheme = null;
for (let name in settings) {
  themes[name] = Object.assign({}, settings[name]);
  if (name === DEFAULT_THEME) defaultTheme = themes[name];
}

if (!defaultTheme['text-color']) defaultTheme['text-color'] = palette.shades.black;
if (!defaultTheme['text-inverted-color']) defaultTheme['text-inverted-color'] = palette.shades.white;
if (!defaultTheme['text-sub-color']) defaultTheme['text-sub-color'] = palette.grey.base;

const themeKeys = Object.keys(defaultTheme);
const colorKeys = themeKeys.filter(key => /-color$/.test(key));
const contextColorKeys = colorKeys.filter(key => key.indexOf('context-') === 0 && !/-(border|text|link|link-hover)-color$/.test(key));

for (let contextColorKey of contextColorKeys) {
  const suffix = contextColorKey.split('-')[1];
  const textColorKey = `text-${suffix}-color`;
  if (!defaultTheme[textColorKey]) {
    colorKeys.push(textColorKey);
  }
  const backgroundColorKey = `background-${suffix}-color`;
  if (!defaultTheme[backgroundColorKey]) {
    colorKeys.push(backgroundColorKey);
  }
}
const backgroundColorKeys = colorKeys.filter(key => key.indexOf('background') === 0);
const textColorKeys = colorKeys.filter(key => key.indexOf('text') === 0);

for (let name in themes) {
  const theme = themes[name];

  if (!theme['link-hover-color']) theme['link-hover-color'] = theme['link-color'];
  if (!theme['divider-light-color']) theme['divider-light-color'] = theme['divider-color'];
  if (!theme['divider-dark-color']) theme['divider-dark-color'] = theme['divider-color'];
  if (!theme['form-divider-color']) theme['form-divider-color'] = theme['divider-color'];

  textColorKeys.forEach(textColorKey => {
    if (!theme[textColorKey]) theme[textColorKey] = theme[`context-${textColorKey.replace(/^text-/, '')}`];
  });
  backgroundColorKeys.forEach(backgroundColorKey => {
    if (!theme[backgroundColorKey]) theme[backgroundColorKey] = theme[`context-${backgroundColorKey.replace(/^background-/, '')}`];
  });

  contextColorKeys.forEach(contextColorKey => {
    if (!theme[contextColorKey]) return;
    const colorKey = contextColorKey.replace(/-color$/, '');
    if (!theme[`${colorKey}-border-color`]) theme[`${colorKey}-border-color`] = theme[contextColorKey];
    if (!theme[`${colorKey}-text-color`]) {
      const myBrightness = tinycolor(theme[contextColorKey]).getBrightness();
      theme[`${colorKey}-text-color`] = myBrightness >= AUTO_BACKGROUND_BRIGHTNESS_AMMOUNT ? theme['text-color'] : theme['text-inverted-color'];
    }
    if (!theme[`${colorKey}-link-color`]) {
      theme[`${colorKey}-link-color`] = tinycolor(theme[`${colorKey}-text-color`]).setAlpha(0.9).toRgbString();
    }
    if (!theme[`${colorKey}-link-hover-color`]) {
      theme[`${colorKey}-link-hover-color`] = tinycolor(theme[`${colorKey}-text-color`]).setAlpha(0.8).toRgbString();
    }
  });

  if (name !== DEFAULT_THEME) {
    for (let key in defaultTheme) {
      if (!theme[key]) theme[key] = defaultTheme[key];
    }
  }
}



module.exports = {
  palette,
  themes,
  'default': DEFAULT_THEME,
  'color-keys': {
    background: backgroundColorKeys.map(key => key.replace(/^background-?/, '').replace(/-color$/, '')).filter(key => key !== 'color'),
    text: textColorKeys.map(key => key.replace(/^text-?/, '').replace(/-color$/, '')).filter(key => key !== 'color'),
    context: contextColorKeys.map(key => key.replace(/^context-?/, '').replace(/-color$/, '')).filter(key => key !== 'color'),
  },
};