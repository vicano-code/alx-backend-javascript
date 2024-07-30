export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const checkGrade = newGrades.find((grade) => grade.studentId === student.id);
      return { ...student, grade: checkGrade ? checkGrade.grade : 'N/A' };
    });
}
