/* Write a recursive function to determine whether all digits of the number are odd or not. */
function evenDigit(num) {
  let res = false;
  while (num) {
    if (num % 2 === 1) {
      res = true;
    }
    num = Math.floor(num / 10);
  }
  return res;
}
// same function recursive
function recEvenDigit(numb) {
  if (!numb) {
    return true;
  }
  if (numb % 2 === 0) {
    return false;
  }

  return recEvenDigit(Math.floor(numb / 10));
}

console.log(recEvenDigit(4211133));
