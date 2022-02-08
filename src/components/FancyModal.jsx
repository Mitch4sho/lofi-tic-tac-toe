import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "styled-react-modal";
import { MiniIconO } from "./icons/IconO";
import { MiniIconX } from "./icons/IconX";

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
  active,
  handleExit,
  handleNextRound,
  winner,
  tie,
  currentPlayer,
  playerSelection,
}) {
  const [isOpen, setIsOpen] = useState(false);
  let winState = {
    roundText: playerSelection !== currentPlayer ? "YOU LOST" : "YOU WON",
    text: playerSelection !== currentPlayer ? "OH NO, YOU LOST..." : "YOU WON!",
  };

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
    if (winner) toggleModal();
    if (tie) toggleModal();
  }, [winner, tie]);

  return (
    <div>
      <button onClick={toggleModal}>Click me</button>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <p>{winState.text}</p>
        <Container>
          {currentPlayer === "O" ? <MiniIconX /> : <MiniIconO />}
          <StyledHeader color={currentPlayer === "O" ? "#31C3BD" : "#F2B137"}>
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
    </div>
  );
}
