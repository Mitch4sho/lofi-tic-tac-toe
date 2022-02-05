import { startGame, test } from "./model/startGame";

export function startNewGame(settings) {
    console.log('Game Start');
    let gameBoard = startGame(settings);
    return gameBoard
}

export function checkState() {

}