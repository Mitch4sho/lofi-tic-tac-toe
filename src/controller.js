import { Game } from "./model/Game";
import { aiMoves } from "./A.I/ai";

let gameState = new Game();

export function startNewGame(settings) {
  gameState.setGame();
  gameState.settings = settings;
  // see what kind of game play it is and see if CPU needs to make the first move
  if (
    gameState.settings.gameMode === "CPU" &&
    gameState.settings.playerPick === "O"
  ) {
    // computerMoves();
  }

  const newState = gameState.state;
  const newSettings = gameState.settings;
  const newScore = gameState.playerScore;

  return { newState, newSettings, newScore };
}

export function boardUpdater(idx) {
  let validMove = gameState.checkValidMove(idx);
  console.log({ validMove });
  let player = gameState.state.playerTurn;

  if (validMove) {
    gameState.update(idx, player);
    gameState.checkState();
  }
  console.log("updating", { gameState });

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

  if (gameState.state.playerTurn === gameState.settings.aiPlayer) {
    computerMoves();
  }

  return gameState;
}

export function restartGame() {
  gameState.resetGame();
  return gameState.state.currentBoard;
}

function computerMoves() {
  console.log("computer turn");
  let aiMove = aiMoves(
    gameState.state.currentBoard,
    gameState.settings.playerPick,
    gameState.settings.aiPlayer
  );
  gameState.update(aiMove.index, gameState.settings.aiPlayer);
}
