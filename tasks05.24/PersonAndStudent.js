/* Task 3
Write classes: Person class and Student class. Person should have:
fields
firstName
lastName
gender

README.md 5/24/2021

3 / 5

age
methods
getters forfields
setters forfields
toString() */

class Person {
  constructor({ firstName, lastName, gender, age } = {}) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get gender() {
    return this._gender;
  }
  set firstName(name) {
    this._firstName = name;
  }
  set lastName(name) {
    this._lastName = name;
  }
  set gender(gend) {
    this._gender = gend;
  }
  get age() {
    return this._age;
  }
  get toString() {
    return `${this.firstName} ${this.lastName}, ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(year, fee, program, ...parentArgs) {
    super(...parentArgs);
    this._year = year;
    this._fee = fee;
    this._program = program;
  }
  get year() {
    return this._year;
  }
  set year(y) {
    this._year = y;
  }
  get fee() {
    return this._fee;
  }
  set fee(f) {
    this._fee = f;
  }
  get program() {
    return this.this._program;
  }
  set program(p) {
    this._program = p;
  }
  set passExam({ programName, grade } = {}) {
    if (isAllPassed(program)) {
      if (this.program.every((prog) => prog.grade >= 50)) {
        this.year -= 1;
      } else {
        return 'You are not passed your exams';
      }
    } else {
      changeProgramGrade(this.program, { programName, grade });
    }
  }
}
function changeProgramGrade(arr, { itemName, grade }) {
  arr.forEach((item) => {
    if (item.programName === itemName) {
      item.grade = grade;
    }
  });
}

function isAllPassed(programsList = []) {
  if (programsList.every((program) => program.grade !== null)) {
    return true;
  } else {
    return false;
  }
}

let programs = [
  {
    programName: 'math',
    grade: null,
  },
  {
    programName: 'informatics',
    grade: null,
  },
];

let stud = new Student(2020, 1000, programs, {
  firstName: 'Mike',
  lastName: 'Johnson',
  gender: 'male',
  age: 25,
});
console.log(stud);
