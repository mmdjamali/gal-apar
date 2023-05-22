"use client"

import { ThemeProvider as Provider, StyledEngineProvider, createTheme } from "@mui/material"
import { useMemo, useState } from "react"
import { lightTheme } from "./light-theme/light-theme"
import { darkTheme } from "./dark-theme/dark-theme"
import { ThemeContext, ThemeContextInterface } from "./theme-context"
import { baseTheme } from "@/lib/mui-theme"

function ThemeWrapper({
    children
} : {children : React.ReactNode}) {
    const [mode, setMode] = useState<"light" | "dark">("light")

    const contextValue : ThemeContextInterface = useMemo(() => ({
        toggleTheme(){
            setMode(prev => prev === "light" ? "dark" : "light")
            document.querySelector("html")?.classList.toggle("dark")
        }
    }),[])

    const theme = useMemo(() => {
        const themeColors = mode === "light" ? lightTheme : darkTheme
        return createTheme({
            ...baseTheme,
            ...themeColors
        })
    },[mode])

    return (
        <StyledEngineProvider injectFirst>
            <ThemeContext.Provider value={contextValue} >
                <Provider theme={theme}>
                    {children}
                </Provider>
            </ThemeContext.Provider>
        </StyledEngineProvider>
    )
}

export default ThemeWrapper