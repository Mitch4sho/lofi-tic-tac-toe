export class Game {
    constructor() {
        this.gameState = {
            currentGame: [],
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
        this.gameState.settings = settings;
    }
}