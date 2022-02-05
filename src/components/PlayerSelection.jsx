import React from "react";

export default function PlayerSelection({ setPlayer }) {
  const handlePlayerChange = (e) => {
    setPlayer(e.target.innerText);
  };

  return (
    <div>
      <h1>Player Selection</h1>
      <div className="playerSelectionContainer">
        <button onClick={handlePlayerChange}>X</button>
        <button onClick={handlePlayerChange}>O</button>
      </div>
    </div>
  );
}
