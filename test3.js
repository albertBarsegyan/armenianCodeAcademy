var gcd = function (first, second) {
  if (!second) {
    return first;
  }

  return gcd(second, first % second);
};
// console.log(gcd(2154, 458));

function getPrimeList(number, primeList = []) {
  if (number <= 1) {
    return primeList;
  }
  let divider = 2;
  while (divider <= 7) {
    if (number % divider === 0) {
      primeList.push(divider);
      break;
    } else {
      divider++;
    }
  }
  if (number % primeList[primeList.length - 1] !== 0) {
    primeList.push(number);
    return primeList;
  }
  return getPrimeList(number / primeList[primeList.length - 1], primeList);
}
console.log(getPrimeList(101));
