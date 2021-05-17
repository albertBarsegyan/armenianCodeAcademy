let january = new Date(2017, 0, 1);
let march = new Date(2015, 0, 1);

function monthsInterval(firstDate, secondDate) {
  let mounts = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ];

  let mountsCount = 0;
  let count = 0;
  let start;
  let firstDateInfo = [firstDate.getFullYear(), firstDate.getMonth()];
  let secondDateInfo = [secondDate.getFullYear(), secondDate.getMonth()];
  let res = [];
  if (
    Object.prototype.toString.call(firstDate) !== '[object Date]' ||
    Object.prototype.toString.call(secondDate) !== '[object Date]'
  ) {
    throw new TypeError(`${firstDate} or ${secondDate} is not date object`);
  }
  if (firstDate < secondDate) {
    start = firstDate.getMonth();

    mountsCount =
      12 * (secondDateInfo[0] - firstDateInfo[0]) +
      secondDateInfo[1] -
      firstDateInfo[1];
  } else {
    start = secondDate.getMonth();
    console.log(firstDateInfo[1] - secondDateInfo[1]);
    mountsCount =
      (firstDateInfo[0] - secondDateInfo[0]) * 12 +
      firstDateInfo[1] -
      secondDateInfo[1];
  }
  for (let i = start; i <= mountsCount; i++) {
    if (count > 11) {
      count = 0;
    }
    res.push(mounts[count++]);
  }
  return res;
}

console.log(monthsInterval(march, january));
