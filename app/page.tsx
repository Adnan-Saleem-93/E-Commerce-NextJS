import prisma from "../utils/db/prisma";
import { Product } from "@prisma/client";
import ProductCard from "@/components/molecules/ProductCard";
import HighlightedProduct from "@/components/molecules/HighlightedProduct";
import { Metadata } from "next";
import { APP_NAME } from "@/utils/constants";

// TODO: Sort Products by Price, Date Added, Ratings (default -> New Products)
// TODO: Authentication
// TODO: Provide Ratings & Review for a Product.
// TODO: Show Review of Product.
// TODO: Buy Now Feature & Stripe Integration
// TODO: Stripe Integration
// TODO: Product Categories
// TODO: Dark Mode

export const metadata: Metadata = {
  title: `Products | ${APP_NAME}`,
};

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });
  return (
    <div className="flex flex-col items-center justify-between p-4">
      <section className="flex flex-col items-center justify-between"></section>
      <section id="products-section" className="flex flex-col gap-y-20">
        <article id="product-main" className="w-full">
          <HighlightedProduct product={products[0]} />
        </article>
        <article
          id="products-secondary"
          className="xs:grid-cols-1 grid gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.slice(1).map((product: Product, index: number) => {
            return (
              <ProductCard key={`product-${index + 1}`} product={product} />
            );
          })}
        </article>
      </section>
    </div>
  );
}
