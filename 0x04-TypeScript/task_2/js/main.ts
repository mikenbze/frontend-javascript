// task_2/js/main.ts

// Director interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Teacher interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Function to create an employee
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Type predicate
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// executeWork function
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// String literal type
type Subjects = 'Math' | 'History';

// teachClass function
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
}

// Testing previous functions
console.log(executeWork(createEmployee(200)));      // Getting to work
console.log(executeWork(createEmployee(1000)));     // Getting to director tasks

// Testing teachClass
console.log(teachClass('Math'));      // Teaching Math
console.log(teachClass('History'));   // Teaching History

