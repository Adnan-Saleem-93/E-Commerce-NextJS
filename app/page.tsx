import Link from "next/link";
import prisma from "../utils/db/prisma";
import { Product } from "@prisma/client";
import ProductCard from "@/components/molecules/ProductCard";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });
  return (
    <div className="flex flex-col items-center justify-between gap-y-2">
      <section className="flex flex-col items-center justify-between">
        <Link href="/add-product">
          <button className="btn btn-primary uppercase" type="submit">
            Add New Product
          </button>
        </Link>
      </section>
      <section
        id="products-section"
        className="xs:grid-cols-1 mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3"
      >
        {products.map((product: Product, index: number) => {
          return <ProductCard key={`product-${index + 1}`} product={product} />;
        })}
      </section>
    </div>
  );
}
