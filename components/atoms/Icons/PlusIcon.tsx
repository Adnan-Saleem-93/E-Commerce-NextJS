import React from "react";

type Props = { fill?: string; width?: string; height?: string };

export default function PlusIcon({
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
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18 12h-6m0 0H6m6 0V6m0 6v6"
      />
    </svg>
  );
}
