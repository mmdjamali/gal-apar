"use client";

import { cn } from "@/lib/utils";
import React, { useMemo, useState } from "react";
import BarChart from "./ui/bar-chart";
import { useTheme } from "next-themes";
import MonthPicker from "./month-picker";
import Button from "./ui/button";

interface ChartsProps {
  className?: string;
}

function Charts({ className }: ChartsProps) {
  const { theme } = useTheme();
  const [date, setDate] = useState<Date | null>(new Date());

  const salesAndViewsLabels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const salesAndViews = {
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top" as const,
        },
        title: {
          display: true,
          text: "Chart.js Bar Chart",
        },
      },
    },
    data: {
      labels: salesAndViewsLabels,
      datasets: [
        {
          label: "views",
          data: useMemo(
            () =>
              salesAndViewsLabels.map(() => Math.round(Math.random() * 10000)),
            []
          ),
          backgroundColor: "rgba(255, 62, 21)",
        },
        {
          label: "sales",
          data: useMemo(
            () =>
              salesAndViewsLabels.map(() => Math.round(Math.random() * 1000)),
            []
          ),
          backgroundColor:
            theme === "light" ? "rgba(49, 49, 49)" : "rgb(255, 255, 255)",
        },
      ],
    },
  };

  return (
    <div className={cn("flex flex-col w-full relative gap-4", className)}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex w-full gap-2"
      >
        <MonthPicker value={date} onChange={(d) => setDate(d)} />
        <Button>Submit</Button>
      </form>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(90%_,_360px),1fr))] w-full gap-4">
        <BarChart {...salesAndViews} />
        <BarChart {...salesAndViews} />
      </div>
    </div>
  );
}

export default Charts;
