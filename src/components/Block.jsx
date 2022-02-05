import React from "react";

export default function Block({ content, id, updateBoard }) {
  return (
    <li onClick={() => updateBoard(id)} className="block-container">
      <div>{content}</div>
    </li>
  );
}
