import { APP_NAME, SEARCH_QUERY_INPUT_NAME } from "@/utils/constants";
import Link from "next/link";
import CartMenu from "@/components/molecules/Cart/CartMenu";
import { getCart } from "@/utils/db/cart";
import { redirect } from "next/navigation";
import AppName from "@/components/atoms/Typography/AppName";

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
    <nav className="body-bg p-2">
      <div className="navbar mx-auto box-border rounded-lg bg-base-100 shadow-sm">
        <div className="flex-1">
          <AppName />
        </div>
        <div className="flex-none gap-x-4">
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
