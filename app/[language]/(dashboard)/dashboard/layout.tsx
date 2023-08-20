import Link from "next/link";
import React from "react";

import Icon from "@/components/icon";
import UserDropdownMenu from "@/components/user-dropdown-menu";
import Button from "@/components/ui/button";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavbarMobile from "@/components/layout/navbar-mobile";

import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  params: {
    language: "fa" | "en" | "tr";
  };
  children: React.ReactNode;
}

const DashboardLayout = ({ children, params }: DashboardLayoutProps) => {
  return (
    <div className="relative flex flex-col w-full h-fit min-h-screen text-foregrounds text-[14px]">
      <div className="sticky bg-background top-0 border-b border-border w-full z-[50]">
        <header className="container px-4 sm:px-8 flex items-center justify-between py-2 max-w-[1300px] mx-auto">
          <NavbarMobile language={params.language} routes={routes} />

          <Link
            href={`/${params.language}`}
            className="flex items-center justify-center gap-1 text-primary"
          >
            <Icon name="Logo" className="text-[28px] h-[28px]" />

            <Icon name="LogoPr" className="text-[21px] h-[21px]" />
          </Link>

          <div className="flex items-center gap-4">
            <Button variant="text" color="foreground" className="p-2">
              <Icon name="Notification" className="text-[21px]" />
            </Button>

            <UserDropdownMenu language={params.language} />
          </div>
        </header>
      </div>

      <div className="relative w-full flex border-b border-border min-h-[calc(100vh_-_110px)]">
        <div className="flex container px-4 sm:px-8 max-w-[1300px] mx-auto relative">
          <Navbar
            routes={routes}
            className={cn(
              "hidden sm:flex",
              params.language === "fa" ? "ml-6" : " mr-6"
            )}
            language={params.language}
          />
          {children}
        </div>
      </div>

      <Footer language={params.language} />
    </div>
  );
};

export default DashboardLayout;

const routes = [
  {
    title: "overview",
    icon: "LineChart",
    url: "/dashboard/overview",
    disabled: false,
    className: "",
  },
  {
    title: "products",
    icon: "Box",
    url: "/dashboard/products",
    disabled: false,
    className: "",
  },
  {
    title: "orders",
    icon: "FileList",
    url: "/dashboard/orders",
    disabled: false,
    className: "",
  },
  {
    title: "payments",
    icon: "BankCard",
    url: "/dashboard/payments",
    disabled: false,
    className: "",
  },
  {
    title: "add-product",
    icon: "Add",
    url: "/dashboard/add-product",
    disabled: false,
    className: "",
  },
];
