"use client"

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css";
import { Icons } from "./icons";
import Image from "next/image";
import SpecialProduct from "./special-product";

function SpecialProductGroup({
    className
} : { className ?: string }) {
  return (
    <div
    className={cn(
        'flex items-center justify-center bg-lt-accent-main px-2 py-3 relative rounded-lg',
        className
    )}>
        <Swiper
        grabCursor
        className="w-full relative h-[210px]"
        spaceBetween={8}
        width={154}>
            
            <SwiperSlide>
                <div
                className="flex flex-col items-center h-full justify-center gap-3">
                    <div className="inline-block w-[116px] h-[112px] relative">
                        <Image
                        unoptimized
                        className="object-cover blend-bu"
                        alt=""
                        fill={true}
                        src="https://s3-alpha-sig.figma.com/img/f97a/292c/65268bdf2c0cdde87dfd943cb134a9c0?Expires=1685923200&Signature=Z9BC3XyAFsmObc4D3WZjbsQISR1apId4ue5B13DgWgIDUaVTjed686kP3TNu12JocN5N1eM8rZF5Jc1O2IeY5w-wWXTrmbrwGurWs815~slJHLjsAqSpJGKs-u0IuRta53IOlJjF66BgWuci88xrlNNoiwhW0sxiaYZP99RpVDNm9CIqkpUqv~JoYqJ05D-7AJ-ZGgwg4~upcD6cnwhZANbyJlgb4BnFAzkXEbtWBToimxBx-~hildrMTR0nLhYiomLRy5bEY3kH47YOHkiABNETRNgK1PDUMbzAc5U4lc0TJ~MgyGMxkENXfq6bt4WkXCSrk6sP1k~I9Gh7teyp2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        />
                    </div>

                    <Link href="" className="text-white no-underline text-[14px] flex items-center justify-center">
                        See All <Icons.ChevronRight className="text-[14px]"/>
                    </Link>
                </div>
            </SwiperSlide>

            {Array(10).fill("").map((_,idx,list) => (
                <SwiperSlide key={idx}>
                    <SpecialProduct className={cn(
                        "inline-flex w-full h-full bg-white",
                        idx === 0 ? "rounded-l-md" : "",
                        idx === list.length - 1 ? "rounded-r-md" : ""
                    )}/>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default SpecialProductGroup