import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 100%;
  height: 56px;
  padding: 14px 78px;
  font-size: ${(props) => props.theme.fontSizing.xSmall};
  font-weight: 700;
  color: ${(props) => props.theme.backgroundPrimaryColor};
  background: ${(props) =>
    props.primary
      ? props.theme.button.primaryColor
      : props.theme.button.secondaryColor};
  box-shadow: inset 0px -8px 0px ${(props) => (props.primary ? "#118C87" : "#CC8B13")};
  border-radius: 15px;
  border: none;

  &:hover {
    background: ${(props) =>
      props.primary
        ? props.theme.button.primaryColorActive
        : props.theme.button.secondaryColorActive};
  }
`;
