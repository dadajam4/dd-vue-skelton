export default function integer(value) {
  if (Array.isArray(value)) {
    return value.every(val => /^-?[0-9]+$/.test(String(val)));
  }

  return /^-?[0-9]+$/.test(String(value));
};
