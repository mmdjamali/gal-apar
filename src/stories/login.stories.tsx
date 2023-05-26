import Login from "@/app/(auth)/login/page"
import Providers from "@/components/providers"
import { Meta } from "@storybook/react"

const meta : Meta = {
    title : "Login",
    component : Login
}

export default meta

export const Normal = () => <Providers><Login/></Providers>