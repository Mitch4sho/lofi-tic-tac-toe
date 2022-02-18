import styled from "styled-components";
import Block from "./Block";

export const BlockStyled = styled(Block)`
  width: 96px;
  height: 96px;
  background: ${(props) => props.theme.backgroundSecondaryColor};
  box-shadow: inset 0px -8px 0px #10212a;
  border-radius: 10px;
  border: none;
  list-style: none;

  display: flex;
  justify-content: center;
  align-items: center;
`;
