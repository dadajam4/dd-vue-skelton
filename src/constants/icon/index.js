import fontInfo from '~/assets/css/.tmp/dd-icon/dd-icon.json';
import iconTypes from './types';


const icons = [];
const iconNames = fontInfo.glyphs.map(glyph => glyph.name);
const tags = [];
iconNames.forEach(icon => {
  const tmp = icon.split('-');
  tmp.forEach(tag => {
    if (tag.length > 2 && !tags.includes(tag)) tags.push(tag);
  });
});

const used = {};
const types = iconTypes.map(iconType => {
  return {
    name: iconType.name,
    icons: iconType.icons.map(icon => {
      const data = {
        name: icon.replace(/ \(alias\)$/, ''),
        label: icon,
      };
      if (!used[data.name]) {
        icons.push(data);
        used[data.name] = true;
      }
      return data;
    })
  };
});

const others = iconNames.filter(icon => !used[icon]);
if (others.length) {
  types.push({name: 'Other', icons: others.map(other => { return {name: other, label: other} })})
}


export default {
  icons,
  tags,
  types,
}