import React from "react";

type Props = {};

export default function CartItemLoading({}: Props) {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full justify-between">
        <div className="skeleton h-48 w-48"></div>
        <div className="flex h-full flex-col items-end justify-between">
          <div className="flex flex-col items-end justify-between gap-2">
            <div className="skeleton h-8 w-36 rounded-lg"></div>
            <div className="skeleton h-8 w-16 rounded-lg"></div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="skeleton h-12 w-12 rounded-lg"></div>
            <div className="skeleton h-12 w-12 rounded-lg"></div>
            <div className="skeleton h-12 w-12 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
