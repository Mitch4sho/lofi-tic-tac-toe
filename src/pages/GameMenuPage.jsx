import React from "react";
import { useNavigate } from "react-router-dom";
import PlayerSelection from "../components/PlayerSelection";

export default function GameMenuPage({
  setPlayerSelection,
  handleStartGame,
  updateSettings,
}) {
  let navigate = useNavigate();

  const handleNewGame = () => {
    handleStartGame();
    navigate("/game");
  };

  return (
    <div>
      <h1>Game Menu</h1>
      <PlayerSelection setPlayer={setPlayerSelection} />
      <button onClick={() => updateSettings("CPU")}>New Game(VS CPU)</button>
      <button onClick={() => updateSettings("PLAYER")}>
        New Game(VS PLAYER)
      </button>
      <button onClick={handleNewGame}>Start Game</button>
    </div>
  );
}
