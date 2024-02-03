"use client";

import { useState, useTransition } from "react";
import CartIcon from "../Icons/CartIcon";
import TickIcon from "../Icons/TickIcon";

type Props = {
  productId: string;
  incrementProductQuantity: (productId: string) => Promise<void>;
};

export default function AddToButtonCart({
  productId,
  incrementProductQuantity,
}: Props) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState<boolean>(false);
  return (
    <button
      className="product-action-btn btn-dark"
      type="button"
      onClick={() => {
        setSuccess(false);
        startTransition(async () => {
          await incrementProductQuantity(productId);
          setSuccess(true);
        });
      }}
    >
      {isPending ? (
        <span className="loading loading-dots loading-md" />
      ) : !isPending && success ? (
        <span className="flex items-center justify-center gap-x-2">
          Added to Cart <TickIcon />
        </span>
      ) : (
        <span className="flex items-center justify-center gap-x-2">
          Add to Cart <CartIcon />
        </span>
      )}
    </button>
  );
}
