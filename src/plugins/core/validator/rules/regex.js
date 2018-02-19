export default function regex(value, [regex, ...flags]) {
  if (regex instanceof RegExp) {
    return regex.test(value);
  }

  return new RegExp(regex, flags).test(String(value));
};
