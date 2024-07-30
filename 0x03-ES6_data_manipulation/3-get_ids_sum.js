export default function getStudentIdsSum(myList) {
  const sumIds = myList.reduce(
    (accumulator, item) => accumulator + item.id,
    0,
  );
  return sumIds;
}
