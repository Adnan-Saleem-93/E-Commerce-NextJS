import prisma from "../utils/db/prisma";
import { Product } from "@prisma/client";
import ProductCard from "@/components/molecules/ProductCard";
import HighlightedProduct from "@/components/molecules/HighlightedProduct";
import { Metadata } from "next";
import { APP_NAME, FILTER_BY_KEY } from "@/utils/constants";
import FilterProductsSelect from "@/components/molecules/Form/FilterProductsSelect";

export const metadata: Metadata = {
  title: `Products | ${APP_NAME}`,
};
type SearchParamsProps = {
  [key: string]: string;
};
export default async function Home({
  searchParams,
}: {
  searchParams: SearchParamsProps;
}) {
  const filterBy: string = searchParams?.filter_by || "";

  const filter = filterBy?.split("-")[0] || "";
  const ascOrDesc = filterBy?.split("-")[1] || "asc";

  const products = await prisma.product.findMany({
    orderBy: filter ? { [filter]: ascOrDesc } : { createdAt: "desc" },
  });
  async function filterProducts(filterType: string): Promise<void> {
    "use server";

    let filteredProducts = await prisma.product.findMany({
      orderBy: { [filter]: ascOrDesc },
    });
  }

  return (
    <div className="flex flex-col items-center justify-between p-4">
      <section className="flex flex-col items-center justify-between"></section>
      <section id="products-section" className="flex flex-col gap-y-20">
        <article id="product-main" className="w-full">
          <HighlightedProduct product={products[0]} />
        </article>
        <article id="products-secondary" className="flex flex-col gap-y-4">
          <div className="flex w-full items-center justify-between">
            <div>
              <p className="text-3xl font-semibold">Our Products</p>
            </div>
            <div className="flex w-[27.5%] items-center justify-end gap-x-3">
              <FilterProductsSelect changeHandler={filterProducts} />
            </div>
          </div>
          <div className="xs:grid-cols-1 grid gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(1).map((product: Product, index: number) => {
              return (
                <ProductCard key={`product-${index + 1}`} product={product} />
              );
            })}
          </div>
        </article>
      </section>
    </div>
  );
}
