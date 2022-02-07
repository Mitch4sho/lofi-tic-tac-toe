import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Block from "../components/Block";
import ScoreKeeper from "../components/ScoreKeeper";
import { SmallIconX } from "../components/icons/IconX";
import { SmallIconO } from "../components/icons/IconO";
import IconRestart from "../components/icons/IconRestart";
import Modal from "../components/Modal";
import { HeaderStyled } from "../components/styles/Header.styles";
import { HeaderContainer } from "../components/styles/HeaderContainer.styles";
import { PlayersTurnStyled } from "../components/styles/PlayersTurn.styles";
import { RestartButtonStyled } from "../components/styles/RestartButton.styles";

export default function GamePage({
  gameBoard,
  updateBoard,
  handleRestart,
  playerScore,
  handleNextRound,
  currentPlayer,
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
      <HeaderContainer>
        <HeaderStyled />
        <PlayersTurnStyled>
          {currentPlayer === "X" ? <SmallIconX /> : <SmallIconO />}
          TURN
        </PlayersTurnStyled>
        <RestartButtonStyled onClick={restart}>
          <IconRestart />
        </RestartButtonStyled>
      </HeaderContainer>
      <button onClick={() => setActive(true)}>Active modal</button>
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
