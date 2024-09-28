export const formatPrice = (price: number) => {
  return (price / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export function debounce<F extends (...args: any[]) => any>(
  func: F,
  timeout: number = 1000,
): (...args: Parameters<F>) => void {
  let timer: ReturnType<typeof setTimeout> | undefined;
  return (...args: Parameters<F>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(args);
    }, timeout);
  };
}
