export function aiMoves(currBoard, huPlayer, aiPlayer) {
  const origBoard = currBoard;
  const ai = aiPlayer;
  const human = huPlayer;
  const n = 3;
  const difficulties = [20, 15, 10, 5, 1, 0];
  // let difficulty = 5;

  // create a 2D board to work with
  function createBoard() {
    let i = 0;
    let board = [];

    for (let row = 0; row < 3; row++) {
      let currRow = [];
      for (let col = 0; col < 3; col++) {
        if (typeof origBoard[i] !== "number") {
          currRow.push(origBoard[i]);
        } else {
          currRow.push("");
        }
        i += 1;
      }
      board.push(currRow);
    }

    return board;
  }
  const board = createBoard();

  function bestMove() {
    // AI to make its turn
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // Is the spot available?
        if (board[i][j] === "") {
          board[i][j] = ai;
          let score = minimax(board, 0, false);
          if (score > bestScore) {
            bestScore = score;
            move = { i, j };
          }
        }
      }
    }
    if (!move) return [null, null];
    return [move.i, move.j];
  }

  let scores = {
    X: 10,
    O: -10,
    tie: 0,
  };

  function minimax(board, depth, isMaximizing) {
    let result = checkWinner();
    if (result !== null) {
      return scores[result];
    }

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          // Is the spot available?
          if (board[i][j] == "") {
            board[i][j] = ai;
            let score =
              minimax(board, depth + 1, false) +
              Math.random(-difficulties[0], difficulties[0]);
            board[i][j] = "";
            bestScore = Math.max(score, bestScore);
          }
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          // Is the spot available?
          if (board[i][j] === "") {
            board[i][j] = human;
            let score =
              minimax(board, depth + 1, true) +
              Math.random(-difficulties[0], difficulties[0]);
            board[i][j] = "";
            bestScore = Math.min(score, bestScore);
          }
        }
      }
      return bestScore;
    }
  }

  function checkWin(board) {
    let first = board[0][0];
    let diagonal = first !== "";
    let n = board.length;

    for (let i = 0; i < n; i++) {
      if (board[i][i] !== first) {
        diagonal = false;
        break;
      }
    }
    if (diagonal) return first;

    first = board[0][n - 1];
    let back_diag = first !== "";
    for (let i = 1; i <= n; i++) {
      if (board[i - 1][n - i] !== first) {
        back_diag = false;
        break;
      }
    }
    if (back_diag) return first;

    for (let i = 0; i < n; i++) {
      first = board[i][0];
      let sideways = first !== "";
      for (let j = 0; j < n; j++) {
        if (board[i][j] !== first) {
          sideways = false;
          break;
        }
      }
      if (sideways) return first;
    }

    for (let i = 0; i < n; i++) {
      first = board[0][i];
      let sideways = first !== "";
      for (let j = 0; j < n; j++) {
        if (board[j][i] !== first) {
          sideways = false;
          break;
        }
      }
      if (sideways) return first;
    }

    let openSpots = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === "") {
          openSpots++;
        }
      }
    }

    if (openSpots === 0) {
      return "tie";
    }

    return null;
  }

  function checkWinner() {
    return checkWin(board);
  }

  // converted index from 2D to 1D array
  function converted() {
    const [i, j] = bestMove();
    let el = origBoard[i * n + j];
    let index = origBoard.indexOf(el);
    return index;
  }

  return converted();
}
