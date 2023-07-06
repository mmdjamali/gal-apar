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

        {links.map(({ Icon, title }, idx) => (
          <DropdownMenuItem
            disabled={title === "Upgrade"}
            key={idx}
            className="
            data-[disabled]:!text-foreground/50 data-[disabled]:!bg-background data-[disabled]:!cursor-pointer data-[disabled]:!pointer-events-none 
            text-[14px] font-medium text-foreground hover:bg-foreground/10 gap-2 
            transition-all cursor-pointer
            "
          >
            <Icon className="text-[16px]" />
            {title}
          </DropdownMenuItem>
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
    title: "Profile",
    Icon: Icons.User,
    url: "/me",
  },
  {
    title: "Settings",
    Icon: Icons.Setting,
    url: "/setting",
  },
  {
    title: "Upgrade",
    Icon: Icons.Sparking,
    url: "/upgrade",
  },
];
