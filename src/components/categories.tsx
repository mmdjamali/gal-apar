import React from "react";
import { Icons } from "./icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

function Categories({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-[15px] px-4", className)}>
      <div className="flex justify-between">
        <h3 className="text-[16px] md:text-[24px] font-medium text-lt-accent-main">
          Newest at
        </h3>

        <Link
          href=""
          className="flex items-center no-underline justify-center gap-1 text-lt-accent-main"
        >
          <p className="text-[12px] md:text-[14px] leading-none">Show more</p>

          <Icons.ChevronRight className="text-[14px]  md:text-[16px]" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative">
        {Array(6)
          .fill("")
          .map((item, idx) => (
            <Link
              href=""
              key={idx}
              className="w-full aspect-square bg-red-500 rounded-[15px] relative overflow-hidden group"
            >
              <div
                className="absolute top-0 left-0 w-full aspect-[2/1] 
                    z-[15] bg-gradient-to-t from-transparent to-neutral-800/75
                    opacity-0 group-hover:opacity-100 transition-opacity
                    "
              />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Categories;
