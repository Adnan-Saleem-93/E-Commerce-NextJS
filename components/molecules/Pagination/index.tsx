"use client";

import { KEYS } from "@/utils/constants";
import { SearchParamsProps } from "@/utils/types";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

type Props = { pages: number; searchParams?: SearchParamsProps | null };

export default function Pagination({ pages, searchParams = null }: Props) {
  const [activePage, setActivePage] = useState(1);
  const navigation = useRouter();
  const params = useSearchParams();

  const setPage = (page: number) => {
    const newParams = new URLSearchParams([]);
    params.forEach((value, key) => newParams.append(key, value));
    setActivePage(page);

    newParams.append(KEYS.PAGE_KEY, page.toString());
    navigation.push(`/?${newParams}`);
  };

  return (
    <div className="join gap-x-1">
      {Array.from({ length: pages }, (_, index) => {
        return (
          <button
            key={index}
            className={`btn join-item ${activePage === index + 1 ? "btn-active" : ""}`}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}
