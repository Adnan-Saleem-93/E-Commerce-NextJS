import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { product: Product };

const HighlightedProduct = ({ product }: Props) => {
  const { id, name, imageUrl, description } = product;
  return (
    <div className="rounded-2xl bg-base-200">
      <div className="flex flex-col lg:flex-row">
        <Image
          src={imageUrl}
          alt={name.toLowerCase().replaceAll(" ", "-")}
          width={300}
          height={200}
          className="h-full w-full rounded-t-2xl object-cover lg:rounded-l-2xl lg:rounded-tr-none"
          priority
        />
        <div className="flex w-full flex-col items-start p-4 lg:justify-center">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="py-3">{description}</p>
          <Link href={`/product/${id}`} className="btn btn-success">
            Check it Out!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HighlightedProduct;
