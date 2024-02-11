import React from "react";

type Props = { fill?: string; width?: string; height?: string };

export default function MinusIcon({
  fill = "#000",
  width = "24",
  height = "24",
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <path fill="currentColor" d="M4 11h16v2H4z" />
    </svg>
  );
}
