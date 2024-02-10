import React from "react";
import StarFilledIcon from "../Icons/StarFilledIcon";

type Props = { rating?: number };

export default function RatingOverview({ rating = 0 }: Props) {
  return (
    <div className="flex items-center justify-between gap-x-1">
      <StarFilledIcon />
      <span>{rating.toFixed(1)}</span>
    </div>
  );
}
