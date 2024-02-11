"use client";
import { decrementProductQuantity } from "@/app/cart/actions";
import MinusIcon from "../Icons/MinusIcon";

type Props = { productId: string };

export default function DecreaseCartItemButton({ productId }: Props) {
  return (
    <button
      className="btn btn-outline btn-neutral p-2"
      type="button"
      onClick={() => decrementProductQuantity(productId)}
    >
      <MinusIcon height="16" width="16" />
    </button>
  );
}
