import DecreaseCartItemButton from "@/components/atoms/Buttons/DecreaseCartItemButton";
import IncreaseCartItemButton from "@/components/atoms/Buttons/IncreaseCartItemButton";
import { CartItemWithProduct } from "@/utils/db/cart";
import { formatPrice } from "@/utils/helper-methods";
import Image from "next/image";

type Props = { item: CartItemWithProduct; isLastItem?: boolean };

export default function CartItem({
  item: {
    productId,
    product: { imageUrl, name, price },
    quantity,
  },
  isLastItem = false,
}: Props) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-full w-full items-center justify-between gap-4">
        <figure className="h-36 w-36 lg:h-48 lg:w-48">
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
              <DecreaseCartItemButton
                productId={productId}
                quantity={quantity}
              />
            </div>
          </div>
        </div>
      </div>
      {isLastItem ? null : <div className="divider"></div>}
    </div>
  );
}
