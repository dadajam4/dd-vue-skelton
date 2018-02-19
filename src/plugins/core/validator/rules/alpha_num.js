import { alphanumeric } from './alpha_helper';

const alpha_num = function alpha_num(value, [locale] = [null]) {
  if (Array.isArray(value)) {
    return value.every(val => alpha_num(val, [locale]));
  }

  // Match at least one locale.
  if (! locale) {
    return Object.keys(alphanumeric).some(loc => alphanumeric[loc].test(value));
  }

  return (alphanumeric[locale] || alphanumeric.en).test(value);
};

export default alpha_num;
