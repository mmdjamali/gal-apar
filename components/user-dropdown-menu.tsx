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
import { useQuery } from "react-query";
import axios from "axios";
import Button from "./ui/button";

interface UserDropdownMenuProps {
  user: {
    image: string;
    email: string;
    username: string;
  };
}

function UserDropdownMenu({}: UserDropdownMenuProps) {
  const {
    data: user,
    error,
    isLoading,
  } = useQuery(
    ["user-profile"],
    async () => {
      const req = await axios.get("/api/me");
      return req.data;
    },
    { cacheTime: 1000 * 60 * 60, refetchOnWindowFocus: false }
  );

  if (isLoading) return <UserAvatar src="" />;

  if (user)
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <UserAvatar src={user?.image} />
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <div className="text-[14px] font-medium text-foreground px-2 py-1.5">
            <p className="">{user?.name}</p>
            <p className="text-foreground/75">{user?.email}</p>
          </div>

          <span className="bg-border w-full h-[1px] my-1" />

          {links.map(({ Icon, title, disabled, className, url }, idx) => (
            <Link
              href={disabled ? "" : url}
              key={idx}
              className={cn(disabled ? "pointer-events-none" : "")}
            >
              <DropdownMenuItem disabled={disabled} className={cn(className)}>
                <Icon className="text-[16px]" />
                {title}
              </DropdownMenuItem>
            </Link>
          ))}

          <span className="bg-border w-full h-[1px] my-1" />

          <DropdownMenuItem className="hover:text-fail hover:bg-fail/10">
            <Icons.Logout className="text-[16px]" />
            {"Logout"}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

  return (
    <Link href="/auth">
      <Button className="p-2" variant="text" color="foreground">
        <Icons.Login className="text-[21px]" />
      </Button>
    </Link>
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
