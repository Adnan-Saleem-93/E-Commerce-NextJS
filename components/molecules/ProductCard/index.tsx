import PriceTag from "@/components/atoms/PriceTag";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { product: Product };

const ProductCard = ({ product }: Props) => {
  const { id, imageUrl, name, description, price, createdAt } = product;
  const isNew =
    Date.now() - new Date(createdAt).getTime() < 1000 * 60 * 60 * 24 * 7;

  return (
    <Link href={`/product/${id}`} className="col-span-1">
      <div className="card w-full bg-base-100 shadow-xl hover:shadow-2xl">
        <figure>
          <Image
            src={imageUrl}
            alt={name.toLowerCase().replaceAll(" ", "-")}
            width={384}
            height={226.75}
            className="w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          {isNew && <p className="badge badge-warning text-white">NEW!</p>}
          <p>{description}</p>
          <div className="card-actions items-center justify-between">
            <PriceTag price={price} className="text-xl font-bold" />
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
