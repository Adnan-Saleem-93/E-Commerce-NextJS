import CartItemLoading from "@/components/molecules/Cart/ItemLoading";

export default function LoadingCartPage() {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="grid grid-cols-1">
        {[1, 2, 3].map((number: number) => {
          return <CartItemLoading key={number} isLastItem={number === 6} />;
        })}
      </div>
    </div>
  );
}
