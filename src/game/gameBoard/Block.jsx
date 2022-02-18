import React from "react";
import { IconO } from "../../shared/Icons/IconO";
import { IconX } from "../../shared/Icons/IconX";

export default function Block({ content, id, updateBoard, className }) {
  return (
    <li onClick={() => updateBoard(id)} className={className}>
      <div>
        {content === "X" ? <IconX /> : content === "O" ? <IconO /> : ""}
      </div>
    </li>
  );
}
