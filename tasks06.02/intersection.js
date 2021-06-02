let setA = new Set([1, 2, 3, 4]);
let setB = new Set([2, 3]);
let setC = new Set([3, 4]);

const intersection = (setA, setB) => {
  let total = [];
  for (const item of setA) {
    if (setB.has(item)) {
      total.push(item);
    }
  }
  return total;
};
console.log(intersection(setA, setB));
console.log(intersection(setA, setC));
