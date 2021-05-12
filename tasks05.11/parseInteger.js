/*- Write a function which parses string integers. If it's not possible to
parse, then add null */

function parseInteger(arr) {
  let integers = [];
  arr.map((item) => {
    if (isNaN(item)) {
      integers.push(null);
    } else {
      integers.push(Math.floor(Number(item)));
    }
  });
  return integers;
} // [1, 2, 34];

// [1, null, 2323];
console.log(parseInteger(['1', '2.4', '34', 1.6]));
console.log(parseInteger(['1', 'px', '2323']));
