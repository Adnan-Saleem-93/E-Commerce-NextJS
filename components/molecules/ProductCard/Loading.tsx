const LoadingCard = () => {
  return (
    <div className="card col-span-1 flex max-h-[400px] min-h-[400px] w-full flex-col shadow-xl">
      <div className="skeleton max-h-48 min-h-48 w-full rounded-b-none" />
      <div className="card-body flex flex-col items-start justify-center">
        <div className="skeleton h-8 w-44" />
        <div className="skeleton h-4 w-full" />
        <div className="skeleton h-4 w-full" />
        <div className="card-actions w-full items-center justify-between gap-x-4">
          <div className="skeleton h-8 w-10 md:w-24" />
          <div className="skeleton h-8 w-32 md:w-44" />
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
