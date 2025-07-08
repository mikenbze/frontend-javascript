// task_1/js/main.ts

// ------------------------------
// 1. Teacher Interface & Example
// ------------------------------

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log('Teacher object:', teacher3);

// -------------------------
// 2. Directors Interface
// -------------------------

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log('Director object:', director1);

// --------------------------------------
// 3. printTeacher Function + Interface
// --------------------------------------

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log('printTeacher output:', printTeacher("John", "Doe"));
console.log('printTeacher output:', printTeacher("Alice", "Smith"));

// --------------------------------------
// 4. StudentClass Interfaces & Class
// --------------------------------------

// Interface for class methods
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Interface describing the class constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Class implementing StudentClassInterface
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Confirm constructor matches interface
const StudentClassConstructor: StudentConstructor = StudentClass;

// Example usage:
const student = new StudentClassConstructor("Alice", "Smith");
console.log('Student displayName:', student.displayName()); // Alice
console.log('Student workOnHomework:', student.workOnHomework()); // Currently working
