import React from "react";

type Props = { isLastItem?: boolean };

export default function CartItemLoading({ isLastItem = false }: Props) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-full w-full justify-between">
        <div className="skeleton h-36 w-36 md:h-48 md:w-48"></div>
        <div className="flex h-full flex-col items-end justify-between gap-y-4">
          <div className="flex flex-col items-end justify-between gap-2">
            <div className="skeleton h-8 w-36 rounded-lg"></div>
            <div className="skeleton h-8 w-16 rounded-lg"></div>
          </div>
          <div className="flex flex-col items-center justify-between gap-2">
            <div className="flex items-center justify-between gap-2">
              <div className="skeleton h-12 w-10 rounded-lg"></div>
              <div className="skeleton h-12 w-8 rounded-lg"></div>
              <div className="skeleton h-12 w-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {isLastItem ? null : <div className="divider"></div>}
    </div>
  );
}
