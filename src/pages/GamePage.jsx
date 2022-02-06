import React from "react";
import { useNavigate } from "react-router-dom";
import Block from "../components/Block";
import ScoreKeeper from "../components/ScoreKeeper";
import { checkState } from "../controller";

export default function GamePage({
  gameBoard,
  updateBoard,
  handleRestart,
  playerScore,
}) {
  const navigate = useNavigate();

  const restart = () => {
    navigate("/");
    handleRestart();
  };

  return (
    <div style={{ height: "100vh" }}>
      <h1>Game</h1>
      <button onClick={restart}>Restart</button>
      <ul>
        {gameBoard.map((content, id) => {
          return (
            <Block
              key={id}
              id={id}
              content={content === 0 ? "" : content}
              updateBoard={updateBoard}
            />
          );
        })}
      </ul>
      <ScoreKeeper playerScore={playerScore} />
      <button onClick={checkState}>check game state</button>
    </div>
  );
}
