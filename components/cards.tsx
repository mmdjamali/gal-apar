"use client";

import React from "react";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";

function Cards() {
  const cards = [
    {
      title: "revenou",
      icon: "BankCard",
      growthPercentage: "+10",
      value: "$14500.10",
    },
    {
      title: "sales",
      icon: "FileList",
      growthPercentage: "-15",
      value: "255",
    },
    {
      title: "product-views",
      icon: "Eye",
      growthPercentage: "+50",
      value: "10020",
    },
  ];

  return (
    <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
      {cards.map(({ growthPercentage, icon, title, value }, idx) => (
        <div
          className="flex flex-col p-4 border border-border rounded"
          key={idx}
        >
          <div className="flex justify-between items-center w-full mb-2">
            <p className="text-[14px] font-medium">{title}</p>
            {(() => {
              const Icon = Icons[icon] ?? Icons["Circle"];
              return <Icon className="h-[16px] text-[16px]" />;
            })()}
          </div>

          <p className="text-[21px] font-bold">{value}</p>

          <p className=" justify-start text-[12px] text-foreground/75 whitespace-nowrap">
            <span
              className={cn(
                growthPercentage[0] === "+" ? "text-success" : "text-fail"
              )}
            >
              {growthPercentage + "%"}
            </span>{" "}
            compare to last month
          </p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
