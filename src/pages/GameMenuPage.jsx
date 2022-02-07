import React from "react";
import { useNavigate } from "react-router-dom";
import { PlayerSelectionStyled } from "../components/styles/PlayerSelectionStyled.styles";
import { GameMenuWrapper } from "../components/styles/GameMenuWrapper.styles";
import { HeaderStyled } from "../components/styles/Header.styles";
import { ButtonStyled } from "../components/styles/Button.styles";

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
      <ButtonStyled onClick={() => updateSettings("CPU")}>
        NEW GAME (VS CPU)
      </ButtonStyled>
      <ButtonStyled primary onClick={() => updateSettings("PLAYER")}>
        NEW GAME (VS PLAYER)
      </ButtonStyled>
      <button onClick={handleNewGame}>Start Game</button>
    </GameMenuWrapper>
  );
}
