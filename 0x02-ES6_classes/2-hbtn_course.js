export default class HolbertonCourse {
  constructor(name, length, students) {
    // Validate name is a string
    if (typeof name !== 'string') throw TypeError('name must be a string');
    // Validate length is a number
    if (typeof length !== 'number') throw TypeError('length must be a number');
    // Validate that students is an array of strings
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw TypeError('students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // get attributes
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // set attributes
  set name(newName) {
    if (typeof newName !== 'string') throw TypeError('name must be a string');
    this._name = newName;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') throw TypeError('length must be a number');
    this._name = newLength;
  }

  set students(newStudents) {
    if (!Array.isarray(newStudents) || !newStudents.every((student) => typeof student === 'string')) {
      throw TypeError('students must be an array of strings');
    }
    this._students = newStudents;
  }
}
