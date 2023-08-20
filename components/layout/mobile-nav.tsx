"use client";

import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Button from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Icon from "@/components/icon";
import { MainNavItem } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WithLanguageType } from "@/types/language";

type NavbarProps = {
  items: MainNavItem[];
  className?: string;
} & WithLanguageType;

function MobileNav({ items }: NavbarProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="p-2 lg:hidden" variant="text" color="foreground">
          <Icon name="Menu" className="text-[21px] text-foreground" />
        </Button>
      </DrawerTrigger>

      <DrawerPortal className="lg:hidden">
        <DrawerOverlay />

        <DrawerContent
          side={"left"}
          className="flex flex-col w-[min(100%_,_380px)] h-screen bg-background z-50 px-5 border-x border-border"
        >
          <div className="flex flex-row-reverse items-center justify-between pt-2">
            <DrawerClose asChild>
              <Button className="p-2" color="foreground" variant="text">
                <Icon name="Close" className="text-[21px]" />
              </Button>
            </DrawerClose>

            <Link
              href={`/`}
              className="flex items-center justify-center gap-1 text-primary flex-grow-0"
            >
              <Icon
                name="Logo"
                className="text-[28px] h-[28px] aspect-square"
              />
            </Link>
          </div>

          <span className="inline-block w-full h-[1px] bg-border my-2" />

          <div className="flex flex-col gap-2 w-full text-foreground">
            {items.map(({ icon, disabled, title, url, items }) => (
              <Accordion type="single" collapsible key={title}>
                <AccordionItem value={title}>
                  <AccordionTrigger>{title}</AccordionTrigger>

                  <AccordionContent>
                    <div className="grid gap-2">
                      {items?.map(({ title, url }) => (
                        <Link
                          className="text-foreground/75 hover:text-foreground"
                          href={url ?? ""}
                          key={title}
                        >
                          {title}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
}

export default MobileNav;
