import Layout from "@/app/layout";
import Page from "@/app/page";
import { Meta } from "@storybook/react";

const meta : Meta = {
    title : "App/home",
    component : Page
}

export default meta

export const Primary = () => (
    <Layout>
        <Page/>
    </Layout>
)