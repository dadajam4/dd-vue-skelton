import { alphaSpaces } from './alpha_helper';

const alpha_spaces = function alpha_spaces(value, [locale] = [null]) {
  if (Array.isArray(value)) {
    return value.every(val => alpha_spaces(val, [locale]));
  }

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alphaSpaces).some(loc => alphaSpaces[loc].test(value));
  }

  return (alphaSpaces[locale] || alphaSpaces.en).test(value);
};

export default alpha_spaces;
