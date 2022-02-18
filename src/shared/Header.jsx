import React from "react";
import { MiniIconO } from "./Icons/IconO";
import { MiniIconX } from "./Icons/IconX";

export default function Header({ className }) {
  return (
    <div className={className}>
      <MiniIconX />
      <MiniIconO />
    </div>
  );
}
