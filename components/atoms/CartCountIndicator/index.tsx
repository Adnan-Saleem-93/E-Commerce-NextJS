import CartIcon from "../Icons/CartIcon";

export default function CartCountIndicator() {
  return (
    <div className="indicator cursor-pointer rounded-full p-2">
      <CartIcon fill="#000" />
      <span className="badge indicator-item badge-primary badge-sm mr-1 mt-2">
        8
      </span>
    </div>
  );
}
