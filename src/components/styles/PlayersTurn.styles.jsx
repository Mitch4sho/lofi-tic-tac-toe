import styled from "styled-components";

export const PlayersTurnStyled = styled.div`
  width: 96px;
  height: 40px;
  padding: 9px 10px;
  color: ${(props) => props.theme.fontAccentSecondaryColor};
  background-color: ${(props) => props.theme.backgroundSecondaryColor};
  box-shadow: inset 0px -4px 0px #10212a;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.875px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;
