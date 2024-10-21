import React from "react";

type Props = { rating?: number };

export default function RatingOverview({ rating = 0 }: Props) {
  return (
    <div className="rating rating-half rating-lg">
      <div className="flex items-center justify-center gap-x-3">
        <div className="flex flex-row items-center">
          {Array.from({ length: 5 }).map((_, index) => {
            const previousFullNumber: number = index;
            const halfNumber: number = index + 1 - 0.5;
            const nextFullNumber: number = index + 1;

            const shouldFirstHalfBeFilled: boolean =
              rating > previousFullNumber || rating === halfNumber
                ? true
                : false;
            const shouldSecondHalfBeFilled: boolean =
              rating >= nextFullNumber ? true : false;
            return (
              <div key={`rating-${index + 1}`}>
                <input
                  type="radio"
                  name="rating-10"
                  className={`mask mask-half-1 mask-star-2 ${shouldFirstHalfBeFilled ? "bg-green-500" : "bg-green-300"}`}
                  defaultChecked={shouldFirstHalfBeFilled}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className={`mask mask-half-2 mask-star-2 ${shouldSecondHalfBeFilled ? "bg-green-500" : "bg-green-300"}`}
                  defaultChecked={shouldSecondHalfBeFilled}
                />
              </div>
            );
          })}
        </div>

        <h4 className="text-xl font-light">({rating})</h4>
      </div>
    </div>
  );
}
