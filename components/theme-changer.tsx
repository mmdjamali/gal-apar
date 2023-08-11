"use client";

import React, { useEffect, useState } from "react";

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
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="text-[21px] p-2 outline-none"
          variant="outlined"
          color="foreground"
        >
          {(() => {
            const Icon =
              themes.filter(({ name }) => name === theme)[0]?.Icon ??
              Icons.Circle;

            return <Icon />;
          })()}
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
