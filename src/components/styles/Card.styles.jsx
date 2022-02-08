import styled from "styled-components";
import Card from "../Card";

export const CardStyled = styled(Card)`
  width: 96px;
  height: 64px;
  padding: 12px;
  text-align: center;
  background-color: ${(props) => props.bg};
  border-radius: 10px;
`;
