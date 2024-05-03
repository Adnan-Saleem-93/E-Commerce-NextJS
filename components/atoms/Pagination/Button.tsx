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
            ? `${active ? "border-none bg-red-500 text-white" : "bg-white"} hover:bg-red-500 hover:text-white`
            : "cursor-not-allowed border-gray-400 bg-gray-200 text-red-400 hover:border-gray-400 hover:bg-gray-200"
        }
        `}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
