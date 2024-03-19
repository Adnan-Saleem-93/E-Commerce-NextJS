import { Product } from "@prisma/client";
import ProductCard from "@/components/molecules/ProductCard";
import HighlightedProduct from "@/components/molecules/HighlightedProduct";
import { Metadata } from "next";
import { APP_NAME } from "@/utils/constants";
import FilterProductsSelect from "@/components/molecules/Form/FilterProductsSelect";
import { findProductsWithFullCount } from "./actions";
import Pagination from "@/components/molecules/Pagination";
import { SearchParamsProps } from "@/utils/types";

export const metadata: Metadata = {
  title: `Products | ${APP_NAME}`,
};

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParamsProps;
}) {
  const filterBy: string = searchParams?.filter_by || "";

  const filter = filterBy?.split("-")[0] || "";
  const ascOrDesc = filterBy?.split("-")[1] || "asc";

  const { pagination, data } = await findProductsWithFullCount({
    orderBy: filter ? { [filter]: ascOrDesc } : { createdAt: "desc" },
  });

  const products: Product[] = data;
  const pages: number = pagination.pages;

  return (
    <div className="flex flex-col items-center justify-between p-4">
      <section className="flex flex-col items-center justify-between"></section>
      <section id="products-section" className="flex flex-col gap-y-20">
        <article id="product-main" className="w-full">
          <HighlightedProduct product={products[0]} />
        </article>
        <article id="products-secondary" className="flex flex-col gap-y-4">
          <div className="flex w-full items-center justify-between">
            {pages > 1 && (
              <div>
                <Pagination pages={pages} />
              </div>
            )}
            <div>
              <p className="text-3xl font-semibold">Our Products</p>
            </div>
            <div className="flex w-[27.5%] items-center justify-end gap-x-3">
              <FilterProductsSelect />
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
