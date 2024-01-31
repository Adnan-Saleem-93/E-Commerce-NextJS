type Props = { className?: string };

export default function LoadingButton({ className = "" }: Props) {
  return (
    <div
      className={`btn skeleton flex items-center justify-center rounded-lg ${className}`}
    />
  );
}
