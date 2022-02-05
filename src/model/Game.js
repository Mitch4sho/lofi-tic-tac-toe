export class Game {
    constructor() {
        this.state = {
            currentBoard: [],
            playerTurn: 'X',
            settings: {}
        };

        this.playerInfo = {
            playerName: '',
            playerScore: {
                wins: 0,
                ties: 0,
                losses: 0,
            },
        }
    }

    setGame(settings) {
        this.state.settings = settings;
        this.state.currentBoard = this.createGameBoard();
    }

    createGameBoard() {
        const initialGameBoard = new Array(9).fill(0)
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

    checkState() {

    }
}