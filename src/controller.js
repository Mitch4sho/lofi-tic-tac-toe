import { Game } from "./model/Game";
import { aiMoves } from "./A.I/ai";

let gameState = new Game();

export function startNewGame(settings) {
  gameState.setGame();
  gameState.settings = settings;
  // see what kind of game play it is and see if CPU needs to make the first move

  if (gameState.settings.aiPlayer === gameState.state.playerTurn) {
    computerMoves();
  }
  const newState = gameState.state;
  const newSettings = gameState.settings;
  const newScore = gameState.playerScore;

  return { newState, newSettings, newScore };
}

export function boardUpdater(idx) {
  // TODO: Need to update so the change of each players turn is not that fast may be return objects to see if a player has one
  playerMoves(idx);

  if (gameState.settings.aiPlayer === gameState.state.playerTurn) {
    computerMoves();
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

function playerMoves(idx) {
  const validMove = gameState.checkValidMove(idx);
  const player = gameState.state.playerTurn;

  if (validMove) {
    gameState.update(idx, player);
    gameState.checkState();
    if (gameState.state.winner && !gameState.state.won) {
      gameState.updateWinner(player);
      gameState.updateWinnings();
    }
  }
}

export function computerMoves() {
  const aiPlayer = gameState.settings.aiPlayer;
  const player = gameState.settings.playerPick;
  const currentBoard = gameState.state.currentBoard;
  const aiMoveChoice = aiMoves(currentBoard, player, aiPlayer);
  console.log({ aiMoveChoice });
  const validMove = gameState.checkValidMove(aiMoveChoice);

  if (validMove) {
    gameState.update(aiMoveChoice, aiPlayer);
    gameState.checkState();
    if (gameState.state.winner && !gameState.state.won) {
      gameState.updateWinner(aiPlayer);
      gameState.updateLosses();
    }
  }
}
