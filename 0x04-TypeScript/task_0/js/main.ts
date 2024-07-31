interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};
const student1: Student {
  firstName: 'David';
  lastName: 'Heavens';
  age: 23;
  location: 'New York';
};
const student2: Student {
  firstName: 'Gabby';
  lastName: 'Blessed';
  age: 25;
  location: 'Florida';
};
const studentsList: Student[] = [student1, student2];

const myTable = document.createElement('table');
studentsList.forEach(student => {
  let row = document.createElement('tr');
  let col1 = document.createElement('td');
  let col2 = document.createElement('td');
  col1.textContent = student.firstName;
  col2.textContent = student.location;
  row.appendChild(col1);
  row.appendChild(col2);
  myTable.appendChild(row);
})