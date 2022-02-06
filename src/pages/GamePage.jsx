import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Block from "../components/Block";
import ScoreKeeper from "../components/ScoreKeeper";
import Modal from "../components/Modal";

export default function GamePage({
  gameBoard,
  updateBoard,
  handleRestart,
  playerScore,
  handleNextRound,
}) {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const restart = () => {
    navigate("/");
    handleRestart();
  };

  const nextRound = () => {
    handleNextRound();
    setActive(false);
  };

  return (
    <div className="game-page-container">
      <h1>Game</h1>
      <button onClick={() => setActive(true)}>Active modal</button>
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
      <Modal handleNextRound={nextRound} handleExit={restart} active={active} />
    </div>
  );
}
