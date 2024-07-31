"use strict";
exports.__esModule = true;
;
;
// function for printing teachers
function printTeacher(firstName, lastName) {
    return firstName[0] + '. ' + lastName;
}
exports.printTeacher = printTeacher;
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    numberOfReports: 17
};
console.log(director1);
console.log(printTeacher(director1.firstName, director1.lastName));
