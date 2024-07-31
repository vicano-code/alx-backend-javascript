// Define the Teacher interface
export interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
} ;

// Define the Directors interface that extends Teacher
export interface Directors extends Teacher {
  numberOfReports: number;
};

// interface for printTeacher function
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// function for printing teachers
export function printTeacher(firstName: string, lastName: string): printTeacherFunction {
  return `${firstName[0]}. ${lastName}`;
}

// interface for Student constructor
export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the Student class
export interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
