"use client";

import React from "react";
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
} from "../ui/drawer";
import Button from "../ui/button";
import Icon from "../icon";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { MainNavItem } from "@/types";

interface MainNavProps {
  items: MainNavItem[];
  language: "tr" | "en" | "fa";
  className?: string;
}

function MainNav({ items, className, language }: MainNavProps) {
  const pathname = usePathname();

  const createUrl = createUrlInitilizer(language);

  return (
    <div
      className={cn(
        "hidden lg:flex items-center justify-center gap-8",
        className
      )}
    >
      <Link
        href={`/${language}`}
        className="hidden lg:flex items-center justify-center gap-1 text-primary"
      >
        <Icon name="Logo" className="text-[28px] h-[28px]" />

        <Icon name="LogoPr" className="text-[21px] h-[21px]" />
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          {items?.[0]?.items && (
            <NavigationMenuItem>
              <NavigationMenuTrigger>{items[0].title}</NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="grid p-6 gap-3 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_,_1fr]">
                  <li className="row-span-3">
                    <a className="flex gap-3 h-full w-full rounded p-6 flex-col items-start justify-center bg-gradient-to-t from-primary to-primary/75 cursor-pointer">
                      <Icon
                        name="Logo"
                        className="text-[28px] h-[28px] text-white"
                      />

                      <Icon
                        name="LogoPr"
                        className="text-white h-[24px] text-[24px]"
                      />

                      <p className="text-white">{siteConfig?.description}</p>
                    </a>
                  </li>

                  {items?.[0].items?.map(({ title, url, description }) => (
                    <NavigationMenuLink
                      key={title}
                      asChild
                      className="p-3 items-start"
                    >
                      <Link href={url ?? "#"}>
                        <li key={title} className="w-full flex flex-col gap-2">
                          <div className="text-sm leading-none font-medium">
                            {title}
                          </div>

                          <p className="text-sm text-foreground/75 ">
                            {description}
                          </p>
                        </li>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )}

          {items
            .filter(({ title }) => title !== items?.[0]?.title)
            .map(({ items, title }) => (
              <NavigationMenuItem key={title}>
                <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid p-6 gap-3 w-[400px] md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                    {items?.map(({ title, url, description }) => (
                      <NavigationMenuLink key={title} className="p-3" asChild>
                        <Link href={url ?? "#"}>
                          <li
                            key={title}
                            className="flex w-full flex-col gap-2"
                          >
                            <div className="text-sm leading-none font-medium">
                              {title}
                            </div>

                            <p className="text-sm text-foreground/75 ">
                              {description}
                            </p>
                          </li>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex md:hidden w-full relative">
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
    </div>
  );
}

export default MainNav;
