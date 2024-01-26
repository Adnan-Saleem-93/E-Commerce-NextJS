import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { product: Product };

const ProductCard = ({ product }: Props) => {
  const { id, imageUrl, name, description } = product;
  return (
    <Link href={`/product/${id}`} className="col-span-1">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <Image
            src={imageUrl}
            alt={name.toLowerCase().replaceAll(" ", "-")}
            width={384}
            height={226.75}
            style={{ objectFit: "cover" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
