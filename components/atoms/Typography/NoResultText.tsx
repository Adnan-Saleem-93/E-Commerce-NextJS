import React from "react";

type Props = { text: string; className?: string };

export default function NoResultText({ text, className }: Props) {
  return <span className={`text-2xl font-bold ${className}`}>{text}</span>;
}
