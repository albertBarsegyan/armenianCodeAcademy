function getHead(arr) {
  return arr[0];
}
function getTail(arr) {
  arr.splice(0, 1);
  return arr;
}
function getTailV2(arr) {
  let [, ...a] = arr;
  return a;
}
// console.log(getTailV2([1, 2, 3, 4]));
