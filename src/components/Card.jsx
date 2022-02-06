import React from "react";

export default function Card({ content, value }) {
  return (
    <li>
      <p>{content}</p>
      <p>{value}</p>
    </li>
  );
}
