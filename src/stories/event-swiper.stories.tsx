import EventSwiper from "@/components/event-swiper";
import Providers from "@/components/providers";
import {Meta} from "@storybook/react";

const meta : Meta = {
    title : "Root/event-swiper",
    component : EventSwiper
}

export default meta

export const Primary = () => <Providers><EventSwiper/></Providers>