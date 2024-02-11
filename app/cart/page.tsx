import NoResultText from "@/components/atoms/Typography/NoResultText";
import CartItem from "@/components/molecules/Cart/CartItem";
import { CartItemWithProduct, getCart } from "@/utils/db/cart";
import { formatPrice } from "@/utils/helper-methods";

export default async function CartPage() {
  const cart = await getCart();

  return (
    <div className="flex flex-col gap-y-10">
      {cart?.items.length ? (
        <div className="grid grid-cols-1">
          {cart?.items.map((item: CartItemWithProduct, index: number) => {
            return (
              <CartItem
                key={index}
                item={item}
                isLastItem={index === cart?.items.length - 1}
              />
            );
          })}

          <div className="flex w-full flex-col items-center justify-between">
            <div className="my-8 h-[2px] w-full bg-black"></div>
            <div className="flex w-full items-center justify-between">
              <h4 className="text-2xl font-semibold uppercase text-gray-600">
                Sub Total :
              </h4>
              <span className="text-4xl font-bold">
                {formatPrice(cart.subTotal)}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto mt-8 w-full text-center">
          <NoResultText text="Cart is Empty" className="text-4xl" />
        </div>
      )}
    </div>
  );
}
