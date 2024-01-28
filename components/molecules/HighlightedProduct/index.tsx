import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { product: Product };

const HighlightedProduct = ({ product }: Props) => {
  const { id, name, imageUrl, description } = product;
  return (
    <div className="flex flex-col md:flex-row">
      <Image
        src={imageUrl}
        alt={name.toLowerCase().replaceAll(" ", "-")}
        width={300}
        height={200}
        className="h-full max-h-80 min-h-80 w-full rounded-2xl object-cover shadow-xl md:max-w-sm lg:max-w-lg"
        priority
      />
      <div className="flex w-full flex-col items-start gap-y-2 p-4 lg:justify-center">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="line-clamp-6">{description}</p>
        <Link href={`/product/${id}`} className="btn btn-warning text-white">
          Check it Out!
        </Link>
      </div>
    </div>
  );
};

export default HighlightedProduct;
