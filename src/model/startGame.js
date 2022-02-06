import { Game } from './Game';
const gameState = new Game();

export function startGame(settings) {
    gameState.setGame(settings);

    return gameState.state.currentBoard;
}

export function updateGame(idx) {
    let validMove = gameState.checkValidMove(idx);
    let player = gameState.state.playerTurn;

    if (validMove) {
        console.log('adding move');
        gameState.update(idx, player);
    }

    return gameState.state.currentBoard;
}

export function restart() {
    gameState.state.currentBoard = [];
    gameState.state.settings = {};

    return gameState.state.currentBoard
}

export function check() {
    console.log({ gameState });
}