import { Game } from './model/Game';

let gameState = new Game();

export function startNewGame(settings) {
    console.log('Game Start');
    gameState.setGame(settings);
    return gameState;
}

export function boardUpdater(idx) {
    let validMove = gameState.checkValidMove(idx);
    let player = gameState.state.playerTurn;

    if (validMove) {
        console.log('adding move');
        gameState.update(idx, player);
    }

    return gameState.state.currentBoard;
}

export function restartGame() {
    gameState.state.currentBoard = [];
    gameState.state.settings = {};

    return gameState.state.currentBoard
}

export function checkState() {
    console.log({ gameState });
}