"use client";
import { removeProductFromCart } from "@/app/cart/actions";
import TrashIcon from "../Icons/TrashIcon";
import { useModalStore } from "@/utils/context";

type Props = { productId: string; className?: string };

export default function RemoveCartItemButton({
  productId,
  className = "",
}: Props) {
  const { open, title, content, onPrimaryAction, setModalProps } =
    useModalStore();

  return (
    <button
      className={`btn btn-error flex h-12 items-center justify-center p-2 ${className}`}
      type="button"
      onClick={() => {
        setModalProps({
          open: true,
          content: "Are you sure you want to remove this item from cart?",
          onPrimaryAction: () => removeProductFromCart(productId),
        });
      }}
    >
      <TrashIcon width="20" height="20" />
      Remove
    </button>
  );
}
