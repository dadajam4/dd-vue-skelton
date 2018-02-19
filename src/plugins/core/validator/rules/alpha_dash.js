import { alphaDash } from './alpha_helper';

const alpha_dash = function alpha_dash(value, [locale] = [null]) {
  if (Array.isArray(value)) {
    return value.every(val => alpha_dash(val, [locale]));
  }

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alphaDash).some(loc => alphaDash[loc].test(value));
  }

  return (alphaDash[locale] || alphaDash.en).test(value);
};

export default alpha_dash;
