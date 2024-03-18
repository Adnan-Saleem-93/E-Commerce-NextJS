"use client";

import { useState } from "react";

type Props = { pages: number };

export default function Pagination({ pages }: Props) {
  const [activePage, setActivePage] = useState(1);

  return (
    <div className="join gap-x-1">
      {Array.from({ length: pages }, (_, index) => {
        return (
          <button
            key={index}
            className={`btn join-item ${activePage === index + 1 ? "btn-active" : ""}`}
            onClick={() => setActivePage(index + 1)}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}
