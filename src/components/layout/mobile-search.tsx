"use client"

import React from 'react'
import { Icons } from '../icons'
import { Chip, Drawer, IconButton, InputBase } from "@mui/material";
import { useDebouncedValue } from "@/hooks/use-debounced-value";
import Link from "next/link";
import { cn } from "@/lib/utils";

function MobileSearch() {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, register] = useDebouncedValue("");

  React.useEffect(() => {
    if (!searchQuery) return;
  }, [searchQuery]);

  const searched = searchQuery
    ? searchValues.filter((v) => v.search(searchQuery) >= 0)
    : [];

  return (
    <>
      <IconButton
        className="text-lt-accent-main"
        onClick={() => {
          setOpen(true);
        }}
      >
        <Icons.Search className="text-[21px]" />
      </IconButton>

      <Drawer anchor="bottom" open={open} onClose={() => {}} className="">
        <div className="min-h-screen overflow-auto relative">
          <div className="sticky top-0 flex mx-4 pb-2 pt-3 gap-2 border-[0px] bg-common-white border-b border-lt-primary-main border-solid">
            <InputBase
              placeholder="Search..."
              ref={(node: Element) => {
                if (open && node) {
                  node.querySelector("input")?.focus();
                }
              }}
              {...register()}
              className="w-full text-[12px] caret-lt-primary-main"
            />

            <IconButton
              className="text-lt-accent-main p-0"
              onClick={() => {
                setOpen(false);
              }}
            >
              <Icons.ChevronRight className="text-[25px]" />
            </IconButton>
          </div>

          {searched.length ? (
            <div className="flex flex-col py-4 gap-2 px-4 items-start relative">
              {searched.map((value, idx, list) => (
                <Link
                  className={cn(
                    "py-3 flex items-center w-full justify-between cursor-pointer no-underline text-lt-accent-main/90 border-0 border-solid border-lt-accent-main/5",
                    idx < list.length - 1 ? "border-b" : ""
                  )}
                  key={idx}
                  href={`/search?query=${value}`}
                >
                  <p className="text-[13px]">{value}</p>
                  <Icons.ChevronRight className="text-[18px]" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex w-full relative flex-col py-4 gap-4">
              <div className="flex flex-col w-full">
                <div className="flex w-full justify-between items-center px-4">
                  <div className="flex items-center justify-center gap-3">
                    <Icons.Time className="text-[24px] text-lt-accent-main/60" />

                    <p className="text-[13px] text-lt-accent-main/90 font-medium">
                      Recent searches
                    </p>
                  </div>

                  <IconButton>
                    <Icons.Trash className="text-[24px] text-lt-accent-main/60" />
                  </IconButton>
                </div>

                <div className="flex items-center justify-start gap-4 w-full max-w-full overflow-x-auto px-4">
                  {Array(2)
                    .fill("")
                    .map((_, idx) => (
                      <Chip key={idx} label="hello" />
                    ))}
                </div>
              </div>

              <div className="flex flex-col w-full">
                <div className="flex w-full justify-between items-center px-4  h-[40px]">
                  <div className="flex items-center justify-center gap-3">
                    <Icons.FireLine className="text-[24px] text-lt-accent-main/60" />

                    <p className="text-[13px] text-lt-accent-main/90 font-medium">
                      Hot topics
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-start gap-4 w-full max-w-full overflow-x-auto px-4">
                  {Array(2)
                    .fill("")
                    .map((_, idx) => (
                      <Chip key={idx} label="hello" />
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </Drawer>
    </>
  );
}

export default MobileSearch

const searchValues = "If you're developing an application, you'll want to make sure you're testing it under conditions that closely simulate a production environment. In production, you'll have an army of users banging away at your app and filling your database with data, which puts stress on your code. If you're hand-entering data into a test environment one record at a time using the UI, you're never going to build up the volume and variety of data that your app will accumulate in a few days in production. Worse, the data you enter will be biased towards your own usage patterns and won't match real-world usage, leaving important bugs undiscovered.".split(" ")
