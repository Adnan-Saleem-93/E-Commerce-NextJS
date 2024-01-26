import { formatPrice } from "@/utils/helper-methods";

type Props = { price: number; className?: string };

const PriceTag = ({ price, className = "" }: Props) => {
  return <span className={`${className}`}>{formatPrice(price)}</span>;
};

export default PriceTag;
