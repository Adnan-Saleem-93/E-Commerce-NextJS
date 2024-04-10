import CartMenu from "@/components/molecules/Cart/CartMenu";
import { getCart } from "@/utils/db/cart";
import AppName from "@/components/atoms/Typography/AppName";
import UserAccountMenu from "@/components/molecules/Dropdowns/UserAccountMenu";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import SearchBar from "@/components/atoms/Form/SearchBar";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  const cart = await getCart();

  return (
    <nav className="body-bg p-2">
      <div className="navbar mx-auto box-border rounded-lg bg-base-100 ring-2 ring-sky-300/80">
        <div className="w-1/3 flex-1">
          <AppName />
        </div>
        <div className="w-1/3 flex-1">
          <SearchBar />
        </div>
        <div className="w-1/3 flex-1 justify-end gap-x-4">
          <CartMenu cart={cart} />
          <UserAccountMenu session={session} />
        </div>
      </div>
    </nav>
  );
}
