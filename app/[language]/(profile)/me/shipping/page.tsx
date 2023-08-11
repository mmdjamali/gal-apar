import Icon from "@/components/icon";
import ShippingView from "@/components/shipping/shipping-view";
import Button from "@/components/ui/button";
import { PropsWithLanguage } from "@/types/language";
import Link from "next/link";
import React from "react";

function ShippingPage({ params }: PropsWithLanguage<{}>) {
  return (
    <div className="flex flex-col gap-4 py-6 w-full relative flex-shrink text-foreground">
      <div className="w-full relative flex flex-col items-center justify-center gap-4 rounded border border-border p-4 py-6 md:p-8 overflow-hidden">
        <Icon name="LogoPr" className="h-[42px] text-primary" />

        <div className="w-full flex items-center justify-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-1 place-items-center text-primary/75">
            <Icon name="Cart" className="text-[28px]" />
            <p className="text-[14px] md:text-[16px] font-medium">Cart</p>
          </div>

          <span className="inline-block w-10 md:w-14 h-[1px] bg-primary flex-shrink" />

          <div className="flex flex-wrap items-center justify-center gap-1">
            <Icon
              name="Truck"
              className="text-[28px] text-primary flex-shrink-0"
            />
            <p className="text-[14px] md:text-[16px] text-primary font-medium">
              Shipping
            </p>
          </div>

          <span className="inline-block flex-shrink w-10 md:w-14 h-[1px] bg-foreground/50" />

          <div className="flex flex-wrap items-center justify-center gap-1 place-items-center text-foreground/50">
            <Icon name="Wallet" className="text-[28px]" />
            <p className="text-[14px] md:text-[16px] font-medium">Payment</p>
          </div>
        </div>
      </div>

      <div>
        <ShippingView language={params.language} />
      </div>
    </div>
  );
}

export default ShippingPage;
