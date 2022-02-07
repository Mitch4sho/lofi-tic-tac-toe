import React from "react";
import { MiniIconO } from "./icons/IconO";
import { MiniIconX } from "./icons/IconX";

export default function Header({ className }) {
  return (
    <div className={className}>
      <MiniIconX />
      <MiniIconO />
    </div>
  );
}
