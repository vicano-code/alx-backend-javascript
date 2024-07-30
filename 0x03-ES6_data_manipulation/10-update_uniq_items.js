export default function updateUniqueItems(myMap) {
  myMap.forEach((value, key, map) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
  return myMap;
}
