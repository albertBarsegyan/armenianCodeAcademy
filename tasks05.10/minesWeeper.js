// Make n / n  size desk
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
      let randX = Math.floor(Math.random() * borderSize);
      let randY = Math.floor(Math.random() * borderSize);
      let rand = [randY, randX];
      //if we do not have this number in our array, we will add it
      if (
        !mines.some((item) => {
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
//  Show board
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
  //  Set mines count
  let mines = randomMines(5, board.length);
  mines.forEach((item, i) => {
    board[item[0]][item[1]] = '*';
  });
  // Show board on every step
  printBoard(board);

  let i = 0;
  while (i < Math.pow(board.length, 2) - mines.length) {
    let randX = Math.round(Math.random() * (board.length - 1));
    let randY = Math.round(Math.random() * (board.length - 1));

    if (board[randY][randX] === '*') {
      console.log(`Mine was in ${randX},${randY}`);
      return 'You damaged';
    } else {
      board[randY][randX] = neighborMinesCount([randX, randY], '*', board);
      printBoard(board);
    }
    i++;
  }

  return 'Congratulation you won';
}

// coordinates -> [x,y]
function neighborMinesCount(coordinates, mineSymbol, board) {
  if (!Array.isArray(coordinates)) {
    throw new TypeError(coordinates + 'is not array');
  }
  //  y ,x
  let neighbors = [
    [coordinates[1] - 1, coordinates[0] - 1],
    [coordinates[1] - 1, coordinates[0]],
    [coordinates[1] - 1, coordinates[0] + 1],
    [coordinates[1], coordinates[0] + 1],
    [coordinates[1] + 1, coordinates[0] + 1],
    [coordinates[1] + 1, coordinates[0]],
    [coordinates[1] + 1, coordinates[0] - 1],
    [coordinates[1], coordinates[0] - 1],
  ];
  let minesCount = 0;
  neighbors.forEach((item) => {
    try {
      //  If board doesn't contain coordinate
      board[item[0]][item[1]];
    } catch (error) {
      return;
    }
    if (board[item[0]][item[1]] === mineSymbol) {
      minesCount++;
    }
  });
  if (minesCount === 0) {
    // neighbors[coordinates[1]][coordinates[0]] = 'V';
    neighbors.forEach((item) => {
      try {
        //  If board doesn't contain coordinate
        board[item[0]][item[1]];
      } catch (error) {
        return;
      }
      board[item[0]][item[1]] = 'V';
    });
  } else {
    return minesCount;
  }
}

let b = makeDesk(5);
console.log(runMinesWeeper(b));
