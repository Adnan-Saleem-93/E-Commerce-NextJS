import { cookies } from "next/headers";
import prisma from "../../utils/db/prisma";
import { Cart, CartItem, Prisma } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

const CART_ID_KEY: string = "localCartId";

export type CartWithProducts = Prisma.CartGetPayload<{
  include: { items: { include: { product: true } } };
}>;

export type CartItemWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true };
}>;

export type ShoppingCartProps = CartWithProducts & {
  itemCount: number;
  subTotal: number;
};

export const getCart = async (): Promise<ShoppingCartProps | null> => {
  const session = await getServerSession(authOptions);

  let cart: CartWithProducts | null = null;

  if (session) {
    cart = await prisma.cart.findFirst({
      where: { userId: session.user.id },
      include: { items: { include: { product: true } } },
    });
  } else {
    const localCartId = cookies().get(CART_ID_KEY)?.value;
    cart = localCartId
      ? await prisma.cart.findUnique({
          where: { id: localCartId },
          include: { items: { include: { product: true } } },
        })
      : null;
  }

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
  const session = await getServerSession(authOptions);

  let newCart: Cart;
  if (session) {
    newCart = await prisma.cart.create({
      data: {
        userId: session.user.id,
      },
    });
  } else {
    newCart = await prisma.cart.create({ data: {} });
    cookies().set(CART_ID_KEY, newCart.id);
  }

  return {
    ...newCart,
    items: [],
    itemCount: 0,
    subTotal: 0,
  };
};

export const mergeLocalCartWithUserCart = async (userId: string) => {
  const localCartId = cookies().get(CART_ID_KEY)?.value;
  const localCart = await prisma.cart.findUnique({
    where: { id: localCartId },
    include: { items: true },
  });

  if (!localCart) return;

  const userCart = await prisma.cart.findFirst({
    where: { userId },
    include: { items: true },
  });

  await prisma.$transaction(async (tx) => {});
};

const mergeCarts = (...cartItems: CartItem[][]) => {
  return cartItems.reduce((acc, items) => {
    items.forEach((item) => {
      const existingItem = acc.find((x) => x.productId === item.productId);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        acc.push(item);
      }
    });
    return acc;
  }, [] as CartItem[]);
};
