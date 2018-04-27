export default function createRange(length, offset) {
  return [...Array.from({ length }, (v, k) => k + offset)]
}
