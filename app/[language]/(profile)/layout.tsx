import CartButton from "@/components/cart/cart-button";
import Footer from "@/components/footer";
import MainNav from "@/components/main-nav";
import Navbar from "@/components/navbar";
import NavbarMobile from "@/components/navbar-mobile";
import SearchDrawer from "@/components/search-drawer";
import UserDropdownMenu from "@/components/user-dropdown-menu";
import { cn } from "@/lib/utils";
import React from "react";

interface DashboardLayoutProps {
  params: {
    language: "fa" | "en" | "tr";
  };
  children: React.ReactNode;
}

const ProfileLayout = ({ children, params }: DashboardLayoutProps) => {
  return (
    <div className="relative flex flex-col w-full h-fit min-h-screen text-foregrounds text-[14px]">
      <div className="sticky bg-background top-0 border-b border-border w-full z-[50]">
        <header className="container px-4 sm:px-8 flex items-center justify-between py-2 max-w-[1300px] mx-auto">
          <NavbarMobile language={params.language} routes={routes} />

          <MainNav language={params.language} />

          <div className="flex items-center gap-4">
            <CartButton language={params.language} />

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

export default ProfileLayout;

const routes = [
  {
    title: "profile",
    icon: "User",
    url: "/me",
    disabled: false,
    className: "",
  },
  {
    title: "setting",
    icon: "Setting",
    url: "/me/setting",
    disabled: false,
    className: "",
  },
  {
    title: "cart",
    icon: "Cart",
    url: "/me/cart",
    disabled: false,
    className: "",
  },
];
