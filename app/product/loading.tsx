import LoadingButton from "@/components/atoms/Buttons/Loading";

export default function LoadingPage() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex w-full items-center justify-end">
        <LoadingButton className="w-[10rem]" />
      </div>
      <div className="flex flex-col items-center gap-y-6">
        <div className="skeleton h-full max-h-80 min-h-80 w-full rounded-2xl object-cover shadow-xl md:max-w-sm lg:max-w-lg" />
        <div className="flex w-full flex-col items-start gap-y-6 md:w-3/4 lg:justify-center">
          <div className="flex w-full items-center justify-between">
            <div className="skeleton h-12 w-36" />
            <div className="skeleton h-12 w-36" />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-y-2">
            <div className="skeleton h-4 w-full" />
            <div className="skeleton h-4 w-full" />
            <div className="skeleton h-4 w-full" />
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-x-4 gap-y-2 md:flex-row md:gap-x-4">
            <LoadingButton className="w-full md:w-1/2" />
            <LoadingButton className="w-full md:w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
}
