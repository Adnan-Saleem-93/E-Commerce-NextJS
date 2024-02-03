import Image from "next/image";
import AppLogo from "@/assets/logo.png";
import { APP_NAME } from "@/utils/constants";
import CartCountIndicator from "@/components/atoms/CartCountIndicator";

export default function Navbar() {
  return (
    <nav className="body-bg p-4">
      <div className="navbar mx-auto box-border rounded-lg bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <Image alt="glamazon-logo" src={AppLogo} className="h-5 w-5" />
            {APP_NAME}
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered input-primary w-24 md:w-auto"
            />
          </div>

          <CartCountIndicator />
        </div>
      </div>
    </nav>
  );
}
