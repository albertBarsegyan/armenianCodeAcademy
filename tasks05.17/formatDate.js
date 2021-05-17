// implement function
// const formatDate = (date) => {
//   return date;
// };

// console.log('Actual output: ', formatDate(new Date('2020-05-14')));
// console.log('Expected output', '14 May 2020');

const formatDate = (date) => {
  let res = new Date(date);
  let mounts = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  res = `${res.getDay() + 1} ${mounts[res.getMonth()]} ${res.getFullYear()}`;

  return res;
};
console.log(formatDate(new Date('2020-05-14')));
