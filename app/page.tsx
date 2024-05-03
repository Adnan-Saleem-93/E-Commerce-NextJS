import { Product } from "@prisma/client";
import ProductCard from "@/components/molecules/ProductCard";
import HighlightedProduct from "@/components/molecules/HighlightedProduct";
import { Metadata } from "next";
import { APP_NAME, KEYS } from "@/utils/constants";
import FilterProductsSelect from "@/components/molecules/Form/FilterProductsSelect";
import { findProductsWithFullCount } from "./actions";
import Pagination from "@/components/molecules/Pagination";
import { SearchParamsProps } from "@/utils/types";

export const metadata: Metadata = {
  title: `Products | ${APP_NAME}`,
};

const PAGE_LIMIT: number = 10;

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParamsProps;
}) {
  const filterBy: string = searchParams ? searchParams[KEYS.FILTER_BY_KEY] : "";
  const searchQuery: string = searchParams ? searchParams[KEYS.SEARCH_KEY] : "";
  const PAGE: string = searchParams ? searchParams[KEYS.PAGE_KEY] : "";

  const filter = filterBy?.split("-")[0] || "";
  const ascOrDesc = filterBy?.split("-")[1] || "asc";

  const SKIP_ITEMS: number = PAGE ? (Number(PAGE) - 1) * PAGE_LIMIT : 0;

  const { pagination, data } = await findProductsWithFullCount({
    where: {
      ...(searchQuery && {
        name: { contains: searchQuery, mode: "insensitive" },
      }),
      isHighlighted: false || undefined,
    },
    skip: SKIP_ITEMS,
    take: PAGE_LIMIT,
    orderBy: filter ? { [filter]: ascOrDesc } : { createdAt: "desc" },
  });

  const highlightProductData: Product[] | undefined =
    await prisma?.product.findMany({
      where: { isHighlighted: true },
    });
  const highlightProduct: Product | null = highlightProductData
    ? highlightProductData[0]
    : null;
  const products: Product[] = data?.length ? data : [];

  const pages: number = pagination.pages;

  return (
    <div className="flex flex-col items-center justify-between p-4">
      {products?.length || highlightProduct ? (
        <section id="products-section" className="flex flex-col gap-y-10">
          {!searchQuery && highlightProduct && (
            <article id="product-main" className="w-full">
              <HighlightedProduct product={highlightProduct} />
            </article>
          )}
          {products.length ? (
            <article id="products-secondary" className="flex flex-col gap-y-4">
              <div className="flex w-full items-center justify-between">
                {pages > 1 && (
                  <div>
                    <Pagination totalPages={pages} />
                  </div>
                )}
                <div>
                  <p className="text-3xl font-semibold">
                    {searchQuery ? (
                      <span className="text-gray-500">
                        Showing results for
                        <span className="text-black">
                          {" "}
                          &quot;{searchQuery}&quot;
                        </span>
                      </span>
                    ) : (
                      "Our Products"
                    )}
                  </p>
                </div>
                <div className="flex w-[27.5%] items-center justify-end gap-x-3">
                  <FilterProductsSelect />
                </div>
              </div>
              <div className="xs:grid-cols-1 grid gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product: Product, index: number) => {
                  return (
                    <ProductCard
                      key={`product-${index + 1}`}
                      product={product}
                    />
                  );
                })}
              </div>
            </article>
          ) : null}
        </section>
      ) : (
        <section id="not-found-section" className="mt-4">
          <p className="text-3xl font-semibold">
            {searchQuery ? (
              <span className="text-gray-500">
                No results found for
                <span className="text-black"> &quot;{searchQuery}&quot;</span>
              </span>
            ) : (
              <span className="text-gray-500">No results found</span>
            )}
          </p>
        </section>
      )}
    </div>
  );
}
