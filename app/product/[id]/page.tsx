import { cache } from "react";
import prisma from "../../../utils/db/prisma";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { APP_NAME } from "@/utils/constants";
import Image from "next/image";
import PriceTag from "@/components/atoms/PriceTag";
import AddToButtonCart from "@/components/atoms/Buttons/AddToCart.Button";
import { incrementProductQuantity } from "./actions";

type Props = { params: { id: string } };

const getProduct = cache(async (id: string) => {
  return await prisma.product.findUnique({
    where: { id },
  });
});

export const generateMetadata = async ({
  params: { id },
}: Props): Promise<Metadata> => {
  const product = await getProduct(id);
  if (!product) notFound();

  return {
    title: `${product.name} | ${APP_NAME}`,
    description: product.description,
    openGraph: {
      images: [{ url: product.imageUrl }],
    },
  };
};

const ProductPage = async ({ params: { id } }: Props) => {
  const product = await getProduct(id);
  const { name, imageUrl, description, price } = product;

  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex flex-col items-center gap-y-6">
        <Image
          src={imageUrl}
          alt={name.toLowerCase().replaceAll(" ", "-")}
          width={300}
          height={200}
          className="h-full max-h-80 min-h-80 w-full rounded-2xl object-cover shadow-xl md:max-w-sm lg:max-w-lg"
          priority
        />
        <div className="flex w-full flex-col items-start gap-y-6 md:w-3/4 lg:justify-center">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-3xl font-bold">{name}</h1>
            <PriceTag
              price={price}
              className="text-3xl font-bold text-gray-700"
            />
          </div>
          <p>{description}</p>
          <div className="flex w-full flex-col items-center justify-between gap-x-4 gap-y-2 md:flex-row md:gap-x-4">
            <AddToButtonCart
              productId={product.id}
              incrementProductQuantity={incrementProductQuantity}
            />
            <button className="product-action-btn btn-primary" type="button">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
