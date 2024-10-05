import React, { ReactNode } from "react";

type Props = {
  customClasses?: string;
  content: number | ReactNode;
  active?: boolean;
  onClick: any;
  disabled?: boolean;
};

export default function PaginationButton({
  content,
  onClick,
  active = false,
  customClasses = "",
  disabled = false,
}: Props) {
  return (
    <button
      className={`btn join-item border-orange-300/75 ${customClasses} 
        ${
          !disabled
            ? `${active ? "border-none bg-primary text-white" : "!border-blue-300 bg-white"} hover:bg-primary hover:text-white`
            : "cursor-not-allowed !border-blue-300 bg-blue-200 text-red-400 hover:border-blue-300 hover:bg-blue-200"
        }
        `}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
