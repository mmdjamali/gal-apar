import MainNav from "@/components/main-nav";
import ThemeChanger from "@/components/theme-changer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UserDropdownMenu from "@/components/user-dropdown-menu";
import React from "react";

interface props {
  children: React.ReactNode;
}

function MainLayout({ children }: props) {
  return (
    <div className="relative flex flex-col w-full h-fit min-h-screen text-foregrounds text-[14px]">
      <div className="sticky bg-background top-0 border-b border-border w-full z-[50]">
        <header className="container flex items-center justify-between py-2 max-w-[1300px] mx-auto">
          <MainNav
            roots={[
              {
                title: "Home",
                url: "/home",
              },
              {
                title: "Kingdoms",
                url: "/kingdoms",
              },
              {
                title: "Players",
                url: "/players",
              },
            ]}
          />

          <div>
            <UserDropdownMenu
              user={{
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFB9UjhBnlKl_IklgL03Jz7ZuaKFPdEzFcEw&usqp=CAU",
                email: "aquamarine@gmail.com",
                username: "Aqua",
              }}
            />
          </div>
        </header>
      </div>

      <div className="border-b border-border min-h-[calc(100vh_-_114px)]">
        {children}
      </div>

      <footer className="container flex items-center justify-between gap-4 max-w-[1300px] mx-auto py-2">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://avatars.githubusercontent.com/u/97102957?v=4" />
            <AvatarFallback />
          </Avatar>

          <p className="font-medium">
            This project is made by{" "}
            <a className="underline" href="https://github.com/1stMmD">
              1stMmD
            </a>{" "}
            and deployed with{" "}
            <a className="underline" href="https://vercel.com">
              Vercel
            </a>
          </p>
        </div>

        <ThemeChanger />
      </footer>
    </div>
  );
}

export default MainLayout;
