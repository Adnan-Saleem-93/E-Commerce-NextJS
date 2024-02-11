"use client";

import { ShoppingCartProps } from "@/utils/db/cart";
import { formatPrice } from "@/utils/helper-methods";
import Link from "next/link";
import CartCount from "./CartCount";

type Props = { cart: ShoppingCartProps | null };

export default function CartMenu({ cart }: Props) {
  const closeCartMenu = () => {
    const elem = document.activeElement as HTMLElement;

    if (elem) {
      elem.blur();
    }
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
        <CartCount cartCount={cart?.itemCount || 0} />
      </div>
      <div
        tabIndex={0}
        className="card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="text-lg font-bold">
            {cart?.itemCount || 0} Items
          </span>
          <span className="text-gray-400">
            Subtotal:{" "}
            <span className="text-xl font-bold text-gray-500">
              {formatPrice(cart?.subTotal || 0)}
            </span>
          </span>
          <div className="card-actions">
            <Link
              href="/cart"
              className="btn btn-primary btn-block"
              onClick={closeCartMenu}
            >
              View cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
