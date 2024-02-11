"use server";

import { createCart, getCart } from "@/utils/db/cart";
import prisma from "@/utils/db/prisma";
import { revalidatePath } from "next/cache";

export async function incrementProductQuantity(productId: string) {
  const cart = (await getCart()) ?? (await createCart());

  const articleInCart = cart?.items.find(
    (item) => item.productId === productId,
  );

  if (articleInCart) {
    await prisma.cartItem.update({
      where: { id: articleInCart.id },
      data: { quantity: { increment: 1 } },
    });
  } else {
    await prisma.cartItem.create({
      data: {
        cartId: cart?.id,
        productId,
        quantity: 1,
      },
    });
  }

  revalidatePath("/cart");
}

export async function decrementProductQuantity(productId: string) {
  const cart = (await getCart()) ?? (await createCart());

  const articleInCart = cart?.items.find(
    (item) => item.productId === productId,
  );

  if (articleInCart) {
    await prisma.cartItem.update({
      where: { id: articleInCart.id },
      data: { quantity: { decrement: 1 } },
    });
  }

  revalidatePath("/cart");
}

export async function removeProductFromCart(productId: string) {
  const cart = (await getCart()) ?? (await createCart());

  const articleInCart = cart?.items.find(
    (item) => item.productId === productId,
  );

  if (articleInCart) {
    await prisma.cartItem.delete({
      where: { id: articleInCart.id },
    });
  }

  revalidatePath("/cart");
}
