import React from "react";
import { useNavigate } from "react-router-dom";
import PlayerSelection from "../components/PlayerSelection";

export default function GameMenuPage({
  setPlayerSelection,
  submitSettings,
  updateSettings,
}) {
  let navigate = useNavigate();

  const handleSubmission = () => {
    submitSettings();
    navigate("/game");
  };

  return (
    <div>
      <h1>Game Menu</h1>
      <PlayerSelection
        setPlayer={setPlayerSelection}
        submitSettings={submitSettings}
      />
      <button onClick={() => updateSettings("CPU")}>New Game(VS CPU)</button>
      <button onClick={() => updateSettings("PLAYER")}>
        New Game(VS PLAYER)
      </button>
      <button onClick={handleSubmission}>Start Game</button>
    </div>
  );
}
