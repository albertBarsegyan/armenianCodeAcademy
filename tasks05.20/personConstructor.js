/* Person Constructor
Write a Person Constructor that initializes name and age from arguments.
All instances of Person should initialize with an empty stomach array.
Give instances of Person the ability to .eat("someFood"):
When eating an edible, it should be pushed into the stomach.

The eat method should have no effect if there are 10 items in the stomach.
Give instances of Person the ability to .poop():
When an instance poops, its stomach should empty.
Give instances of Person a method .toString():
It should return a string with name and age. Example: "Mary, 50" */

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
  this.eat = (food) => {
    if (this.stomach.length < 10) {
      this.stomach.push(food);
    } else {
      return 'Must poop';
    }
  };
  this.poop = function () {
    this.stomach = [];
  };
  this.toString = function () {
    return `${this.name}, ${this.age}`;
  };
}
let mike = new Person('Mike', 25);
mike.eat('snickers');
console.log(mike.stomach);
mike.poop();

console.log(mike.toString());
