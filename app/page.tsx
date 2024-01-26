import Link from "next/link";
import prisma from "../utils/db/prisma";
import { Product } from "@prisma/client";
import ProductCard from "@/components/molecules/ProductCard";
import HighlightedProduct from "@/components/molecules/HighlightedProduct";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });
  return (
    <div className="flex flex-col items-center justify-between gap-y-4">
      <section className="flex flex-col items-center justify-between">
        <Link href="/add-product">
          <button className="btn btn-primary uppercase" type="submit">
            Add New Product
          </button>
        </Link>
      </section>
      <section id="products-section" className="flex flex-col gap-y-6">
        <article id="product-main w-full">
          <HighlightedProduct product={products[0]} />
        </article>
        <article
          id="products-secondary"
          className="xs:grid-cols-1 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
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
