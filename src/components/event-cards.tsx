"use client"

import "swiper/swiper-bundle.css"
import { Swiper , SwiperSlide , SwiperRef } from "swiper/react"
import SwiperCore , { Pagination, Autoplay } from "swiper"
import React from 'react'
import { IconButton } from "@mui/material"
import { Icons } from "./icons"

SwiperCore.use([Pagination,Autoplay])

function EventCards() {
    const slider = React.useRef<null | SwiperRef>(null)

    return (
        <Swiper
        className="group"
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
            
            <div
            className="flex gap-2 opacity-0 z-[15] group-hover:opacity-100 transition-opacity absolute bottom-5 right-10">
                <IconButton
                className="bg-white border border-solid !border-neutral-300"
                onClick={() => {
                    if(!slider.current) return
                    slider.current.swiper.slidePrev()
                }}>
                    <Icons.ChevronLeft/>
                </IconButton>

                <IconButton
                className="bg-white border border-solid !border-neutral-300"
                onClick={() => {
                    if(!slider.current) return
                    slider.current.swiper.slideNext()
                }}>
                    <Icons.ChevronRight/>
                </IconButton>
            </div>

            <div className="bullet-container flex items-center justify-center gap-1.5 absolute z-[15] !bottom-2 inset-x-0"/>

        </Swiper>
    )
}

export default EventCards

const list = [
    "bg-red-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-blue-500",
    "bg-orange-500",
]