export default function createIteratorObject(report) {
  const names = Object.values(report.allEmployees).flat();
  return names;
}
