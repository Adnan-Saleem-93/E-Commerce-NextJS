import Image from "next/image";
import AppLogo from "@/assets/logo.png";
import { SEARCH_QUERY_INPUT_NAME } from "@/utils/constants";
import Link from "next/link";
import CartMenu from "@/components/molecules/Cart/CartMenu";
import { getCart } from "@/utils/db/cart";
import { redirect } from "next/navigation";
import { Yellowtail } from "next/font/google";
import { Tangerine } from "next/font/google";

const yellowtail = Yellowtail({
  weight: "400",
  subsets: ["latin"],
});
const tangerine = Tangerine({
  weight: "400",
  subsets: ["latin"],
});

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
          <Link
            href="/"
            className="btn btn-ghost flex cursor-pointer items-center justify-center gap-x-2 text-xl"
          >
            <Image alt="glamazon-logo" src={AppLogo} className="h-5 w-5" />
            <span
              className={tangerine.className}
              style={{
                transform: "rotate(342deg)",
                fontSize: "30px",
              }}
            >
              Glitz
            </span>{" "}
            &
            <span
              className={yellowtail.className}
              style={{
                transform: "rotate(342deg) translateX(-20px)",
                fontSize: "30px",
              }}
            >
              Glamour
            </span>
          </Link>
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
