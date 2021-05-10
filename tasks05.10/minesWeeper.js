// Make n size desk
function makeDesk(size) {
  let desk = [];
  for (let i = 0; i < size; i++) {
    desk.push([]);
    for (let j = 0; j < size; j++) {
      desk[i][j] = 0;
    }
  }
  return desk;
}

function randomMines(count, borderSize) {
  //we need to store these numbers somewhere
  const mines = [];
  let counter = 0;
  //how many times we added a valid number (for if statement later)

  //we will be generating random numbers until we are satisfied
  if (counter < borderSize * borderSize) {
    while (true) {
      //create that number
      let randx = Math.floor(Math.random() * borderSize);
      let randy = Math.floor(Math.random() * borderSize);
      let rand = [randx, randy];
      //if we do not have this number in our array, we will add it
      if (
        !mines.some((item, i, array) => {
          if (item.toString() === rand.toString()) {
            return true;
          }
          return false;
        })
      ) {
        mines.push(rand);
        counter++;
      }

      //if we have enought of numbers, we do not need to generate them anymore
      if (counter >= count) {
        break;
      }
    }
  } else {
    throw new Error('count must be less than border size cube');
  }
  //now hand over this stuff
  return mines;
}

function printBoard(board) {
  let gameBoard = '';
  for (let i = 0; i < board.length; i++) {
    gameBoard += '\n' + board[i].join('  ') + '\n';
  }

  console.log(gameBoard);

  return;
}

// // Running game
function runMinesWeeper(board) {
  let mines = randomMines(1, board.length);
  mines.forEach((item, i) => {
    board[item[0]][item[1]] = '*';
  });
  printBoard(board);
  let i = 0;
  while (i < Math.pow(board.length, 2) - mines.length) {
    let randX = Math.round(Math.random() * (board.length - 1));
    let randY = Math.round(Math.random() * (board.length - 1));

    if (board[randX][randY] === '*') {
      console.log(`Mine was in ${randX},${randY}`);
      return 'You damaged';
    } else {
      board[randX][randY] = 1;
      printBoard(board);
    }
    i++;
  }
  return 'Congratulation you won';
}
let b = makeDesk(5);
console.log(runMinesWeeper(b));
