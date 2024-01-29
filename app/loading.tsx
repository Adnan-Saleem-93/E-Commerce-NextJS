const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-y-8 p-4">
      <section id="products-section" className="flex w-full flex-col gap-y-8">
        <article id="product-main" className="w-full">
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
        <article
          id="products-secondary"
          className="xs:grid-cols-1 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {[1, 2, 3, 4].map((number: number) => {
            return (
              <div
                key={number}
                className="card col-span-1 flex max-h-[500px] min-h-[500px] w-full flex-col shadow-xl"
              >
                <div className="skeleton h-full max-h-60 min-h-60 w-full rounded-b-none" />
                <div className="card-body flex flex-col items-start justify-center">
                  <div className="skeleton h-8 w-44" />
                  <div className="skeleton h-4 w-full" />
                  <div className="skeleton h-4 w-full" />
                  <div className="card-actions w-full items-center justify-between gap-x-4">
                    <div className="skeleton h-8 w-16 md:w-24" />
                    <div className="skeleton h-8 w-32 md:w-44" />
                  </div>
                </div>
              </div>
            );
          })}
        </article>
      </section>
    </div>
  );
};

export default LoadingPage;
