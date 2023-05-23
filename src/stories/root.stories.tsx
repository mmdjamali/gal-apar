import Providers from "@/components/providers"
import SpecialProductGroup from "@/components/special-product-group"
import { Meta } from "@storybook/react"

const meta : Meta = {
    title : "Root/special-product-group",
    component : SpecialProductGroup
}

export default meta

export const Normal = () => <Providers><SpecialProductGroup/></Providers>