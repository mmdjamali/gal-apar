"use client"

import "swiper/swiper-bundle.css"
import { Swiper , SwiperSlide , SwiperRef } from "swiper/react"
import SwiperCore , { Pagination, Autoplay } from "swiper"
import React from 'react'
import { IconButton } from "@mui/material"
import { Icons } from "./icons"
import { cn } from "@/lib/utils"

SwiperCore.use([Pagination,Autoplay])

function EventSwiper({
    className
} : { className ?: string }) {
    const slider = React.useRef<null | SwiperRef>(null)

    const buttons = [
        {
            onClick(){
                if(!slider.current) return
                slider.current.swiper.slidePrev()
            },
            Icon : Icons.ChevronLeft,
            style : "left-3"
        },
        {
            onClick(){
                if(!slider.current) return
                slider.current.swiper.slideNext()
            },
            Icon : Icons.ChevronRight,
            style : "right-3"
        },
    ]

    return (
        <Swiper
        className={cn(
            "group",
            className
        )}
        slidesPerView={1}
        ref={slider}
        loop
        autoplay={{
            delay : 5000,
            stopOnLastSlide : false,
            disableOnInteraction : false
        }}
        pagination={{
            clickable : true,
            enabled : true,
            el : ".bullet-container",
            bulletClass : "swiper-bullet",
            bulletActiveClass : "swiper-bullet-active"
        }}
        >

            {list.map((item,idx) => (
                <SwiperSlide
                key={idx}>
                    <div
                    className={"block w-full h-[250px] " + item}>
                    </div>
                </SwiperSlide>
            )) }
            
            {buttons.map(({ onClick, Icon, style},idx) => (
                <div
                className={cn(
                    "hidden md:inline-block opacity-0 group-hover:opacity-100 transition-all absolute top-[50%] -translate-y-[50%] z-[15]",
                    style
                )}
                key={idx}>
                    <IconButton
                    className={cn(
                        "bg-transparent border border-solid !border-lt-accent-main text-lt-accent-main",
                    )}
                    onClick={() => {
                        onClick()
                    }}>
                        <Icon/>
                    </IconButton>
                </div>
            ))}

            <div className="bullet-container flex items-center justify-center gap-1.5 absolute z-[15] !bottom-2 inset-x-0"/>

        </Swiper>
    )
}

export default EventSwiper

const list = [
    "bg-red-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-blue-500",
    "bg-orange-500",
]