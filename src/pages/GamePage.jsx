import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ScoreKeeper from "../components/ScoreKeeper";
import { FancyModal } from "../components/FancyModal";
import { SmallIconX } from "../components/icons/IconX";
import { SmallIconO } from "../components/icons/IconO";
import IconRestart from "../components/icons/IconRestart";
import { HeaderStyled } from "../components/styles/Header.styles";
import { HeaderContainer } from "../components/styles/HeaderContainer.styles";
import { PlayersTurnStyled } from "../components/styles/PlayersTurn.styles";
import { RestartButtonStyled } from "../components/styles/RestartButton.styles";
import { BlockStyled } from "../components/styles/Block.styles";
import { GameBoardContainer } from "../components/styles/GameBoardContainer.styles";
import { GamePageWrapper } from "../components/styles/GamePageWrapper.styles";

export default function GamePage({
  gameBoard,
  updateBoard,
  handleRestart,
  playerScore,
  handleNextRound,
  currentPlayer,
  playerSettings,
  winner,
  tie,
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
    <GamePageWrapper>
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
      <GameBoardContainer>
        {gameBoard.map((content, id) => {
          return (
            <BlockStyled
              key={id}
              id={id}
              content={content === 0 ? "" : content}
              updateBoard={updateBoard}
            />
          );
        })}
      </GameBoardContainer>
      <ScoreKeeper playerScore={playerScore} playerSettings={playerSettings} />
      <FancyModal
        handleNextRound={nextRound}
        handleExit={restart}
        active={active}
        winner={winner}
        tie={tie}
        currentPlayer={currentPlayer}
        playerSelection={playerSettings.playersPick}
      />
    </GamePageWrapper>
  );
}
