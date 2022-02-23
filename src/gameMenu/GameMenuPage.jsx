import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerSelectionStyled } from "./playerSelection/PlayerSelectionStyled.styles";
import { GameMenuWrapper } from "./GameMenuWrapper.styles";
import { HeaderStyled } from "../shared/Header.styles";
import { ButtonStyled } from "./Button.styles";

export default function GameMenuPage({ updateSettings }) {
  const [player, setPlayer] = useState("O");
  const [aiPlayer, setAiPlayer] = useState("X");
  let navigate = useNavigate();

  const handleNewGame = (gameMode) => {
    updateSettings(gameMode, player, aiPlayer);
    navigate("/game");
  };

  const handlePlayerUpdate = () => {
    setPlayer((state) => (state === "X" ? "O" : "X"));
    setAiPlayer((state) => (state === "O" ? "X" : "O"));
  };

  return (
    <GameMenuWrapper>
      <HeaderStyled />
      <PlayerSelectionStyled handlePlayerUpdate={handlePlayerUpdate} />
      <ButtonStyled onClick={() => handleNewGame("CPU")}>
        NEW GAME (VS CPU)
      </ButtonStyled>
      <ButtonStyled disabled primary onClick={() => handleNewGame("PLAYER")}>
        TBA (VS PLAYER)
      </ButtonStyled>
    </GameMenuWrapper>
  );
}
