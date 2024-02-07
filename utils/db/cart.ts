import { cookies } from "next/headers";
import prisma from "../../utils/db/prisma";
import { Cart, Prisma } from "@prisma/client";

const CART_ID_KEY: string = "localCartId";

export type CartWithProducts = Prisma.CartGetPayload<{
  include: { items: { include: { product: true } } };
}>;

export type ShoppingCartProps = CartWithProducts & {
  itemCount: number;
  subTotal: number;
};

export const getCart = async (): Promise<ShoppingCartProps | null> => {
  const localCartId = cookies().get(CART_ID_KEY)?.value;
  const cart = localCartId
    ? await prisma.cart.findUnique({
        where: { id: localCartId },
        include: { items: { include: { product: true } } },
      })
    : null;

  if (!cart) return null;

  return {
    ...cart,
    itemCount: cart.items.reduce((acc, item) => acc + item.quantity, 0),
    subTotal: cart.items.reduce(
      (acc, item) => acc + item.quantity * item.product.price,
      0,
    ),
  };
};
export const createCart = async (): Promise<ShoppingCartProps> => {
  const newCart = await prisma.cart.create({ data: {} });

  cookies().set(CART_ID_KEY, newCart.id);

  return {
    ...newCart,
    items: [],
    itemCount: 0,
    subTotal: 0,
  };
};
