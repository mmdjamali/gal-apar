import CartButton from "@/components/cart/cart-button";
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

      <footer className="container flex flex-col md:flex-row items-center justify-between gap-4 max-w-[1300px] mx-auto py-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://avatars.githubusercontent.com/u/97102957?v=4" />
          <AvatarFallback />
        </Avatar>

        {params.language === "fa" ? (
          <p className="font-medium md:ml-auto text-center">
            ساخته شده توسط{" "}
            <a className="underline" href="https://github.com/1stMmD">
              1stMmD
            </a>{" "}
            و دپلوی شده در{" "}
            <a className="underline" href="https://vercel.com">
              Vercel
            </a>
          </p>
        ) : (
          <p className="font-medium md:mr-auto text-center">
            Built by{" "}
            <a className="underline" href="https://github.com/1stMmD">
              1stMmD
            </a>{" "}
            and deployed on{" "}
            <a className="underline" href="https://vercel.com">
              Vercel
            </a>
          </p>
        )}

        <ThemeChanger />
      </footer>
    </div>
  );
}

export default MainLayout;
