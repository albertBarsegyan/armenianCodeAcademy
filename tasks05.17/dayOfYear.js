/* Each year has 365 or 366 days. Given a string date representing a Gregorian calendar date formatted as
month/day/year,return the day-number of the year. All input strings in the tests are valid dates.*/

function dayOfYear(string) {
  let date = string.split('/');
  let startDate = new Date(Number(date[2]), 0, 0);
  let endDate = new Date(Number(date[2]), Number(date[0]) - 1, Number(date[1]));
  return (endDate - startDate) / (1000 * 60 * 60 * 24);
}

console.log(dayOfYear('11/16/2020'));
