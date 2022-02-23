export class Game {
  constructor() {
    this.state = {
      currentBoard: [],
      playerTurn: "X",
      winner: false,
      tie: false,
      won: null,
    };

    this.playerInfo = {
      playerName: "",
    };

    this.playerScore = {
      wins: 0,
      ties: 0,
      losses: 0,
    };

    this.settings = {
      playerPick: "",
      aiPlayer: "",
      gameMode: "",
    };
  }

  setGame() {
    this.state.currentBoard = this.createGameBoard();
    this.state.winner = false;
    this.state.tie = false;
    this.state.playerTurn = "X";
    this.state.won = null;
  }

  resetGame() {
    this.state.currentBoard = [];
    this.state.playerTurn = "X";
    this.state.winner = false;
    this.state.tie = false;
    this.settings = {
      playerPick: "",
      aiPlayer: "",
      gameMode: "",
    };
  }

  createGameBoard() {
    const initialGameBoard = Array.from(Array(9).keys());
    return initialGameBoard;
  }

  update(idx, player) {
    let board = this.state.currentBoard;
    board[idx] = player;
    this.state.playerTurn = player === "X" ? "O" : "X";
  }

  checkValidMove(idx) {
    return typeof this.state.currentBoard[idx] === "number";
  }

  checkWinner(a, b, c) {
    return (
      this.state.currentBoard[a] === this.state.currentBoard[b] &&
      typeof this.state.currentBoard[a] !== "number" &&
      typeof this.state.currentBoard[b] !== "number" &&
      this.state.currentBoard[a] === this.state.currentBoard[c] &&
      typeof this.state.currentBoard[a] !== "number" &&
      typeof this.state.currentBoard[c] !== "number"
    );
  }

  checkForTie() {
    let tie = true;
    this.state.currentBoard.forEach((el) => {
      if (typeof el === "number") tie = false;
    });

    return tie;
  }

  checkState() {
    let tie = this.checkForTie();
    let winner =
      this.checkWinner(0, 1, 2) || // check for 3-in-a-row horizontally
      this.checkWinner(3, 4, 5) ||
      this.checkWinner(6, 7, 8) ||
      this.checkWinner(0, 3, 6) || // check for 3-in-a-row vertically
      this.checkWinner(1, 4, 7) ||
      this.checkWinner(2, 5, 8) ||
      this.checkWinner(0, 4, 8) || // check for 3-in-a-row diagonally
      this.checkWinner(6, 4, 2);

    if (tie) this.state.tie = tie;
    if (winner) this.state.winner = winner;
  }

  updateWinnings() {
    this.playerScore.wins += 1;
  }

  updateLosses() {
    this.playerScore.losses += 1;
  }

  updateTies() {
    this.playerScore.ties += 1;
  }

  updateWinner(player) {
    this.state.won = player;
  }
}
