/* Person
Create a method in the Person class which returns how another person's age compares. Given the instances
p1, p2 and p3, which will be initialized with the attributes name and age,return a sentence in the following
format:
{other person name} is {older than / younger than / the same age as} me.*/

function Person(name, age) {
  this.name = name;
  this.age = age;

  function compareAge(obj) {
    if (this.age > obj.age) {
      return `${obj.name} is younger than me.`;
    }
    if (this.age === obj.age) {
      return `${obj.name} is the same age as me.`;
    }
    if (this.age < obj.age) {
      return `${obj.name} is older than me.`;
    }
  }
  return {
    compareAge,
    name: this.name,
    age: this.age,
  };
}

const p1 = Person('Samuel', 24);
const p2 = Person('Joel', 36);
const p3 = Person('Lily', 24);

console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p1.compareAge(p3));
//  ➞ "Joel is older than me."
//  ➞ "Samuel is younger than me."
//  ➞ "Lily is the same age as me."
