let setA = new Set([1, 2, 3, 4]);
let setB = new Set([2, 3]);
let setC = new Set([3, 4, 5, 6]);

const isSuperset = (set, superSet) => {
  let res = false;

  if (set.size > superSet.size) {
    throw new Error(`${superSet} size must be < than ${set} size`);
  }
  for (const item of set) {
    if (superSet.has(item)) {
      res = true;
    }
  }

  return res;
};
console.log(isSuperset(setA, setB));
