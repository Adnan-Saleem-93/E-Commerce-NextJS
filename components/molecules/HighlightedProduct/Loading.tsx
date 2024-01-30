const LoadingHighlightedProduct = () => {
  return (
    <article id="product-main-loading" className="w-full">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="skeleton h-full max-h-80 min-h-80 w-full rounded-2xl object-cover shadow-xl md:max-w-sm lg:max-w-lg"></div>
        <div className="flex w-full flex-col items-start gap-y-2 md:justify-center">
          <div className="skeleton h-10 w-36"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton mt-4 h-10 w-44"></div>
        </div>
      </div>
    </article>
  );
};

export default LoadingHighlightedProduct;
