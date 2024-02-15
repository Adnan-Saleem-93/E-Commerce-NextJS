const LoadingHighlightedProduct = () => {
  return (
    <article id="product-main-loading" className="h-full w-full">
      <div className="flex h-full flex-col gap-8 md:flex-row">
        <div className="skeleton h-full max-h-80 min-h-80 w-full rounded-2xl object-cover shadow-xl md:max-w-sm lg:max-w-lg"></div>
        <div className="flex w-full flex-col items-start justify-between gap-y-2">
          <div className="skeleton h-10 w-44"></div>
          <div className="flex w-full flex-col gap-y-3">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="skeleton h-10 w-44"></div>
        </div>
      </div>
    </article>
  );
};

export default LoadingHighlightedProduct;
