"use client";

import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  DrawerTrigger,
} from "./ui/drawer";
import Button from "./ui/button";
import { Icons } from "./icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn, createUrlInitilizer, isLtr } from "@/lib/utils";
import { WithLanguageType } from "@/types/language";
import Icon from "./icon";

type NavbarProps = {
  routes: {
    icon: string;
    disabled: boolean;
    title: string;
    url: string;
    className: string;
  }[];
  className?: string;
} & WithLanguageType;

function NavbarMobile({ routes, language }: NavbarProps) {
  const pathname = usePathname();

  const createUrl = createUrlInitilizer(language);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="p-2 sm:hidden" variant="text" color="foreground">
          <Icons.Menu className="text-[21px]" />
        </Button>
      </DrawerTrigger>

      <DrawerPortal className="sm:hidden">
        <DrawerOverlay />

        <DrawerContent
          side={isLtr(language) ? "left" : "right"}
          className="flex flex-col w-[min(100%_,_300px)] h-screen bg-background z-50 px-5 border-x border-border"
        >
          <div className="flex flex-row-reverse items-center justify-between pt-2">
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

          <span className="inline-block w-full h-[1px] bg-border my-2" />

          <div className="flex flex-col gap-2 w-full">
            {routes.map(({ icon, disabled, title, url }) => (
              <DrawerClose asChild key={title}>
                <Link href={createUrl(url)}>
                  <Button
                    dir={isLtr(language) ? "ltr" : "rtl"}
                    block
                    variant="text"
                    color="foreground"
                    className={cn(
                      "flex justify-start gap-2 px-3 py-2",
                      pathname === createUrl(url)
                        ? "text-foreground bg-foreground/10 hover:bg-foreground/20"
                        : ""
                    )}
                  >
                    {(() => {
                      const Icon = Icons[icon];
                      return <Icon className="text-[16px] h-[16px]" />;
                    })()}
                    <p className="font-medium capitalize">{title}</p>
                  </Button>
                </Link>
              </DrawerClose>
            ))}
          </div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
}

export default NavbarMobile;
