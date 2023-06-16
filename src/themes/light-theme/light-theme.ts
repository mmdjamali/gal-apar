import { ThemeOptions } from "@mui/material";
import resolveConfig from "tailwindcss/resolveConfig";
import configModule from "../../../tailwind.config";

const TailwindConfig = resolveConfig(configModule);

export const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: TailwindConfig.theme?.colors?.lt?.primary?.main,
    },
    accent: {
      main: TailwindConfig.theme?.colors?.lt?.accent?.main,
    },
    grey: {
      "400": "#000",
    },
  },
};
