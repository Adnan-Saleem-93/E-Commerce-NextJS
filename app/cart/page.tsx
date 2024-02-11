import NoResultText from "@/components/atoms/Typography/NoResultText";
import CartItem from "@/components/molecules/Cart/CartItem";
import { CartItemWithProduct, getCart } from "@/utils/db/cart";

export default async function CartPage() {
  const cart = await getCart();

  return (
    <div className="flex flex-col gap-y-10">
      {cart?.items.length ? (
        <div className="grid grid-cols-1">
          {cart?.items.map((item: CartItemWithProduct, index: number) => {
            return <CartItem key={index} item={item} />;
          })}
        </div>
      ) : (
        <div className="mx-auto mt-8 w-full text-center">
          <NoResultText text="Cart is Empty" className="text-4xl" />
        </div>
      )}
    </div>
  );
}