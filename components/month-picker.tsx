"use client";

import React, { useState } from "react";
import Button from "./ui/button";
import { Icons } from "./icons";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
} from "./ui/popover";
import { cn } from "@/lib/utils";

interface MonthPickerProps {
  value: Date | null;
  onChange: (date: null | Date) => void;
}

function MonthPicker({ onChange, value }: MonthPickerProps) {
  const date = new Date();
  const [year, setYear] = useState<number>(date.getFullYear());

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outlined"
          color="foreground"
          className="relative gap-2 border-border"
        >
          <Icons.Calender className="text-[16px] flex-shrink-0" />
          <div className="flex items-center justify-center gap-2 w-full relative h-[21px] text-[12px]">
            {value ? (
              (() => {
                let newMonth = value.getMonth() - 6;
                let newYear = value.getFullYear();

                if (newMonth < 0) {
                  newMonth += 12;
                  newYear -= 1;
                }

                const from = value;
                const to = new Date(newYear, newMonth);
                return (
                  <>
                    <p className="inline-block w-full leading-none">
                      {from.getFullYear() +
                        "/" +
                        (from.getMonth() + 1 < 10
                          ? "0" + (from.getMonth() + 1).toString()
                          : from.getMonth() + 1)}
                    </p>
                    {" - "}
                    <p className="inline-block w-full leading-none">
                      {to.getFullYear() +
                        "/" +
                        (to.getMonth() + 1 < 10
                          ? "0" + (to.getMonth() + 1).toString()
                          : to.getMonth() + 1)}
                    </p>
                  </>
                );
              })()
            ) : (
              <p className="">Select date</p>
            )}
          </div>
        </Button>
      </PopoverTrigger>

      <PopoverPortal>
        <PopoverContent sideOffset={4} className="bg-transparent" align="start">
          {/* <PopoverArrow alignmentBaseline="middle" className="fill-border" /> */}

          <div className="flex flex-col p-3 bg-background border border-border rounded">
            <div className="flex items-center justify-between">
              <Button
                color="foreground"
                variant="outlined"
                className="p-2"
                onClick={() => {
                  setYear((prev) => --prev);
                }}
              >
                <Icons.LeftArrow className="text-[16px]" />
              </Button>
              <p className="text-[14px]">{year}</p>
              <Button
                color="foreground"
                variant="outlined"
                className="p-2"
                onClick={() => {
                  setYear((prev) => ++prev);
                }}
              >
                <Icons.RightArrow className="text-[16px]" />
              </Button>
            </div>
            <div className="grid w-full grid-cols-4 mt-2">
              {Array(12)
                .fill("")
                .map((_, idx) => (
                  <Button
                    disabled={
                      year > date.getFullYear()
                        ? true
                        : date.getFullYear() === year && idx > date.getMonth()
                    }
                    onClick={() => {
                      if (
                        value?.getFullYear() === year &&
                        value?.getMonth() === idx
                      )
                        return onChange(null);

                      onChange(new Date(year, idx));
                    }}
                    variant={
                      value?.getFullYear() === year && value?.getMonth() === idx
                        ? "contained"
                        : "text"
                    }
                    color="foreground"
                    className={cn(
                      "text-[12px] p-2",
                      date?.getFullYear() === year && date?.getMonth() === idx
                        ? value?.getFullYear() === year &&
                          value?.getMonth() === idx
                          ? ""
                          : "bg-foreground/10"
                        : "",
                      year > date.getFullYear()
                        ? "hover:bg-transparent"
                        : date.getFullYear() === year && idx > date.getMonth()
                        ? "hover:bg-transparent"
                        : ""
                    )}
                    key={idx}
                  >
                    <p className="block w-[18px] aspect-square">{idx + 1}</p>
                  </Button>
                ))}
            </div>
          </div>
        </PopoverContent>
      </PopoverPortal>
    </Popover>
  );
}

export default MonthPicker;
