import React from "react";
import { useNavigate } from "react-router-dom";
import { PlayerSelectionStyled } from "../components/styles/PlayerSelectionStyled.styles";
import { GameMenuWrapper } from "../components/styles/GameMenuWrapper.styles";
import { HeaderStyled } from "../components/styles/Header.styles";

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
    <GameMenuWrapper>
      <HeaderStyled />
      <PlayerSelectionStyled setPlayer={setPlayerSelection} />
      <button onClick={() => updateSettings("CPU")}>New Game(VS CPU)</button>
      <button onClick={() => updateSettings("PLAYER")}>
        New Game(VS PLAYER)
      </button>
      <button onClick={handleNewGame}>Start Game</button>
    </GameMenuWrapper>
  );
}
