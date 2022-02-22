import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScoreKeeper from "./scoreKeeper/ScoreKeeper";
import { FancyModal } from "./FancyModal";
import { SmallIconX } from "../shared/Icons/IconX";
import { SmallIconO } from "../shared/Icons/IconO";
import IconRestart from "../shared/Icons/IconRestart";
import { HeaderStyled } from "../shared/Header.styles";
import { HeaderContainer } from "./header/HeaderContainer.styles";
import { PlayersTurnStyled } from "./header/PlayersTurn.styles";
import { RestartButtonStyled } from "./header/RestartButton.styles";
import { BlockStyled } from "./gameBoard/Block.styles";
import {
  GameBoardContainer,
  GameBoardWrapper,
} from "./gameBoard/GameBoardContainer.styles";
import { GamePageWrapper } from "./GamePageWrapper.styles";

export default function GamePage({
  updateBoard,
  handleRestart,
  playerScore,
  handleNextRound,
  playerSettings,
  gameState,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [restartSetting, setRestartSetting] = useState(false);
  const navigate = useNavigate();

  const restart = () => {
    setIsOpen(true);
    handleRestart();
    navigate("/");
  };

  const nextRound = () => {
    handleNextRound();
  };

  useEffect(() => {
    if (restartSetting) {
      navigate("/");
      handleRestart();
      setRestartSetting(false);
    }
  }, [restartSetting]);

  return (
    <GamePageWrapper>
      <HeaderContainer>
        <HeaderStyled />
        <PlayersTurnStyled>
          {gameState.currentPlayer === "X" ? <SmallIconX /> : <SmallIconO />}
          TURN
        </PlayersTurnStyled>
        <RestartButtonStyled onClick={restart}>
          <IconRestart />
        </RestartButtonStyled>
      </HeaderContainer>
      <GameBoardWrapper>
        <GameBoardContainer>
          {gameState.boardState.map((content, id) => {
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
        <ScoreKeeper
          playerScore={playerScore}
          playerSettings={playerSettings}
        />
      </GameBoardWrapper>
      <FancyModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleNextRound={nextRound}
        handleExit={restart}
        setRestartSetting={setRestartSetting}
        playerSelection={playerSettings.playersPick}
        aiPlayer={playerSettings.aiPlayer}
        gameState={gameState}
      />
    </GamePageWrapper>
  );
}
