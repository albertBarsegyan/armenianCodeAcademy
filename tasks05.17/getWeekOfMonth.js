// Implement following function
const getWeekOfMonth = (date) => {
  return Math.floor(date.getDate() / 7);
};

console.log(getWeekOfMonth(new Date(2017, 10, 30)));
// console.log(new Date(2017, 11, 9));
