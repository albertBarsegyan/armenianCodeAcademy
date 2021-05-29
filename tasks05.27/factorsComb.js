/* Print all combinations of factors (Ways to factorize) */
/* Write a program to print all the combinations of factors of given number n.*/

function factorsComb(number) {
  let factorsList = [];
  let divider = 2;
  while (number > 1) {
    if (number % divider === 0) {
      factorsList.push(divider);
      number = number / divider;
    } else {
      divider++;
    }
  }
  return factorsList;
}
