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
import { cn, createUrlInitilizer } from "@/lib/utils";
import Link from "next/link";
import { useQuery } from "react-query";
import axios from "axios";
import Button from "./ui/button";
import { signOut, useSession } from "next-auth/react";

interface UserDopdownMenuProps {
  language: "tr" | "fa" | "en";
}

function UserDropdownMenu({ language }: UserDopdownMenuProps) {
  const { data, status } = useSession();

  const createUrl = createUrlInitilizer(language);

  const links = [
    {
      type: "button",
      title: "Profile",
      Icon: Icons.User,
      url: createUrl("/me"),
      className: "",
      disabled: false,
    },
    {
      type: "button",
      title: "Settings",
      Icon: Icons.Setting,
      url: createUrl("/setting"),
      className: "",
      disabled: false,
    },
    {
      type: "button",
      title: "Upgrade",
      Icon: Icons.Sparking,
      url: createUrl("/upgrade"),
      className: "",
      disabled: true,
    },
    {
      type: "button",
      title: "Dashboard",
      Icon: Icons.Dashboard,
      url: createUrl("/dashboard/overview"),
      className: "hover:bg-warning/10 hover:text-warning",
      disabled: !data?.user.is_seller ?? true,
    },
  ];

  if (status === "loading")
    return (
      <span className="w-9 aspect-square rounded-full bg-foreground/25 animate-pulse animate-infinite" />
    );

  if (status === "authenticated")
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <UserAvatar src={data.user?.image} />
        </DropdownMenuTrigger>

        <DropdownMenuContent align={language === "fa" ? "start" : "end"}>
          <div className="text-[14px] font-medium text-foreground px-2 py-1.5">
            <p className="">{data.user?.name}</p>
            <p className="text-foreground/75">{data.user?.email}</p>
          </div>

          <span className="bg-border w-full h-[1px] my-1" />

          {links.map(({ Icon, title, disabled, className, url }, idx) => (
            <Link
              href={disabled ? "#" : url}
              key={idx}
              className={cn(disabled ? "cursor-not-allowed" : "")}
            >
              <DropdownMenuItem disabled={disabled} className={cn(className)}>
                <Icon className="text-[16px]" />
                {title}
              </DropdownMenuItem>
            </Link>
          ))}

          <span className="bg-border w-full h-[1px] my-1" />

          <DropdownMenuItem
            className="hover:text-error hover:bg-error/10"
            onClick={() => {
              signOut();
            }}
          >
            <Icons.Logout className="text-[16px]" />
            {"Logout"}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

  return (
    <Link href={createUrl("/auth")}>
      <Button className="p-2" variant="text" color="foreground">
        <Icons.Login className="text-[21px]" />
      </Button>
    </Link>
  );
}

export default UserDropdownMenu;
