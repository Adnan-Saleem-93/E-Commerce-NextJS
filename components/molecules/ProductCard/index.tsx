import PriceTag from "@/components/atoms/PriceTag";
import RatingOverview from "@/components/atoms/Rating/Overview";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { product: Product };

const ProductCard = ({ product }: Props) => {
  const { id, imageUrl, name, description, price, createdAt, rating } = product;
  const isNew =
    Date.now() - new Date(createdAt).getTime() < 1000 * 60 * 60 * 24 * 7;

  return (
    <Link
      href={`/product/${id}`}
      className="group col-span-1 flex min-h-[340px] flex-col gap-y-4 rounded-xl hover:bg-base-200"
    >
      <Image
        src={imageUrl}
        alt={name.toLowerCase().replaceAll(" ", "-")}
        width={384}
        height={226.75}
        className="h-full max-h-60 min-h-60 w-full rounded-xl object-cover"
      />
      <div className="flex h-1/2 flex-col justify-between gap-y-2 p-2">
        <div className="card-actions items-center justify-between">
          <h2 className="card-title">{name}</h2>

          <PriceTag price={price} className="text-xl font-bold text-accent" />
        </div>
        {isNew && (
          <p className="badge badge-warning max-h-6 min-h-6 text-white">NEW!</p>
        )}

        <div className="card-actions items-center justify-between">
          <RatingOverview rating={rating} />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
