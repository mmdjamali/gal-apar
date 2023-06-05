import React from "react";
import { Icons } from "../icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Dropdown({
  title,
  items,
  secondary = false,
}: {
  title: string;
  items: {
    title: string;
    items: never[];
  }[];
  secondary?: boolean;
}) {
  const [active, setActive] = React.useState(false);

  if (!items || !items[0]) return <DropdownItem title={title} />;

  return (
    <>
      <div
        onClick={() => {
          setActive((prev) => !prev);
        }}
        className={`flex items-center justify-between gap-1 py-3 cursor-pointer ${
          active ? "text-lt-primary-main" : "text-lt-accent-main/80"
        } ${secondary ? "" : "px-4"}`}
      >
        <p className="text-[13px] font-medium">{title}</p>

        <Icons.ChevronDown
          className={`text-[18px] ${active ? "rotate-180" : ""}`}
        />
      </div>

      <div
        className={`transition-all overflow-hidden bg-lt-secondary-main ${
          !active ? "max-h-0" : "max-h-[999vh]"
        } ${secondary ? "" : "px-4"}`}
      >
        <div className="flex flex-col pl-3">
          {items.map(({ title, items }, idx) => {
            if (!items || !items[0])
              return <DropdownItem title={title} key={idx} secondary />;

            return <Dropdown key={idx} title={title} items={items} secondary />;
          })}
        </div>
      </div>
    </>
  );
}

function DropdownItem({
  title,
  secondary = false,
}: {
  title: string;
  secondary?: boolean;
}) {
  return (
    <Link
      href=""
      className={cn(
        "text-lt-accent-main/70 text-[13px] font-medium no-underline flex items-center justify-between py-3",
        secondary ? "" : "px-4"
      )}
    >
      <p>{title}</p>
      <Icons.ChevronRight className="text-[18px]" />
    </Link>
  );
}
