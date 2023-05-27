import { ThemeOptions } from "@mui/material";
import resolveConfig from "tailwindcss/resolveConfig";
import configModule from "../../../tailwind.config";

const TailwindConfig = resolveConfig(configModule)

export const lightTheme : ThemeOptions = {
    palette : {
        primary : {
            main : TailwindConfig.theme?.colors?.lt?.primary?.main
        }
    }
}