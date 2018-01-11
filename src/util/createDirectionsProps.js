import { capitalize } from '~/helpers';



export default function createDirectionsProps(
  prefix,
  suffix,
  type = String,
  directions = [
    'top',
    'right',
    'bottom',
    'left',
    'horizontal',
    'vertical',
  ],
) {
  const Suffix = capitalize(suffix);
  const defaultKey = `${prefix}${Suffix}`;
  const props = {[defaultKey]: type};
  const _directions = [
    {name: '', key: defaultKey, keyChain: `${prefix}-${suffix}`},
  ];

  directions.forEach(name => {
    const key = `${prefix}${capitalize(name)}${Suffix}`;
    props[key] = type;
    _directions.push({name, key, keyChain: `${prefix}-${name}-${suffix}`});
  });

  return {
    props,
    prefix,
    suffix,
    type,
    directions: _directions,
  }
}
