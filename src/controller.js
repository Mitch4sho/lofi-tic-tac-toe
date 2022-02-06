import { startGame, check, updateGame, restart } from "./model/startGame";

export function startNewGame(settings) {
    console.log('Game Start');
    let gameBoard = startGame(settings);
    return gameBoard
}

export function boardUpdater(id) {
    return updateGame(id);
}

export function restartGame() {
    let gameBoard = restart();
    return gameBoard;
}

export function checkState() {
    check();
}