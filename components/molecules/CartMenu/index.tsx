import CartCountIndicator from "@/components/atoms/CartCountIndicator";
import Image from "next/image";

export default function CartMenu() {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
        <CartCountIndicator />
      </div>
      <div
        tabIndex={0}
        className="card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-gray-400">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
