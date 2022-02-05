import { Game } from './Game';
let gameState = {};

export function startGame(settings) {
    gameState = new Game();
    gameState.setGame(settings);
    console.log({ gameState });

    return gameState.state.currentBoard;
}

export function test() {
    console.log({ gameState });
}