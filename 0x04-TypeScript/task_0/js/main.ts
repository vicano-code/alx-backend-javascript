interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};
const student1: Student = {
  firstName: 'David',
  lastName: 'Heavens',
  age: 23,
  location: 'New York',
};
const student2: Student = {
  firstName: 'Gabby',
  lastName: 'Blessed',
  age: 25,
  location: 'Florida',
};
const studentsList: Array<Student> = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const th1: HTMLTableCellElement = document.createElement('th');
const th2: HTMLTableCellElement = document.createElement('th');

table.style.border = '1px solid gray';
table.style.borderCollapse = 'collapse';

th1.innerText = 'First Name';
th2.innerText = 'Location';
thead.append(th1);
thead.append(th2);
table.append(thead);

studentsList.forEach((student) => {
  let row: HTMLTableRowElement = document.createElement('tr');
  let col1: HTMLTableCellElement = document.createElement('td');
  let col2: HTMLTableCellElement = document.createElement('td');
  col1.innerText = student.firstName;
  col2.innerText = student.location;
  row.append(col1);
  row.append(col2);
  table.append(row);

  col1.style.border = '1px solid gray';
  col2.style.border = '1px solid gray';
});

body.append(table)