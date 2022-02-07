import React from "react";
import { useNavigate } from "react-router-dom";
import { PlayerSelectionStyled } from "../components/styles/PlayerSelectionStyled.styles";
import { GameMenuWrapper } from "../components/styles/GameMenuWrapper.styles";
import { HeaderStyled } from "../components/styles/Header.styles";
import { ButtonStyled } from "../components/styles/Button.styles";

export default function GameMenuPage({ setPlayerSelection, updateSettings }) {
  let navigate = useNavigate();

  const handleNewGame = (gameMode) => {
    updateSettings(gameMode);
    navigate("/game");
  };

  return (
    <GameMenuWrapper>
      <HeaderStyled />
      <PlayerSelectionStyled setPlayer={setPlayerSelection} />
      <ButtonStyled onClick={() => handleNewGame("CPU")}>
        NEW GAME (VS CPU)
      </ButtonStyled>
      <ButtonStyled primary onClick={() => handleNewGame("PLAYER")}>
        NEW GAME (VS PLAYER)
      </ButtonStyled>
    </GameMenuWrapper>
  );
}
