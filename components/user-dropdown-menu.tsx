"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import UserAvatar from "./user-avatar";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface UserDropdownMenuProps {
  user: {
    image: string;
    email: string;
    username: string;
  };
}

function UserDropdownMenu({ user }: UserDropdownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <UserAvatar src={user?.image} />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <div className="text-[14px] font-medium text-foreground px-2 py-1.5">
          <p className="">{user.username}</p>
          <p className="text-foreground/75">{user.email}</p>
        </div>

        <span className="bg-border w-full h-[1px] my-1" />

        {links.map(({ Icon, title, disabled, className, url }, idx) => (
          <Link
            href={disabled ? "" : url}
            key={idx}
            className={cn(disabled ? "pointer-events-none" : "")}
          >
            <DropdownMenuItem
              disabled={disabled}
              className={cn(
                "data-[disabled]:!text-foreground/50 data-[disabled]:!bg-background data-[disabled]:!cursor-pointer data-[disabled]:!pointer-events-none text-[14px] font-medium text-foreground hover:bg-foreground/10 gap-2 transition-all cursor-pointer",
                className
              )}
            >
              <Icon className="text-[16px]" />
              {title}
            </DropdownMenuItem>
          </Link>
        ))}

        <span className="bg-border w-full h-[1px] my-1" />

        <DropdownMenuItem className="text-[14px] font-medium text-foreground hover:text-fail hover:bg-fail/10 gap-2 transition-all cursor-pointer">
          <Icons.Logout className="text-[16px]" />
          {"Logout"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserDropdownMenu;

const links = [
  {
    type: "button",
    title: "Profile",
    Icon: Icons.User,
    url: "/me",
    className: "",
    disabled: false,
  },
  {
    type: "button",
    title: "Settings",
    Icon: Icons.Setting,
    url: "/setting",
    className: "",
    disabled: false,
  },
  {
    type: "button",
    title: "Upgrade",
    Icon: Icons.Sparking,
    url: "/upgrade",
    className: "",
    disabled: true,
  },
  {
    type: "button",
    title: "Dashboard",
    Icon: Icons.Dashboard,
    url: "/dashboard/overview",
    className: "hover:bg-warning/10 hover:text-warning",
    disabled: false,
  },
];
