import styled from "styled-components";
import PlayerSelection from "../PlayerSelection";

export const PlayerSelectionStyled = styled(PlayerSelection)`
  background-color: ${(props) => props.theme.backgroundSecondaryColor};
  padding: 24px;
  box-shadow: inset 0px -8px 0px #10212a;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  p {
    color: ${(props) => props.theme.fontAccentSecondaryColor};
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0.875px;
    text-align: center;

    &:first-child {
      font-weight: 700;
      font-size: ${(props) => props.theme.fontSizing.xSmall};
    }
  }
`;

export const SelectionContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimaryColor};
  padding: 9px 8px;
  border-radius: 10px;

  button {
    width: 131px;
    padding: 11px 50px;
    background-color: ${(props) =>
      props.color
        ? props.theme.fontAccentColor
        : props.theme.backgroundPrimaryColor};
    border: none;
    border-radius: 10px;

    &:hover {
      background-color: ${(props) =>
        !props.color ? props.theme.backgroundSecondaryColor : ""};
    }

    &:first-child {
      background-color: ${(props) =>
        props.color
          ? props.theme.backgroundPrimaryColor
          : props.theme.fontAccentColor};

      &:hover {
        background-color: ${(props) =>
          props.color ? props.theme.backgroundSecondaryColor : ""};
      }
    }
  }
`;
