import { Fragment } from "react";

type Props = { rating?: number; productId?: string };

export default function Rating({ rating = 0, productId = "" }: Props) {
  return (
    <div className="rating rating-half rating-md">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => {
        return (
          <Fragment key={`${productId}${number}`}>
            <input
              type="radio"
              name={`rating-${number}`}
              className={` ${number === 0 ? "rating-hidden" : number % 2 === 0 ? "mask mask-half-2 mask-star-2" : "mask mask-half-1 mask-star-2"} bg-yellow-500`}
              defaultChecked={rating === number}
            />
          </Fragment>
        );
      })}
    </div>
  );
}
