import prisma from "../../../utils/db/prisma";

type Props = { id: string };

const ProductPage = async ({ id }: Props) => {
  const product = await prisma.product.findFirst({ where: { id } });

  return <div>ProductPage</div>;
};

export default ProductPage;
