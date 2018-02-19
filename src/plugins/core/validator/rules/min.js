export default function min(value, [length]) {
  if (value === undefined || value === null) {
    return false;
  }
  return String(value).length >= length;
};
