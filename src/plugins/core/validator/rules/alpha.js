import { alpha as helper_alpha } from './alpha_helper';

const alpha = function alpha(value, [locale] = [null]) {
  if (Array.isArray(value)) {
    return value.every(val => alpha(val, [locale]));
  }

  // Match at least one locale.
  if (!locale) {
    return Object.keys(helper_alpha).some(loc => helper_alpha[loc].test(value));
  }

  return (helper_alpha[locale] || helper_alpha.en).test(value);
};

export default alpha;
