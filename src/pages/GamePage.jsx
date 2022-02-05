import React from "react";
import Block from "../components/Block";
import { checkState } from "../controller";

export default function GamePage({ gameBoard, updateBoard }) {
  return (
    <div style={{ height: "100vh" }}>
      <h1>Game</h1>
      <ul>
        {gameBoard.map((content, id) => {
          return (
            <Block
              key={id}
              id={id}
              content={content === 0 ? "" : content}
              updateBoard={updateBoard}
            />
          );
        })}
      </ul>
      <button onClick={checkState}>check game state</button>
    </div>
  );
}
