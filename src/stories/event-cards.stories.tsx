import EventCards from "@/components/event-cards";
import Providers from "@/components/providers";
import {Meta} from "@storybook/react";

const meta : Meta = {
    title : "Root/event-cards",
    component : EventCards
}

export default meta

export const Primary = () => <Providers><EventCards/></Providers>