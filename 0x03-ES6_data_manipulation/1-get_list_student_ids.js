export default function getListStudentIds(arr) {
  if (!(Array.isArray(arr))) {
    return [];
  }
  const myIds = arr.map((obj) => obj.id);
  return myIds;
}
