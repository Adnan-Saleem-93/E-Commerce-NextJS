import LoadingHighlightedProduct from "@/components/molecules/HighlightedProduct/Loading";
import LoadingCard from "@/components/molecules/ProductCard/Loading";

const LoadingPage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-between gap-y-20 p-4">
      <section
        id="products-section"
        className="flex h-full w-full flex-col gap-y-8"
      >
        <LoadingHighlightedProduct />
        <article
          id="products-secondary-loading"
          className="xs:grid-cols-1 grid gap-20 sm:grid-cols-2 lg:grid-cols-3"
        >
          {[1, 2, 3].map((number: number) => {
            return <LoadingCard key={number} />;
          })}
        </article>
      </section>
    </div>
  );
};

export default LoadingPage;
