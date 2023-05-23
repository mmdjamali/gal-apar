import MobileApplicationBar from "@/components/layout/mobile-application-bar"
import Providers from "@/components/providers"
import { Meta } from "@storybook/react"

const meta : Meta = {
    title : "Root/mobile-application-bar",
    component : MobileApplicationBar
}

export default meta

export const Normal = () => <Providers><MobileApplicationBar/></Providers>