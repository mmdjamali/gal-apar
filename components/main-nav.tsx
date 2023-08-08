"use client";

import React from "react";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { cn, createUrlInitilizer, isLtr } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  DrawerTrigger,
} from "./ui/drawer";
import Button from "./ui/button";
import Icon from "./icon";

interface MainNavProps {
  roots?: {
    title: string;
    url: string;
  }[];
  language: "tr" | "en" | "fa";
  className?: string;
}

function MainNav({ roots, className, language }: MainNavProps) {
  const pathname = usePathname();

  const createUrl = createUrlInitilizer(language);

  return (
    <>
      <div
        className={cn(
          "hidden md:flex items-center justify-center gap-8",
          className
        )}
      >
        <Link
          href={`/${language}`}
          className="hidden md:flex items-center justify-center gap-1 text-primary"
        >
          <Icon name="Logo" className="text-[28px] h-[28px]" />

          <Icon name="LogoPr" className="text-[21px] h-[21px]" />
        </Link>

        {roots ? (
          <div className="flex items-center justify-center gap-4">
            {roots?.map(({ title, url }, idx) => (
              <Link
                className={cn(
                  "text-[14px] hover:text-foreground/90 transition-all font-medium",
                  pathname?.startsWith(createUrl(url + "/")) ||
                    pathname === createUrl(url)
                    ? "text-foreground"
                    : " text-foreground/75"
                )}
                key={idx}
                href={createUrl(url)}
              >
                {title}
              </Link>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className="w-full relative">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="text" className="p-2" color="foreground">
              <Icon name="Menu" className="text-[21px]" />
            </Button>
          </DrawerTrigger>

          <DrawerPortal>
            <DrawerOverlay />
            <DrawerContent
              side={isLtr(language) ? "left" : "right"}
              className="w-[min(100%_,_360px)] border-x border-border px-5"
            >
              <div className="flex flex-row-reverse items-center justify-between py-2 border-b border-border">
                <DrawerClose asChild>
                  <Button className="p-2" color="foreground" variant="text">
                    <Icon name="Close" className="text-[21px]" />
                  </Button>
                </DrawerClose>

                <Link
                  href={`/${language}`}
                  className="flex items-center justify-center gap-1 text-primary"
                >
                  <Icon name="Logo" className="text-[28px] h-[28px]" />

                  <Icon name="LogoPr" className="text-[21px] h-[21px]" />
                </Link>
              </div>
            </DrawerContent>
          </DrawerPortal>
        </Drawer>
      </div>
    </>
  );
}

export default MainNav;
