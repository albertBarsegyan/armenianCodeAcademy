function groupBy(array, condition) {
  let res = array.reduce((acc, item, index, arr) => {
    let groupItem = condition(item);
    if (acc.hasOwnProperty(groupItem)) {
      acc[groupItem].push(item);
    } else {
      acc[groupItem] = [item];
    }
    return acc;
  }, {});
  return res;
}
console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
