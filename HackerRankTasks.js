function generateVal(len) {
  let res = [];
  let count = 1;
  for (let i = 0; i < len; i++) {
    let row = [];
    for (let j = 0; j < len; j++) {
      row.push(j + 1 * count);
    }
    count += len;
    res.push(row);
  }
  return res;
}
