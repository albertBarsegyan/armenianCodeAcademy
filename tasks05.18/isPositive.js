/* Complete the isPositive function below. It has one integer parameter a . If the value of a is positive, it must
return the string YES. Otherwise, it must throw an Error according to the following rules:
. If a is 0, throw an Error with message = Zero Error.
. If a is negative, throw an Error with message = Negative Error. */
function isPositive(number) {
  let res;
  if (number > 0) {
    res = 'YES';
  } else if (number === 0) {
    throw new Error('Zero error');
  } else {
    throw new Error('Negative error');
  }
  return res;
}

function withTry(number) {
  try {
    if (number < 0) {
      throw new Error('Negative error');
    }
    if (number === 0) {
      throw new Error('Zero error');
    }
  } catch (e) {
    console.log(e.message);
  }
  return number;
}
console.log(withTry(100));
