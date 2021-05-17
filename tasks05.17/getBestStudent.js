// The input is object, which keys are student's names and values are array of their scores. Find the
// student with the best average score.

function getBestStudent(obj) {
  if (typeof obj !== 'object') {
    throw new TypeError(`${obj} is not object.`);
  }
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      let res = obj[key].reduce((acc, item) => acc + item) / obj[key].length;
      obj[key] = res;
    }
  }
  let max = -Infinity;
  let res;
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      if (obj[key] > max) {
        max = obj[key];
        res = [key, obj[key]];
      }
    }
  }
  return `${res[0]} avg = ${res[1]}`;
}

console.log(
  getBestStudent({
    John: [100, 400, 100, 200],
    Bob: [100, 70, 80, 10000],
  })
);
