export default function cleanSet(set, startString) {
  if (startString === '' || set.size === 0) {
    return '';
  }
  const result = [...set]
    .filter((s) => s.startsWith(startString))
    .map((s) => s.slice(startString.length))
    .join('-');

  return result;
}
