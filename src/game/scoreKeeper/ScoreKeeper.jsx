import React from "react";
import { CardStyled } from "./Card.styles";
import { CardContainer } from "./CardContainer.styles";

export default function ScoreKeeper({ playerScore, playerSettings }) {
  let playerMarkerSelection = playerSettings.playersPick;
  return (
    <CardContainer>
      <CardStyled
        bg="#31C3BD"
        content={playerMarkerSelection === "X" ? "X (YOU)" : "X (CPU)"}
        value={
          playerMarkerSelection === "X" ? playerScore.wins : playerScore.losses
        }
      />
      <CardStyled bg="#A8BFC9" content="TIES" value={playerScore.ties} />
      <CardStyled
        bg="#F2B137"
        content={playerMarkerSelection === "O" ? "O (YOU)" : "O (CPU)"}
        value={
          playerMarkerSelection === "O" ? playerScore.wins : playerScore.losses
        }
      />
    </CardContainer>
  );
}
