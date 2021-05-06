/* 3. Write a function thatreturns an anonymous function, which transforms its input by adding a particular
suffix at the end. */
function addSuffix(suffix) {
  return function (string) {
    return string + suffix;
  };
}

let suffix = addSuffix('ly');
console.log(suffix('hello'));
