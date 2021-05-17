/* Write a function that, given a date (in the format MM/DD/YYYY),returns the day of the week as a string.
Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday", "Wednesday",
"Thursday", "Friday", or "Saturday".*/

function getDay(string) {
  let date = string.split('/');
  let days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  let endDate = new Date(Number(date[2]), Number(date[0]) - 1, Number(date[1]));
  return days[endDate.getDay()];
}
