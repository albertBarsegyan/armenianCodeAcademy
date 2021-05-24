/* Author should have:
fields
name
email
gender
methods
getters forfields
toString()*/

class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
    this.toString = function () {
      return `Ms. ${this.name}`;
    };
  }
  get name() {
    return this._name;
  }
  get email() {
    return this._email;
  }
  get gender() {
    return this._gender;
  }
}

let auth = new Author('Mike', '@', 'male');
console.log(auth.toString());
