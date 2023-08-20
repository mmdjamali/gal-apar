import React, { useMemo } from "react";

import Icon from "../icon";
import { WithLanguageType } from "@/types/language";
import { useGetCart } from "@/hooks/cart/use-get-cart";
import { CartProductType } from "@/types/cart";
import { useGetWidth } from "@/hooks/use-get-width";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Bedge } from "../ui/bedge";
import { colors } from "@/constant/colors";
import Link from "next/link";
import { createUrlInitilizer } from "@/lib/utils";

function ShippingCart({ language }: WithLanguageType) {
  const { data, isLoading } = useGetCart();

  const cart = useMemo(
    () =>
      data?.cart?.products?.reduce(
        (prev: { products: CartProductType[] }, p: CartProductType) => {
          if (p.product) {
            prev.products.push(p);
          }

          return prev;
        },
        {
          ...data.cart,
          products: [],
        }
      ),
    [data]
  );

  const [container, width] = useGetWidth(data, isLoading);

  const createUrl = createUrlInitilizer(language);

  if (isLoading)
    return (
      <Layout>
        <></>
      </Layout>
    );

  if (cart?.products)
    return (
      <Layout>
        <div ref={container}>
          <Swiper
            spaceBetween={2}
            slidesPerView={(width ?? 142) / 142}
            className="w-full"
          >
            {cart.products.map(
              ({ product, _id, quantity, variant }: CartProductType) => (
                <SwiperSlide key={_id}>
                  <div className="relative w-full flex flex-col items-center">
                    <Bedge number={quantity} className="w-full " color="">
                      <Link href={createUrl("/product/" + _id)}>
                        <div className="relative w-full aspect-square rounded overflow-hidden">
                          <Image
                            fill
                            unoptimized
                            src={product.images[0]}
                            alt={product.name}
                          />
                        </div>
                      </Link>
                    </Bedge>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {variant?.color ? (
                      <div className="flex items-center gap-1 text-foreground/75">
                        <span
                          style={{
                            backgroundColor: colors.filter(
                              ({ name }) => name === variant?.color
                            )[0]?.hexCode,
                          }}
                          className="w-4 aspect-square rounded-full border"
                        />

                        <p className="text-[12px] text-foreground/75 font-medium">
                          {variant?.color}
                        </p>
                      </div>
                    ) : (
                      <></>
                    )}

                    {variant?.size ? (
                      <div className="flex items-center gap-1">
                        <Icon
                          name="Ruler"
                          className="text-[16px] text-foreground/75"
                        />

                        <p className="text-[12px] font-medium leading-none text-foreground/75">
                          {variant?.size}
                        </p>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </Layout>
    );

  return (
    <Layout>
      <></>
    </Layout>
  );
}

export default ShippingCart;

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col w-full relative rounded border border-border p-5 overflow-hidden">
    <div className="flex w-full items-center justify-between mb-3">
      <h3 className="text-[14px] font-semibold">Products in cart</h3>
      <Icon name="Cart" className="text-[21px]" />
    </div>
    {children}
  </div>
);
