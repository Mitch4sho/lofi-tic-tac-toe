import React from "react";
import { CardStyled } from "./styles/Card.styles";
import { CardContainer } from "./styles/CardContainer.styles";

export default function ScoreKeeper({ playerScore, playerSettings }) {
  let playerMarkerSelection = playerSettings.playersPick;
  return (
    <CardContainer>
      <CardStyled
        bg="#31C3BD"
        content={playerMarkerSelection === "X" ? "X (YOU)" : "X (CPU)"}
        value={playerScore.wins}
      />
      <CardStyled bg="#A8BFC9" content="TIES" value={playerScore.ties} />
      <CardStyled
        bg="#F2B137"
        content={playerMarkerSelection === "O" ? "O (YOU)" : "O (CPU)"}
        value={playerScore.losses}
      />
    </CardContainer>
  );
}
