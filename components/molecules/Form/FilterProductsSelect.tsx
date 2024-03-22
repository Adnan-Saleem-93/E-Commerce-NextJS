"use client";

import { KEYS } from "@/utils/constants";
import { useRouter } from "next/navigation";

type Props = { changeHandler?: any };

export default function FilterProductsSelect({ changeHandler = null }: Props) {
  const navigation = useRouter();
  const updateSearchParams = (filter_by: string) => {
    const params = new URLSearchParams([[KEYS.FILTER_BY_KEY, filter_by]]);

    navigation.push(`/?${params}`);
  };
  return (
    <>
      <p className="min-w-[70px] font-semibold text-gray-500">Filter by:</p>
      <select
        className="select select-primary w-full max-w-xs"
        defaultValue="createdAt"
        onChange={(e) => {
          // console.log(e.target.value);
          updateSearchParams(e.target.selectedOptions[0]?.id);
        }}
      >
        <optgroup label="DATE" className="text-gray-500/75">
          <option className="text-black" id="createdAt-desc">
            Newest to Oldest (DATE)
          </option>
          <option className="text-black" id="createdAt-asc">
            Oldest to Newest (DATE)
          </option>
        </optgroup>
        <optgroup label="PRICE" className="text-gray-500/75">
          <option className="text-black" id="price-asc">
            Low to High (PRICE)
          </option>
          <option className="text-black" id="price-desc">
            High to Low (PRICE)
          </option>
        </optgroup>
        <optgroup label="NAME" className="text-gray-500/75">
          <option className="text-black" id="name-asc">
            A-Z (NAME)
          </option>
          <option className="text-black" id="name-desc">
            Z-A (NAME)
          </option>
        </optgroup>
        <optgroup label="RATINGS" className="text-gray-500/75">
          <option className="text-black" id="rating-asc">
            Low to High (RATINGS)
          </option>
          <option className="text-black" id="rating-desc">
            High to Low (RATINGS)
          </option>
        </optgroup>
      </select>
    </>
  );
}
