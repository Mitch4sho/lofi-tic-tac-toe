import React from "react";
import { AudioButtonStyled } from "./AudioButton.styles";

export default function Audio({ className }) {
  return (
    <div className={className}>
      <AudioButtonStyled />
      <p>Play some lofi music</p>
    </div>
  );
}
