"use client";

type Props = { changeHandler?: any };

export default function FilterProductsSelect({ changeHandler = null }: Props) {
  return (
    <>
      <p className="min-w-[70px] font-semibold text-gray-500">Filter by:</p>
      <select
        className="select select-primary w-full max-w-xs"
        defaultValue="createdAt"
        onChange={(e) => {
          // console.log(e.target.value);
          changeHandler && changeHandler(e.target.selectedOptions[0]?.id);
        }}
      >
        <option id="createdAt">DATE (Newest First)</option>
        <option id="price-asc">PRICE (Lowest First)</option>
        <option id="price-desc">PRICE (Highest First)</option>
        <option id="name">Alphabetically</option>
      </select>
    </>
  );
}
