export function aiMoves(board, huPlayer, aiPlayer) {
  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  function checkWin(board, player) {
    let plays = board.reduce((a, e, i) => (e === player ? a.concat(i) : a), []);
    let gameWon = null;

    for (let [index, win] of winCombos.entries()) {
      if (win.every((elem) => plays.indexOf(elem) > -1)) {
        gameWon = { index: index, player: player };
        break;
      }
    }

    return gameWon;
  }

  function emptySquares(board) {
    return board.filter((s) => typeof s === "number");
  }

  function miniMax(newBoard, player) {
    let availSpots = emptySquares(newBoard);
    // console.log({availSpots})

    if (checkWin(newBoard, huPlayer)) {
      // console.log('human won')
      return { score: -10 };
    } else if (checkWin(newBoard, aiPlayer)) {
      // console.log('ai player won')
      return { score: 10 };
    } else if (availSpots.length === 0) {
      // console.log('noone won')
      return { score: 0 };
    }

    let moves = [];

    for (let i = 0; i < availSpots.length; i++) {
      let move = {};
      move.index = newBoard[availSpots[i]];
      newBoard[availSpots[i]] = player;
      // console.log({move, newBoard})
      if (player === aiPlayer) {
        // console.log('player')
        let result = miniMax(newBoard, huPlayer);
        // console.log({result})
        move.score = result.score;
      } else {
        // console.log('ai')
        let result = miniMax(newBoard, aiPlayer);
        // console.log({result})
        move.score = result.score;
      }

      newBoard[availSpots[i]] = move.index;

      moves.push(move);
    }

    let bestMove;
    if (player === aiPlayer) {
      let bestScore = -Infinity;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }

    return moves[bestMove];
  }

  return miniMax(board, aiPlayer);
}
