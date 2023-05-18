"use client"

import { theme } from "@/lib/mui-theme"
import { ThemeProvider } from "@mui/material/"

interface props {
  children : React.ReactNode
}

function Providers({
  children
} : props ) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default Providers