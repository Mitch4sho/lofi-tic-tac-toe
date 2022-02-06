import React from "react";

export default function Modal({ active, handleExit, handleNextRound }) {
  // update state in model to use to know who won
  return (
    <div className="modal-container">
      <div className={`modal ${active ? "active" : ""}`}>
        <h3>YOU WON</h3>
        <h1>X TAKES THE ROUND</h1>
        <button onClick={handleExit}>QUIT</button>
        <button onClick={handleNextRound}>NEXT ROUND</button>
      </div>
      <div className={active ? "active" : ""} id="overlay"></div>
    </div>
  );
}
