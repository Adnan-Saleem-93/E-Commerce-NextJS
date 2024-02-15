"use client";
import {
  decrementProductQuantity,
  removeProductFromCart,
} from "@/app/cart/actions";
import MinusIcon from "../Icons/MinusIcon";
import { useModalStore } from "@/utils/context";

type Props = { productId: string; quantity: number };

export default function DecreaseCartItemButton({ productId, quantity }: Props) {
  const { setModalProps } = useModalStore();

  return (
    <button
      className="btn btn-outline btn-neutral p-2"
      type="button"
      onClick={() => {
        if (quantity > 1) {
          decrementProductQuantity(productId);
        } else {
          setModalProps({
            open: true,
            content: "Are you sure you want to remove this item from cart?",
            onPrimaryAction: () => removeProductFromCart(productId),
          });
        }
      }}
    >
      <MinusIcon height="16" width="16" />
    </button>
  );
}
