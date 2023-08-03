import React from "react";
import ProductForm from "@/components/add-product/product-form";

function AddProduct() {
  return (
    <div className="flex flex-col gap-6 py-6 w-full relative text-[14px] text-foreground">
      <div className="flex flex-col w-full">
        <h1 className="text-[26px] font-bold">Add New Product</h1>

        {/* <p className="text-[18px] text-foreground/75">
          Add
        </p> */}
      </div>

      <ProductForm />
    </div>
  );
}

export default AddProduct;
