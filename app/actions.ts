import { Prisma } from "@prisma/client";
import prisma from "@/utils/db/prisma";

export const findProductsWithFullCount = async (
  query: Prisma.ProductFindManyArgs,
) => {
  const [count, products] = await prisma.$transaction([
    prisma.product.count({ orderBy: { createdAt: "asc" } }),
    prisma.product.findMany(query),
  ]);

  return {
    pagination: {
      total: count,
      pages: Math.ceil(count / 10),
    },
    data: products,
  };
};
