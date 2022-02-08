import React from "react";
import { IconO } from "./icons/IconO";
import { IconX } from "./icons/IconX";

export default function Block({ content, id, updateBoard, className }) {
  return (
    <li onClick={() => updateBoard(id)} className={className}>
      <div>
        {content === "X" ? <IconX /> : content === "O" ? <IconO /> : ""}
      </div>
    </li>
  );
}
