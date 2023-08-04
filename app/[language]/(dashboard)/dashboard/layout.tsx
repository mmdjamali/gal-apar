import Footer from "@/components/footer";
import { Icons } from "@/components/icons";
import MainNav from "@/components/main-nav";
import Navbar from "@/components/navbar";
import NavbarMobile from "@/components/navbar-mobile";
import SearchDrawer from "@/components/search-drawer";
import Button from "@/components/ui/button";
import UserDropdownMenu from "@/components/user-dropdown-menu";
import { cn } from "@/lib/utils";
import React from "react";

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

          <MainNav language={params.language} />

          <div className="flex items-center gap-4">
            <Button variant="text" color="foreground" className="p-2">
              <Icons.Notification className="text-[21px]" />
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
