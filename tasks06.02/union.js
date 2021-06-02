function union(set1, set2) {
  for (const item of set2) {
    set1.add(item);
  }
  return set1;
}
let setA = new Set([1, 2, 3, 4]);
// let setB = new Set([2, 3]);
let setB = new Set([6, 7, 8, 9]);
console.log(union(setA, setB));
