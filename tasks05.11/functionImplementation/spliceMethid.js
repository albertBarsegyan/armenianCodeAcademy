Array.prototype.spliceImmutable = function (start, deleteCount = 0, ...items) {
  let mainArray = this;
  let result = [];
  let addItems = [];
  let s = start;
  let del = deleteCount;

  if (s > mainArray.length) {
    s = mainArray.length;
  }
  if (start + mainArray.length < 0) {
    start = 0;
  }
  if (del >= array.length - start) {
    this.length = 0;
  }
  for (let i = 0; i < mainArray.length; i++) {
    if (i < start + del) {
      this[i];
    }
  }
};

let arr = [1, 2, 3];
// console.log(arr.spliceImmutable(1, 2, 'hello'));

let val = arr.splice(1, 1, 'help');
console.log(val);
console.log(arr);
