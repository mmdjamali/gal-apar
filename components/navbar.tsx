"use client";

import Link from "next/link";

import {
  ScrollArea,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "./ui/scroll-area";
import Button from "./ui/button";
import { Icons } from "./icons";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavbarProps {
  routes: {
    icon: string;
    disabled: boolean;
    title: string;
    url: string;
    className: string;
  }[];
  className?: string;
}

const Navbar = ({ routes, className }: NavbarProps) => {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex-col bg-background block w-[200px] flex-shrink-0",
        className
      )}
    >
      <div className="flex sticky top-[53px] gap-2 flex-col w-full">
        <ScrollArea className="w-full h-[calc(100vh_-_53px)] overflow-hidden">
          <ScrollAreaViewport className="w-full h-full py-6 pr-2">
            <div className="flex gap-2 flex-col w-full h-full">
              {routes.map(({ icon, disabled, title, url }) => (
                <Link key={title} href={url}>
                  <Button
                    block
                    variant="text"
                    color="foreground"
                    className={cn(
                      "flex justify-start gap-2 px-3 py-2",
                      pathname === url
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
              ))}
            </div>
          </ScrollAreaViewport>

          <ScrollAreaScrollbar orientation="vertical">
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>
        </ScrollArea>
      </div>
    </nav>
  );
};

export default Navbar;
