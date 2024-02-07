import Image from "next/image";
import AppLogo from "@/assets/logo.png";
import { APP_NAME, SEARCH_QUERY_INPUT_NAME } from "@/utils/constants";
import Link from "next/link";
import CartMenu from "@/components/molecules/CartMenu";
import { getCart } from "@/utils/db/cart";
import { redirect } from "next/navigation";

const searchProducts = async (formData: FormData) => {
  "use server";

  const searchQuery = formData.get(SEARCH_QUERY_INPUT_NAME)?.toString();

  if (searchQuery) {
    redirect(`/search?query=${searchQuery}`);
  }
};

export default async function Navbar() {
  const cart = await getCart();

  return (
    <nav className="body-bg p-4">
      <div className="navbar mx-auto box-border rounded-lg bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link
            href="/"
            className="btn btn-ghost flex cursor-pointer items-center justify-center gap-x-2 text-xl"
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
          <form action={searchProducts}>
            <div className="form-control">
              <input
                name={SEARCH_QUERY_INPUT_NAME}
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
          </form>

          <CartMenu cart={cart} />
        </div>
      </div>
    </nav>
  );
}
