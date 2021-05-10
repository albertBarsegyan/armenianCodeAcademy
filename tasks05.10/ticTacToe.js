// let board = [
//   ['x', '_', 'y'],
//   ['_', 'y', '_'],
//   ['y', '_', '_'],
// ];

// Make random board
function makeBoard(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {}
  }
  return board;
}
// check if win
function checkIfWin(gameBoard) {
  let arr = [];
  let winner;
  for (const item of gameBoard) {
    arr.push(
      item.every((element, i, arr) => element === arr[0] && element !== '_')
    );
  }
  if (arr.includes(true)) {
    winner = gameBoard[arr.indexOf(true)][0];
  }
  arr = [];
  let res = [];
  if (!winner) {
    for (let i = 0; i < gameBoard.length; i++) {
      let element = [];
      for (let j = 0; j < gameBoard.length; j++) {
        element.push(gameBoard[j][i]);
      }
      arr.push(element);
    }
    for (const group of arr) {
      if (group.every((item, i, arr) => item === arr[0] && arr[0] !== '_')) {
        res.push(true);
      } else {
        res.push(false);
      }
    }
    arr = res;
    if (arr.includes(true)) {
      winner = gameBoard[0][arr.indexOf(true)];
    }
  }
  arr = [];
  let diagonal1 = [];
  let diagonal2 = [];

  if (!winner) {
    for (let i = 0; i < gameBoard.length; i++) {
      diagonal1.push(gameBoard[i][i]);
      diagonal2.push(gameBoard[i][gameBoard.length - i - 1]);
    }
    if (diagonal1.every((item, i, arr) => item === arr[0] && item !== '_')) {
      winner = gameBoard[0][0];
    } else if (
      diagonal2.every((item, i, arr) => item === arr[0] && item !== '_')
    ) {
      winner = gameBoard[0][gameBoard.length - 1];
    }
  }
  return winner ?? false;
}

function theGame(board) {
  //   let board = makeBoard(3);
  let boardSize = 0;
  let turn = true;
  if (Array.isArray(board)) {
    boardSize = board.length;
  }

  let start = 0;
  while (start < boardSize * boardSize) {
    let x = Math.floor(Math.random() * boardSize);
    let y = Math.floor(Math.random() * boardSize);
    if (board[x][y] === '_') {
      if (turn) {
        board[x][y] = 'X';
        start++;
        printBoard(board);
        if (checkIfWin(board)) {
          let win = checkIfWin(board);
          console.log(`Winner is  ${win}`);
          return;
        }
        theGame(board);
        turn = false;
      } else {
        board[x][y] = 'O';
        turn = true;
        start++;
        printBoard(board);
        if (checkIfWin(board)) {
          let win = checkIfWin(board);
          console.log(`Winner is  ${win}`);
          return;
        }
        theGame(board);
      }
    } else {
      theGame(board);
      printBoard(board);
      start++;
    }
    //   } else {
    //     printBoard(board);
    //     if (!checkIfWin(board)) {
    //       return 'Draw';
    //     } else {
    //       console.log(checkIfWin(board));
    //     }
  }
}

let gameSize = makeBoard(3);

theGame(gameSize);
// Print board
function printBoard(board) {
  console.log(
    board[0].join('   ') +
      '\n' +
      board[1].join('   ') +
      '\n' +
      board[2].join('   ') +
      '\n'
  );
}
