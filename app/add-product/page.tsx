import React from "react";

type Props = {};

const AddProductPage = (props: Props) => {
  return (
    <div className="h-full w-full">
      <h1 className="text-lg font-bold tracking-wider">Add Product</h1>

      <form>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs"
        />
      </form>
    </div>
  );
};

export default AddProductPage;
