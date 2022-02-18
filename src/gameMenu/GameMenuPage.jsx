import React from "react";
import { useNavigate } from "react-router-dom";
import { PlayerSelectionStyled } from "./playerSelection/PlayerSelectionStyled.styles";
import { GameMenuWrapper } from "./GameMenuWrapper.styles";
import { HeaderStyled } from "../shared/Header.styles";
import { ButtonStyled } from "./Button.styles";

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
