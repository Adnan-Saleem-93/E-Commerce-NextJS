import CartIcon from "../Icons/CartIcon";

export default function CartCountIndicator() {
  return (
    <div className="indicator cursor-pointer rounded-full border border-black p-2 hover:bg-slate-200">
      <CartIcon fill="#000" />
      <span className="badge indicator-item badge-primary badge-sm mr-1">
        8
      </span>
    </div>
  );
}
