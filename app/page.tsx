import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Link href="/add-product">
        <button className="btn btn-primary uppercase" type="submit">
          Add New Product
        </button>
      </Link>
    </main>
  );
}
