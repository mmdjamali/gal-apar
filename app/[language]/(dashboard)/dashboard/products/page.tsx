import ProductTable from "@/components/product-table";

import React from "react";

function Products() {
  return (
    <div className="pt-6 w-full relative overflow-hidden">
      <div className="flex flex-col w-full mb-6">
        <h1 className="text-[26px] font-bold">Products</h1>

        <p className="text-[18px] text-foreground/75">
          Review, add , remove products from here
        </p>
      </div>

      <ProductTable />
    </div>
  );
}

export default Products;
