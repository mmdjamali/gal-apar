"use client";

import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import Button from "./ui/button";
import { useTheme } from "next-themes";
import { Icons } from "./icons";

function ThemeChanger() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="text-[21px] p-2 outline-none"
          variant="outlined"
          color="foreground"
        >
          {theme === "light" ? <Icons.Sun /> : <Icons.Moon />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent align="end">
          {themes.map(({ name, Icon }, idx) => (
            <DropdownMenuItem
              className="flex gap-2 text-[14px] items-center cursor-pointer hover:bg-foreground/10"
              onClick={() => {
                setTheme(name);
              }}
              key={idx}
            >
              <Icon className="text-[16px]" />
              <p className="capitalize">{name}</p>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}

export default ThemeChanger;

const themes = [
  { name: "light", Icon: Icons.Sun },
  { name: "dark", Icon: Icons.Moon },
  { name: "system", Icon: Icons.Macbook },
];
