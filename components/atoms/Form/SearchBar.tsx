import { SEARCH_QUERY_INPUT_NAME } from "@/utils/constants";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

export default function SearchBar({}: Props) {
  const searchProducts = async (formData: FormData) => {
    "use server";

    const searchQuery = formData.get(SEARCH_QUERY_INPUT_NAME)?.toString();

    if (searchQuery) {
      redirect(`/search?query=${searchQuery}`);
    }
  };
  return (
    <form action={searchProducts} className="w-full">
      <div className="form-control">
        <label className="input input-bordered input-primary flex items-center gap-2">
          <input
            name={SEARCH_QUERY_INPUT_NAME}
            type="search"
            className="grow bg-transparent"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
    </form>
  );
}
