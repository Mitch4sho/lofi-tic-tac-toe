import styled from "styled-components";
import AudioButton from "./AudioButton";

export const AudioButtonStyled = styled(AudioButton)`
  button {
    border-radius: 50%;
    border: none;
    font-size: 32px;
    padding: 6px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .play {
    position: relative;
    left: 2px;
    color: ${(props) => props.theme.backgroundPrimaryColor};
  }
`;
