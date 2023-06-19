import { ThemeOptions } from "@mui/material";
import resolveConfig from "tailwindcss/resolveConfig";
import configModule from "../../../tailwind.config";

const TailwindConfig = resolveConfig(configModule);

export const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: TailwindConfig.theme?.colors?.primary as string,
    },
    accent: {
      main: TailwindConfig.theme?.colors?.accent as string,
    },
    grey: {
      "400": "#000",
    },
  },
};
