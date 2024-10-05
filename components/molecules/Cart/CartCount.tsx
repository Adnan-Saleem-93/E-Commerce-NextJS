import CartIcon from "@/components/atoms/Icons/CartIcon";

type Props = { cartCount?: number };
export default function CartCount({ cartCount = 0 }: Props) {
  return (
    <div className="indicator cursor-pointer rounded-full p-2">
      <CartIcon fill="#000" />
      <span className="badge indicator-item badge-accent badge-sm mr-1 mt-2 text-white">
        {cartCount}
      </span>
    </div>
  );
}
