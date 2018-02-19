import isIP from 'validator/lib/isIP';

export default function ip(value, [version] = [4]) {
  if (Array.isArray(value)) {
    return value.every(val => isIP(val, [version]));
  }

  return isIP(value, version);
};
