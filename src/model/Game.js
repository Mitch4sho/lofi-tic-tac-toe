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

    checkState() {

    }
}