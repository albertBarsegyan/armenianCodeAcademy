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
  constructor(year, fee, program = []) {
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
    set passExam(programName, grade) {
        
    }
}
