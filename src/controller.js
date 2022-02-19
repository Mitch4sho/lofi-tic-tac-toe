import { Game } from "./model/Game";

let gameState = new Game();

export function startNewGame(settings) {
    gameState.setGame(settings);
    const state = gameState.state;
    const playerInfo = gameState.playerInfo;
    return {state, playerInfo};
}

export function boardUpdater(idx) {
    let validMove = gameState.checkValidMove(idx);
    let player = gameState.state.playerTurn;

    if (validMove) {
        gameState.update(idx, player);
        gameState.checkState();
    }

    return gameState.state;
}

export function restartGame() {
    gameState.resetGame();
    return gameState.state.currentBoard;
}

