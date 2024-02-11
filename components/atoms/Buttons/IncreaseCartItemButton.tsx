"use client";

import { incrementProductQuantity } from "@/app/cart/actions";
import PlusIcon from "../Icons/PlusIcon";

type Props = { productId: string };

export default function IncreaseCartItemButton({ productId }: Props) {
  return (
    <button
      className="btn btn-outline btn-neutral p-2"
      type="button"
      onClick={() => incrementProductQuantity(productId)}
    >
      <PlusIcon height="20" width="20" />
    </button>
  );
}
