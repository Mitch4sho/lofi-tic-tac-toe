import React, { useState } from "react";
import { SelectionContainer } from "./PlayerSelectionStyled.styles";
import { MiniIconO } from "../../shared/Icons/IconO";
import { MiniIconX } from "../../shared/Icons/IconX";

export default function PlayerSelection({ className, updateSettings }) {
  const [color, setColor] = useState(true);

  const handlePlayerChange = (value) => {
    updateSettings(null, value);
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
