let arr = [1, 2, 3, 4, 5, 1, 6, 7, 8];
let i = arr.reduce((acc, item, i, array) => {
  acc[item]++;

  return acc;
}, {});
console.log(i);

function makeBoard(size) {
  let board = [];
  let row = [];
  for (let i = 0; i < size; i++) {
    row.push('_');
  }
  for (let i = 0; i < size; i++) {
    board.push(row);
  }
  return board;
}
console.log(makeBoard(5));
