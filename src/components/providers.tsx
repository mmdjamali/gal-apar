"use client"

import ThemeWrapper from "@/themes/theme-wrapper"

interface props {
  children : React.ReactNode
}

function Providers({
  children
} : props ) {
  return (
    <ThemeWrapper>
      {children}
    </ThemeWrapper>
  )
}

export default Providers