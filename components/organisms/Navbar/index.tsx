import Image from "next/image";
import AppLogo from "@/assets/logo.png";
import { APP_NAME } from "@/utils/constants";
import CartCountIndicator from "@/components/atoms/CartCountIndicator";
import Link from "next/link";
import CartMenu from "@/components/molecules/CartMenu";

export default function Navbar() {
  return (
    <nav className="body-bg p-4">
      <div className="navbar mx-auto box-border rounded-lg bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link
            href="/"
            className="flex cursor-pointer items-center justify-center gap-x-2 text-xl"
          >
            <Image alt="glamazon-logo" src={AppLogo} className="h-5 w-5" />
            {APP_NAME}
          </Link>
        </div>
        <div className="flex-none gap-x-4">
          <Link href="/add-product">
            <button className="btn btn-primary uppercase" type="submit">
              Add New Product
            </button>
          </Link>
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          {/* <CartCountIndicator /> */}
          <CartMenu />
        </div>
      </div>
    </nav>
  );
}
