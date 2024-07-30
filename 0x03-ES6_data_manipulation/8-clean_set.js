export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const result = [];
  set.forEach((s) => {
    if (s.startsWith(startString)) {
      result.push(s.slice(startString.length));
    }
  });
  return result.join('-');
}
