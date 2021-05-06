/* Write a function redundant that takes in a string str and returns a function that returns str. */

// with arrow function
const redundant = (string) => () => {
  return string;
};

// with function declaration
function redund(string) {
  function returner() {
    return string;
  }

  return returner;
}
let b = redundant('hi');
let a = redund('123');
