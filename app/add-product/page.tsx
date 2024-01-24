import CancelButton from "@/components/atoms/Buttons/CancelButton";
import prisma from "../../utils/db/prisma";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Add Product | E-Commerce App",
};

async function createProduct(formData: FormData) {
  "use server";

  try {
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();
    const price = Number(formData.get("price") || 0);

    if (!name || !description || !imageUrl || !price) {
      throw Error("Missing required fields.");
    }

    const response = await prisma?.product.create({
      data: { name, description, imageUrl, price },
    });

    if (response) {
      redirect("/");
    }
  } catch (err) {
    console.log(err);
  }
}

const AddProductPage = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-y-3">
      <h1 className="text-lg font-bold uppercase tracking-wider text-blue-600">
        Add Product
      </h1>

      <form
        className="grid w-full grid-cols-2 gap-3 md:w-2/3 lg:w-1/2"
        action={createProduct}
      >
        <input
          type="text"
          required
          name="name"
          placeholder="Product Name"
          className="input input-bordered input-primary col-span-2"
        />
        <textarea
          required
          name="description"
          className="textarea textarea-primary col-span-2"
          placeholder="Description"
          rows={4}
        />
        <input
          type="url"
          required
          name="imageUrl"
          placeholder="Image URL"
          className="input input-bordered input-primary col-span-2"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="input input-bordered input-primary col-span-1 col-start-1"
          min={1}
        />

        <button
          className="btn btn-primary col-span-1 col-start-1 uppercase"
          type="submit"
        >
          Add
        </button>
        <CancelButton customClasses="col-span-1" />
      </form>
    </section>
  );
};

export default AddProductPage;
