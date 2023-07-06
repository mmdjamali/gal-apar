"use client";

import React from "react";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface MainNavProps {
  roots: {
    title: string;
    url: string;
  }[];
}

function MainNav({ roots }: MainNavProps) {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-center gap-8">
      <div className="flex items-center justify-center gap-1 text-primary">
        <Icons.Logo className="text-[28px] h-[28px]" />

        <Icons.LogoPr className="text-[21px] h-[21px]" />
      </div>

      <div className="flex items-center justify-center gap-4">
        {roots?.map(({ title, url }, idx) => (
          <Link
            className={cn(
              "text-[14px] hover:text-foreground/90 transition-all font-medium",
              pathname?.startsWith(url + "/") || pathname === url
                ? "text-foreground"
                : " text-foreground/75"
            )}
            key={idx}
            href={url}
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MainNav;
