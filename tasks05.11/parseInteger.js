/*- Write a function which parses string integers. If it's not possible to
parse, then add null */

function parseInteger(arr) {
  let integers = [];
  arr.map((item) => {
    if (Number.isNaN(item)) {
      integers.push(item);
    } else {
      integers.push(NaN);
    }
  });
  return integers;
}

parseInteger(['1', '2', '34']); // [1, 2, 34];
parseInteger(['1', 'px', '2323']); // [1, null, 2323];
