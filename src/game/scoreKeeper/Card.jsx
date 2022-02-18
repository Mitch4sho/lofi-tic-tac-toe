import React from "react";

export default function Card({ content, value, className }) {
  return (
    <li className={className}>
      <p>{content}</p>
      <p>{value}</p>
    </li>
  );
}
