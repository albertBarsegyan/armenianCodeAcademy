/* find the factorial of a given natural N.*/

function recFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * recFactorial(n - 1);
}
console.log(recFactorial(5));
