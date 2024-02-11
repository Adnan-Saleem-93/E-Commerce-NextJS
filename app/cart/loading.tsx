import CartItemLoading from "@/components/molecules/Cart/ItemLoading";

export default function LoadingCartPage() {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {[1, 2, 3, 4, 5, 6].map((number: number) => {
          return <CartItemLoading key={number} />;
        })}
      </div>
    </div>
  );
}
