import ShoppingCart from "@/components/cart/shopping-cart";
import React from "react";

const Cart = async () => {
  return (
    <div className="flex flex-col py-6 w-full relative flex-shrink">
      <div className="flex flex-col w-full mb-6">
        <h1 className="text-[26px] font-bold">Shopping Cart</h1>
      </div>
      <div>
      <ShoppingCart />
      </div>

      {/* <div className="relative w-full flex gap-6 items-start flex-col ">
        {data &&
          data.cart.products?.map(({ product, variant, quantity }) => {
            return (
              <div className="flex items-center w-full">
                <img
                  className="h-24 aspect-square rounded"
                  src={product?.images[0] ?? ""}
                />

                <div className="flex items-center">
                  <p>{product.name}</p>
                </div>
              </div>
            );
          })}
      </div> */}
    </div>
  );
};

export default Cart;
