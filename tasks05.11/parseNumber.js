/* - Given an array, return a new array that only includes the numbers. */

function parseNumber(arr) {
  let number = [];
  arr.map((item) => {
    if (typeof item === 'number' && Boolean(item)) {
      number.push(item);
    }
  });

  return number;
}

const arr = [
  1,
  2,
  'a',
  true,
  {},
  undefined,
  0,
  55,
  false,
  'hi',
  null,
  166,
  NaN,
];
// [1, 2, 55, 166]
console.log(parseNumber(arr));
