"use client";

import ThemeWrapper from "@/themes/theme-wrapper";
import { SessionProvider } from "next-auth/react";

interface props {
  children: React.ReactNode;
}

function Providers({ children }: props) {
  return (
    <ThemeWrapper>
      <SessionProvider>{children}</SessionProvider>
    </ThemeWrapper>
  );
}

export default Providers;
