import ShoppingCart from "@/components/cart/shopping-cart";
import { PropsWithLanguage } from "@/types/language";
import React from "react";

const Cart = async ({ params }: PropsWithLanguage<{}>) => {
  return (
    <div className="flex flex-col py-6 w-full relative flex-shrink">
      <div className="flex flex-col w-full mb-6">
        <h1 className="text-[26px] font-bold">Shopping Cart</h1>
      </div>
      <div>
        <ShoppingCart language={params.language} />
      </div>
    </div>
  );
};

export default Cart;
