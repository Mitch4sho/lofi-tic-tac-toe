import React from "react";
import Block from "../components/Block";
import { checkState } from "../controller";

export default function GamePage({ gameBoard }) {
  return (
    <div style={{ height: "100vh" }}>
      <h1>Game</h1>
      <ul>
        {gameBoard.map((content, id) => (
          <li key={id}>
            <Block id={id} content={content} />
          </li>
        ))}
      </ul>
      <button onClick={checkState}>check game state</button>
    </div>
  );
}
