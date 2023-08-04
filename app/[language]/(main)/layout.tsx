import CartButton from "@/components/cart/cart-button";
import Footer from "@/components/footer";
import { Icons } from "@/components/icons";
import MainNav from "@/components/main-nav";
import SearchDrawer from "@/components/search-drawer";
import ThemeChanger from "@/components/theme-changer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import UserDropdownMenu from "@/components/user-dropdown-menu";
import React from "react";

interface props {
  params: {
    language: "fa" | "en" | "tr";
  };
  children: React.ReactNode;
}

function MainLayout({ children, params }: props) {
  return (
    <div className="relative flex flex-col w-full h-fit min-h-screen text-foregrounds text-[14px]">
      <div className="sticky bg-background top-0 border-b border-border w-full z-[50]">
        <header className="container px-4 sm:px-8 flex items-center justify-between py-2 max-w-[1300px] mx-auto">
          <SearchDrawer />

          <MainNav language={params.language} />

          <div className="flex items-center gap-4">
            <CartButton language={params.language} />

            <UserDropdownMenu language={params.language} />
          </div>
        </header>
      </div>

      <div className="border-b border-border min-h-[calc(100vh_-_110px)]">
        {children}
      </div>

      <Footer language={params.language} />
    </div>
  );
}

export default MainLayout;
