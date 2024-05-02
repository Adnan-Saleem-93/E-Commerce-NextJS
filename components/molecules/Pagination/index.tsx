"use client";

import { KEYS } from "@/utils/constants";
import { SearchParamsProps } from "@/utils/types";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

type Props = { totalPages: number; searchParams?: SearchParamsProps | null };

export default function Pagination({ totalPages, searchParams = null }: Props) {
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

  const showPagination = totalPages > 1;
  const pagesToShow = showPagination ? 5 : totalPages;

  const renderPageButtons = () => {
    const pageButtons = [];

    Array.from({ length: pagesToShow }, (_, index) => {
      return pageButtons.push(
        <button
          key={`pagination-key-${index + 1}`}
          className="btn join-item border-gray-400"
        >
          {index + 1}
        </button>,
      );
    });

    if (showPagination) {
      pageButtons.push(
        <span key="ellipsis" className="mx-2 text-3xl">
          ...
        </span>,
      );
      // pageButtons.push(
      //   <button className="btn join-item">{totalPages - 1}</button>,
      // );
      pageButtons.push(
        <button className="btn join-item border-gray-400">{totalPages}</button>,
      );
    }

    return pageButtons;
  };

  return (
    <div className="join">
      {/* {Array.from({ length: totalPages }, (_, index) => {
        if (totalPages < 8) {
          return (
            <button
              key={index}
              className={`btn join-item ${activePage === index + 1 ? "btn-active" : ""}`}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </button>
          );
        } else if (totalPages >= 8 && index <= 5) {
        }
      })} */}
      {renderPageButtons()}
    </div>
  );
}
