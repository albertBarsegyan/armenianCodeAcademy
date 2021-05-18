/* Convert the code using try...catch.

function reverseString(s) {
typeof s !== "string"
? console.log("s.split is not a function")
: (s = s.split("").reverse().join(""));
console.log(s);
} */
function reverseString(s) {
  let res = s.split('').reverse().join('');

  try {
    res;
  } catch (e) {
    console.log(res + 'is not function');
  }
  return res;
}
console.log(reverseString(00));
