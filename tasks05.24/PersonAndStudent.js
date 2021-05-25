/* Task 3
Write classes: Person class and Student class. Person should have:
*/
//  helper functions
function changeProgramGrade(programsList = [], { programName, grade } = {}) {
  programsList.forEach((program) => {
    if (program.programName === programName) {
      program.grade = grade;
    }
  });
}
// check function
function isAllPassed(programsList = []) {
  if (programsList.every((program) => program.grade !== null)) {
    return true;
  } else {
    return false;
  }
}
class Person {
  constructor({ firstName, lastName, gender, age } = {}) {
    this._firstName =
      typeof firstName !== 'string' ? `${firstName} is not string` : firstName;
    this._lastName =
      typeof lastName !== 'string' ? `${lastName} is not string` : lastName;
    this._gender =
      typeof gender !== 'string' ? `${gender} is not string` : gender;
    this._age = typeof age !== 'number' ? `${age} type is not number` : age;
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
    this._firstName = typeof name !== 'string' ? `${name} is not string` : name;
  }
  set lastName(name) {
    this._lastName = typeof name !== 'string' ? `${name} is not string` : name;
  }
  set gender(gend) {
    this._gender = typeof gend !== 'string' ? `${gend} is not string` : gend;
  }
  set age(a) {
    this._age = typeof a !== 'number' ? `${a} type is not number` : a;
  }
  get age() {
    return this._age;
  }
  get toString() {
    return `${this.firstName} ${this.lastName}, ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(parentArg = {}, year, fee, program = []) {
    super(parentArg);
    this._year = typeof year !== 'number' ? `${year} type is not number` : year;
    this._fee = typeof fee !== 'number' ? `${fee} type is not number` : fee;
    this._program = program;
    this.passExam = function ({ programName, grade } = {}) {
      if (isAllPassed(this.program)) {
        if (this.program.every((prog) => prog.grade >= 50)) {
          this.year -= 1;
          return `You passed your exams and you will learn ${
            this.year
          } year and must pay us $${this.year * this.fee}`;
        } else {
          return 'You are not passed your exams';
        }
      } else {
        changeProgramGrade(this.program, { programName, grade });
      }
    };
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
    return this._program;
  }
  set program(p) {
    this._program = p;
  }
}

// let programs = [
//   {
//     programName: 'math',
//     grade: null,
//   },
//   {
//     programName: 'informatics',
//     grade: null,
//   },
// ];

// let stud = new Student(
//   {
//     firstName: 'Joko',
//     lastName: 'Mini',
//     gender: 'female',
//     age: 20,
//   },
//   4,
//   1000,
//   programs
// );
// // stud.passExam({ programName: 'math', grade: 50 });
// // stud.passExam({ programName: 'informatics', grade: 50 });
// // console.log(stud.passExam({ programName: 'informatics', grade: 20 }));

// // console.log(stud);
