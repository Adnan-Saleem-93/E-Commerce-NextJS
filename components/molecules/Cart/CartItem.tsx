import DecreaseCartItemButton from "@/components/atoms/Buttons/DecreaseCartItemButton";
import IncreaseCartItemButton from "@/components/atoms/Buttons/IncreaseCartItemButton";
import RemoveCartItemButton from "@/components/atoms/Buttons/RemoveCartItemButton";
import MinusIcon from "@/components/atoms/Icons/MinusIcon";
import PlusIcon from "@/components/atoms/Icons/PlusIcon";
import TrashIcon from "@/components/atoms/Icons/TrashIcon";
import { CartItemWithProduct } from "@/utils/db/cart";
import { formatPrice } from "@/utils/helper-methods";
import Image from "next/image";
import React from "react";

type Props = { item: CartItemWithProduct };

export default function CartItem({
  item: {
    productId,
    product: { imageUrl, name, price },
    quantity,
  },
}: Props) {
  return (
    <div>
      <div className="flex w-full items-center justify-between gap-4">
        <figure className="h-48 w-48">
          <Image
            src={imageUrl}
            alt={name}
            className="h-full w-full rounded-xl object-cover shadow-lg"
            height={192}
            width={192}
          />
        </figure>
        <div className="flex h-full flex-col items-end justify-between gap-4 text-end">
          <div className="flex flex-col items-end justify-between gap-2">
            <p className="text-xl font-bold">{name}</p>
            <p className="text-xl text-gray-500">
              {formatPrice(price * quantity)}
            </p>
          </div>
          <div className="flex flex-col justify-between gap-2">
            <div className="flex items-center justify-between gap-2">
              <IncreaseCartItemButton productId={productId} />
              <span className="text-xl">{quantity}</span>
              <DecreaseCartItemButton productId={productId} />
            </div>
            <RemoveCartItemButton productId={productId} className="w-full" />
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}
