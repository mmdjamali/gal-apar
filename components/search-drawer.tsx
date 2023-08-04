"use client";

import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerPortal,
  DrawerTrigger,
} from "./ui/drawer";
import Button from "./ui/button";
import { Icons } from "./icons";
import Input from "./ui/input";

function SearchDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          color="foreground"
          variant="text"
          className="p-2 flex-shrink-0 sm:hidden"
        >
          <Icons.Search className="text-[21px]" />
        </Button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerContent side="bottom" className="flex sm:hidden flex-col">
          <div className="flex gap-2 py-2 px-4 bg-background">
            <DrawerClose asChild>
              <Button variant="text" color="foreground" className="p-2">
                <Icons.ArrowLeft className="text-[21px]" />
              </Button>
            </DrawerClose>

            <Input className="w-full" />
          </div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
}

export default SearchDrawer;
