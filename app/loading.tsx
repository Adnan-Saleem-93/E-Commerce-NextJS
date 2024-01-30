import LoadingHighlightedProduct from "@/components/molecules/HighlightedProduct/Loading";
import LoadingCard from "@/components/molecules/ProductCard/Loading";

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-y-8 p-4">
      <section id="products-section" className="flex w-full flex-col gap-y-8">
        <LoadingHighlightedProduct />
        <article
          id="products-secondary-loading"
          className="xs:grid-cols-1 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
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
