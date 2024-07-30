export default function getStudentsByLocation(myList, city) {
  const newList = myList.filter((item) => item.location === city);
  return newList;
}
