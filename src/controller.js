import { Game } from "./model/Game"

export function startGame(settings) {
    console.log('Game Start')
    const GAME = new Game();
    GAME.setGame(settings);
    console.log({ GAME });
}