Array.prototype.sliceV2 = function (start, end) {
  let mainArray = this;
  let result = [];
  let s = start;
  let e = end;
  if (start < 0) {
    s = mainArray.length - Math.abs(start);
  }
  if (end < 0) {
    e = mainArray.length - Math.abs(end);
  }
  for (let i = s; i < e; i++) {
    result.push(mainArray[i]);
  }
  return result;
};
let h = [1, 2, 3, 4];
//  v2 version of slice is faster
let p = h.sliceV2(-4, -8);
console.log(p);

let r = h.slice(1, 3);
console.log(r);
