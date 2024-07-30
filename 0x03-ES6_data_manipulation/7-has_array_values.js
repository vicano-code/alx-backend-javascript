export default function hasValuesFromArray(set, array) {
  const r = array.map((val) => set.has(val));
  for (const i of r) {
    if (i === false) return false;
  }
  return true;
}
