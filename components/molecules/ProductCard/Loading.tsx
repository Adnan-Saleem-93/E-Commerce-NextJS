const LoadingCard = () => {
  return (
    <div className="card col-span-1 flex max-h-[500px] min-h-[500px] w-full flex-col shadow-xl">
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
};

export default LoadingCard;
