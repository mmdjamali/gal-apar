import React from "react";
import { Icons } from "./icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

function Categories({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-6 p-4", className)}>
      <h3 className="text-[16px] md:text-[21px] font-medium text-lt-accent-main text-center">
        Categories
      </h3>

      <div className="flex flex-wrap items-center justify-center gap-4 relative">
        {Array(6)
          .fill("")
          .map((item, idx) => (
            <Link
              href=""
              key={idx}
              className="flex flex-col items-center gap-1 no-underline"
            >
              <div className="w-[100px] aspect-square bg-red-500 rounded-[15px] relative overflow-hidden group">
                <div
                  className="absolute top-0 left-0 w-full aspect-[2/1] 
                    z-[15] bg-gradient-to-t from-transparent to-neutral-800/75
                    opacity-0 group-hover:opacity-100 transition-opacity
                    "
                />
              </div>

              <p className=" text-[13px] text-lt-accent-main/90">Hello</p>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Categories;
