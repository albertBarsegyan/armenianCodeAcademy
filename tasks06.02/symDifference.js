function symDifference(set1, set2) {
  let merged;
  let longestSet = set1.size >= set2.size ? set1 : set2;
  let shortestSet = set1.size < set2.size ? set1 : set2;
  for (const item of longestSet) {
    if (shortestSet.has(item)) {
      shortestSet.delete(item);
      longestSet.delete(item);
    }
  }
  merged = new Set([...longestSet, ...shortestSet]);
  return merged;
}
let setA = new Set([1, 2, 3, 4]);
let setB = new Set([2, 3]);
let setC = new Set([3, 4, 5, 6]);
console.log(symDifference(setA, setC));
