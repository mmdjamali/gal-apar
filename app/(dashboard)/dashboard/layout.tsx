import Footer from "@/components/footer";
import MainNav from "@/components/main-nav";
import Navbar from "@/components/navbar";
import SearchDrawer from "@/components/search-drawer";
import UserDropdownMenu from "@/components/user-dropdown-menu";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="relative flex flex-col w-full h-fit min-h-screen text-foregrounds text-[14px]">
      <div className="sticky bg-background top-0 border-b border-border w-full z-[50]">
        <header className="container px-4 sm:px-8 flex items-center justify-between py-2 max-w-[1300px] mx-auto">
          <SearchDrawer />

          <MainNav />

          <div className="flex items-center gap-4">
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

      <div className="relative w-full flex border-b border-border min-h-[calc(100vh_-_110px)]">
        <div className="flex container px-4 sm:px-8 max-w-[1300px] mx-auto relative">
          <Navbar routes={routes} className="hidden sm:flex mr-6" />
          {children}
        </div>
      </div>

      <Footer />
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
