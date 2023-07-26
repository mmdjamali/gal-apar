import { Metadata } from "next";
import "../styles/global.css";
import { Inter } from "next/font/google";
import Providers from "@/components/providers";
import { cn } from "@/lib/utils";
import Toaster from "@/components/ui/toaster";

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

export const metadata: Metadata = {
  title: "Gal apar | online-marketplace",
  description:
    "Gal apar is an open source marketplace, built with next js app router",
  publisher: "1stMmD",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("bg-background", inter.className)}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
