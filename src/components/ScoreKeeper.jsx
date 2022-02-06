import React from "react";
import Card from "./Card";

export default function ScoreKeeper({ playerScore }) {
  console.log(playerScore);
  return (
    <ul>
      <Card content="X (YOU)" value={playerScore.wins} />
      <Card content="TIES" value={playerScore.ties} />
      <Card content="O (CPU)" value={playerScore.losses} />
    </ul>
  );
}
