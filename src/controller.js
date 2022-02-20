import { Game } from "./model/Game";

let gameState = new Game();

export function startNewGame(settings) {
    gameState.setGame();
    gameState.settings = settings;
    const state = gameState.state;
    const playerInfo = gameState.playerInfo;
    const playerScore = gameState.playerScore;
    return {state, playerInfo, playerScore};
}

export function boardUpdater(idx) {
    let validMove = gameState.checkValidMove(idx);
    let player = gameState.state.playerTurn;

    if (validMove) {
        gameState.update(idx, player);
        gameState.checkState();
    }
    console.log('updating',{gameState})

    if (gameState.state.winner) {
        if (gameState.state.playerTurn !== gameState.settings.playersPick) {
            gameState.updateWinnings();
        } else {
            gameState.updateLosses();
        }
    }

    if (gameState.state.tie) {
        gameState.updateTies();
    }

    return gameState;
}

export function restartGame() {
    gameState.resetGame();
    return gameState.state.currentBoard;
}

