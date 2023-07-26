import { Icons } from "@/components/icons";
import SpecialOfferProducts from "@/components/product/special-offer-products";
import Button from "@/components/ui/button";
import {
  ScrollArea,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@/components/ui/scroll-area";
import React from "react";

function page() {
  return (
    <div className="flex flex-col container px-4 sm:px-8 max-w-[1300px] mx-auto relative">
      <div className="flex w-full h-[268px] md:h-[368px] bg-foreground rounded mt-4"></div>

      <div className="grid w-full gap-6 place-items-center grid-cols-4 md:grid-cols-8 justify-center py-6">
        {Array(8)
          .fill("")
          .map(() => {
            return (
              <Button className="p-2" variant="outlined" color="foreground">
                <Icons.Circle className="text-[21px]" />
              </Button>
            );
          })}
      </div>

      <SpecialOfferProducts />

      {/* <div className="flex w-full relative items-center rounded">
        <ScrollArea className="block scroll w-full realtive rounded bg-primary p-4 overflow-hidden">
          <ScrollAreaViewport
            className="flex w-full h-full scroll snap-proximity
           snap-x"
          >
            <div className="flex items-center gap-2 rounded">
              <div className="flex flex-col snap-center  bg-primary items-center justify-center w-[160px] h-[210px]">
                <span className="p-3 rounded-full bg-background">
                  <Icons.Cart className="text-[32px] text-primary" />
                </span>
                <p className="text-[14px] text-background font-bold">Populer</p>
              </div>
              {Array(8)
                .fill("")
                .map(() => (
                  <div className="flex snap-center w-[160px] h-[210px] bg-background rounded"></div>
                ))}
            </div>
          </ScrollAreaViewport>

          <ScrollAreaScrollbar orientation="horizontal">
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>
        </ScrollArea>
      </div> */}
    </div>
  );
}

export default page;
