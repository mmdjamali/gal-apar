"use client";

import React from "react";
import { Icons } from "../icons";
import Link from "next/link";
import { Divider } from "@mui/material";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col flex-shrink-0 items-start h-full overflow-y-auto min-w-[220px] border-0 border-r border-solid border-lt-secondary-main px-4">
      <div
        className="flex w-full items-center h-[56px] border-pre-flight border-b border-lt-secondary-main mb-3
      "
      >
        <Icons.LogoEn className="h-[24px] text-lt-primary-main" />
      </div>

      <div className="flex flex-col gap-2 w-full">
        {sections.map(({ Icon, title, href }, idx) => (
          <Link
            href={href}
            key={idx}
            className={cn(
              "flex items-center justify-start  no-underline gap-2 py-2 px-3 w-full rounded-[8px] capitalize",
              pathname === href
                ? "text-white bg-lt-primary-main/90 font-medium"
                : "text-lt-accent-main/75 hover:bg-lt-accent-main/5"
            )}
          >
            <Icon className="text-[21px] h-[21px] flex-shrink-0" />

            <p className="text-[13px] leading-none">{title}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default DashboardNav;

const sections = [
  {
    title: "overview",
    href: "/dashboard",
    Icon: Icons.EyeLine,
  },
  {
    title: "orders",
    href: "/dashboard/orders",
    Icon: Icons.Package,
  },
  {
    title: "products",
    href: "/dashboard/products",
    Icon: Icons.Star,
  },
];
