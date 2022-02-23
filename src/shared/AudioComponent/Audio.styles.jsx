import styled from "styled-components";
import Audio from "./Audio";

export const AudioStyled = styled(Audio)`
  width: 328px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  font-size: ${(props) => props.theme.fontSizing.small};
  color: ${(props) => props.theme.fontAccentSecondaryColor};
  text-transform: uppercase;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;
