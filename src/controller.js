import { startGame, check, updateGame } from "./model/startGame";

export function startNewGame(settings) {
    console.log('Game Start');
    let gameBoard = startGame(settings);
    return gameBoard
}

export function boardUpdater(id) {
    return updateGame(id);
}

export function checkState() {
    check();
}