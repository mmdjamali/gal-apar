"use client";

import { QueryClientProvider } from "react-query";

import { ThemeProvider } from "next-themes";

import { queryClient } from "@/lib/query-client";
import { SessionProvider } from "next-auth/react";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default Providers;
