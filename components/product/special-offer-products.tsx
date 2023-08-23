"use client";

import React, { Fragment, useEffect, useRef, useState } from "react";
import { Icons } from "../icons";
import Button from "../ui/button";
import axios from "axios";
import { useQuery } from "react-query";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/swiper-bundle.css";
import { cn, createUrlInitilizer, isLtr, toPersianNumbers } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { WithLanguageType } from "@/types/language";
import Icon from "../icon";

function SpecialOfferProducts({ language }: WithLanguageType) {
  const createUrl = createUrlInitilizer(language);

  const { data, isLoading, isError } = useQuery(
    ["special-offers"],
    async () => {
      const res = await axios.get(`/api/product`);

      return res.data;
    }
  );

  const [width, setWidth] = useState<number>(0);

  const swiper = useRef<null | SwiperRef>(null);

  const [move, setMove] = useState({
    next: false,
    prev: false,
  });

  useEffect(() => {
    if (!swiper.current || isLoading) return;

    setWidth(swiper.current.swiper.el.clientWidth);
    setMove({
      next: swiper.current ? !swiper.current.swiper.isEnd : false,
      prev: false,
    });

    const handleResize = () => {
      if (!swiper.current) return;
      setWidth(swiper.current.swiper.el.clientWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [swiper, isLoading, data]);

  if (isLoading)
    return (
      <div className="flex rounded w-full h-[264px] bg-foreground/25 animate-pulse" />
    );

  return (
    <div className="flex w-full relative items-center rounded bg-primary px-1 ">
      <Swiper
        ref={swiper}
        spaceBetween={2}
        onSlideChange={(s) => {
          const num = data?.length + 1;
          setMove({
            prev: !!s.progress,
            next: Math.round(s.progress * num) / num !== 1,
          });
        }}
        slidesPerView={width / 172 || 0.1}
        className="!py-3 w-full"
      >
        <SwiperSlide>
          <div className="relative flex flex-shrink-0 flex-col snap-center bg-primary items-center justify-center w-[170px] h-[240px]">
            <span className="p-3 rounded-full bg-white">
              <Icons.Cart className="text-[32px] text-primary" />
            </span>
            <p className="text-[14px] text-white font-bold">Populer</p>
          </div>
        </SwiperSlide>

        {!isLoading && !isError && (
          <>
            {data.map(
              (
                {
                  images,
                  base_price,
                  _id,
                }: {
                  images: string[];
                  base_price: number;
                  _id: string;
                },
                idx: number,
                list: ProductType[]
              ) => (
                <SwiperSlide key={idx}>
                  <div
                    dir="ltr"
                    className={cn(
                      "flex w-[170px] items-start gap-1 flex-col relative p-3 flex-shrink-0 snap-center h-[240px] bg-background",
                      idx === 0
                        ? isLtr(language)
                          ? "rounded-l"
                          : "rounded-r"
                        : "",
                      idx === list.length - 1
                        ? isLtr(language)
                          ? "rounded-r"
                          : "rounded-l"
                        : ""
                    )}
                  >
                    <Link
                      href={createUrl("/product/" + _id)}
                      key={idx}
                      className="w-full inline-block relative aspect-square overflow-hidden rounded"
                    >
                      <Image
                        alt=""
                        className="object-cover"
                        fill
                        src={images[0]}
                        unoptimized
                      />
                    </Link>

                    <div className="flex w-full gap-1 items-center">
                      {(() => {
                        return (
                          <Icon name="try" className="text-[14px] h-[14px]" />
                        );
                      })()}
                      <p className="font-bold text-foreground">
                        {(() => {
                          if (!isLtr(language)) {
                            return toPersianNumbers(base_price);
                          }
                          return base_price;
                        })()}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
          </>
        )}
      </Swiper>

      {isLtr(language) ? (
        <div className="hidden z-[25] md:flex px-2 w-full absolute left-0 right-0 my-auto pointer-events-none">
          {move.prev && (
            <Button
              onClick={() => {
                swiper?.current?.swiper.slidePrev();
              }}
              variant="outlined"
              color="foreground"
              className="p-2 pointer-events-auto bg-background hover:bg-background"
            >
              <Icons.LeftArrow className="text-[21px]" />
            </Button>
          )}

          {move.next && (
            <Button
              onClick={() => {
                swiper?.current?.swiper.slideNext();
              }}
              variant="outlined"
              color="foreground"
              className="p-2 ml-auto pointer-events-auto bg-background hover:bg-background"
            >
              <Icons.RightArrow className="text-[21px]" />
            </Button>
          )}
        </div>
      ) : (
        <div className="hidden z-[25] md:flex px-2 w-full absolute left-0 right-0 my-auto pointer-events-none">
          {move.prev && (
            <Button
              onClick={() => {
                swiper?.current?.swiper.slidePrev();
              }}
              variant="outlined"
              color="foreground"
              className="p-2 pointer-events-auto bg-background hover:bg-background"
            >
              <Icons.RightArrow className="text-[21px]" />
            </Button>
          )}

          {move.next && (
            <Button
              onClick={() => {
                swiper?.current?.swiper.slideNext();
              }}
              variant="outlined"
              color="foreground"
              className="p-2 mr-auto pointer-events-auto bg-background hover:bg-background"
            >
              <Icons.LeftArrow className="text-[21px]" />
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default SpecialOfferProducts;
