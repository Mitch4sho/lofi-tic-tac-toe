import React from "react";
import IconO from "./icons/IconO";
import IconX from "./icons/IconX";

export default function Header({ className }) {
  return (
    <div className={className}>
      <IconX width={"32"} height={"32"} />
      <IconO />
    </div>
  );
}
