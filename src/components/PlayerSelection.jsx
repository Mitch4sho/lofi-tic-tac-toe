import React, { useState } from "react";
import { SelectionContainer } from "./styles/PlayerSelectionStyled.styles";
import { MiniIconO } from "./icons/IconO";
import { MiniIconX } from "./icons/IconX";

export default function PlayerSelection({ className, setPlayer }) {
  const [color, setColor] = useState(true);
  const handlePlayerChange = (value) => {
    setPlayer(value);
    setColor((state) => (state ? false : true));
  };

  return (
    <div className={className}>
      <p>PICK PLAYER 1'S MARK</p>
      <SelectionContainer color={color}>
        <button onClick={() => handlePlayerChange("X")}>
          <MiniIconX fill={color ? "#DBE8ED" : "#1A2A33"} />
        </button>
        <button onClick={() => handlePlayerChange("O")}>
          <MiniIconO fill={color ? "#1A2A33" : "#DBE8ED"} />
        </button>
      </SelectionContainer>
      <p>REMEMBER: X GOES FIRST</p>
    </div>
  );
}
