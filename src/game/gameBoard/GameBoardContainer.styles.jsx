import styled from "styled-components";

export const GameBoardContainer = styled.ul`
  width: 328px;
  height: 328px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

export const GameBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
