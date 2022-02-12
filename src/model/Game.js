export class Game {
    constructor() {
        this.state = {
            currentBoard: [],
            playerTurn: "X",
            winner: false,
            tie: false,
            settings: {},
        };

        this.playerInfo = {
            playerName: "",
            playerScore: {
                wins: 0,
                ties: 0,
                losses: 0,
            },
        };
    }

    setGame(settings) {
        this.state.settings = settings;
        this.state.currentBoard = this.createGameBoard();
        this.state.winner = false;
        this.state.tie = false;
        this.state.playerTurn = "X";
    }

    resetGame() {
        this.state.currentBoard = [];
        this.state.playerTurn = "X";
        this.state.winner = false;
        this.state.tie = false;
        this.state.settings = {};
    }

    createGameBoard() {
        const initialGameBoard = new Array(9).fill(0);
        return initialGameBoard;
    }

    update(idx, player) {
        let board = this.state.currentBoard;
        board[idx] = player;
        this.state.playerTurn = player === "X" ? "O" : "X";
    }

    checkValidMove(idx) {
        return this.state.currentBoard[idx] === 0;
    }

    checkWinner(a, b, c) {
        return (
            this.state.currentBoard[a] === this.state.currentBoard[b] &&
            this.state.currentBoard[a] !== 0 &&
            this.state.currentBoard[b] !== 0 &&
            this.state.currentBoard[a] === this.state.currentBoard[c] &&
            this.state.currentBoard[a] !== 0 &&
            this.state.currentBoard[c] !== 0
        );
    }

    checkForTie() {
        let tie = true;
        this.state.currentBoard.forEach((el) => {
            if (el === 0) tie = false;
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
}
