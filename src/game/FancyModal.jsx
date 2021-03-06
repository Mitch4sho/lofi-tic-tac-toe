import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "styled-react-modal";
import { MiniIconO } from "../shared/Icons/IconO";
import { MiniIconX } from "../shared/Icons/IconX";

const StyledModal = Modal.styled`
  width: 100%;
  height: 228px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: ${(props) => props.theme.backgroundSecondaryColor};

  p {
    font-size: 14px;
    font-weight: 700;
    color: ${(props) => props.theme.fontAccentSecondaryColor}
  }
`;

const StyledHeader = styled.header`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.color};
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.div`
  padding: 17px;
  margin-right: 16px;
  font-size: 16px;
  font-weight: 700;
  background-color: ${(props) => (props.secondary ? "#F2B137" : "#A8BFC9")};
  box-shadow: inset 0px -4px 0px ${(props) => (props.secondary ? "#cc8b13" : "#6B8997")};
  border-radius: 10px;

  &:hover {
    background-color: ${(props) => (props.secondary ? "#FFC860" : "#DBE8ED")};
  }
`;

export function FancyModal({
  isOpen,
  setIsOpen,
  handleExit,
  handleNextRound,
  playerSelection,
  aiPlayer,
  setRestartSetting,
  gameState,
}) {
  const [winState, setWinState] = useState("YOU WON!");

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function toggleExit() {
    handleExit();
    toggleModal();
  }

  function toggleNextRound() {
    handleNextRound();
    toggleModal();
  }

  useEffect(() => {
    if (gameState.winner) {
      setWinState(
        playerSelection === gameState.won ? "YOU WON!" : "OH NO, YOU LOST..."
      );
      toggleModal();
    }
    if (gameState.tie) toggleModal();
  }, [gameState.winner, gameState.tie]);

  return (
    <div>
      {gameState.winner ? (
        <StyledModal
          isOpen={isOpen}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
        >
          <p>{winState}</p>
          <Container>
            {gameState.won === "O" ? <MiniIconO /> : <MiniIconX />}
            <StyledHeader color={gameState.won === "O" ? "#F2B137" : "#31C3BD"}>
              TAKES THE ROUND
            </StyledHeader>
          </Container>
          <Container>
            <StyledButton accent onClick={toggleExit}>
              QUIT
            </StyledButton>
            <StyledButton secondary onClick={toggleNextRound}>
              NEXT ROUND
            </StyledButton>
          </Container>
        </StyledModal>
      ) : gameState.tie ? (
        <StyledModal
          isOpen={isOpen}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
        >
          <Container>
            <StyledHeader color={"#A8BFC9"}>ROUND TIED</StyledHeader>
          </Container>
          <Container>
            <StyledButton accent onClick={toggleExit}>
              QUIT
            </StyledButton>
            <StyledButton secondary onClick={toggleNextRound}>
              NEXT ROUND
            </StyledButton>
          </Container>
        </StyledModal>
      ) : (
        <StyledModal
          isOpen={isOpen}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
        >
          <Container>
            <StyledHeader color={"#A8BFC9"}>RESTART GAME?</StyledHeader>
          </Container>
          <Container>
            <StyledButton accent onClick={() => setIsOpen(false)}>
              NO, CANCEL
            </StyledButton>
            <StyledButton secondary onClick={() => setRestartSetting(true)}>
              YES, RESTART
            </StyledButton>
          </Container>
        </StyledModal>
      )}
    </div>
  );
}
