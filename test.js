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
