import React from "react";

const AddProductPage = () => {
  return (
    <div className="flex h-full w-full flex-col gap-y-3">
      <h1 className="text-lg font-bold tracking-wider">Add Product</h1>

      <form className="grid w-1/2 grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Product Name"
          className="input input-bordered input-secondary col-span-2"
        />
        <textarea
          className="textarea textarea-secondary col-span-2"
          placeholder="Description"
          rows={4}
        ></textarea>
        <input
          type="number"
          placeholder="Price"
          className="input input-bordered input-secondary col-span-1 col-start-1"
          min={1}
        />

        <button
          className="btn btn-primary col-span-1 col-start-1 uppercase"
          type="submit"
        >
          Create
        </button>
        <button className="btn col-span-1" type="button">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
