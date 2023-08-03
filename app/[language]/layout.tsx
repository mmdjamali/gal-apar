import { Inter, Vazirmatn, IBM_Plex_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import React from "react";
import { Metadata } from "next";
import Providers from "@/components/providers";
import { cn } from "@/lib/utils";
import Toaster from "@/components/ui/toaster";
import "@/styles/global.css";

const languages = {
  fa: {},
  en: {},
  tr: {},
};

interface RootLayoutProps {
  params: {
    language: keyof typeof languages;
  };
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

const ibm_plex_sans_arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gal apar | online-marketplace",
  description:
    "Gal apar is an open source marketplace, built with next js app router",
  publisher: "1stMmD",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children, params }: RootLayoutProps) {
  if (!languages[params.language]) return notFound();

  return (
    <html lang={params.language} dir={params.language === "fa" ? "rtl" : "ltr"}>
      <body
        // when direction is rtl, there is some problems with hiding scrollbar,
        // to fix this we have to handle adding paddings manualy in ui elemets and remove margin,
        // due to used !important in radix-ui's margin we have to use inline-styles
        style={{ margin: "0px !important" }}
        className={cn(
          "bg-background"
          // inter.className,
          // ibm_plex_sans_arabic.className
        )}
      >
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
