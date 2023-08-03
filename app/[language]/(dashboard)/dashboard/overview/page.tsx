import React from "react";
import Charts from "@/components/charts";
import Cards from "@/components/cards";

function page() {
  return (
    <div className="pt-6 w-full realtive overflow-x-hidden">
      <div className="flex flex-col w-full mb-6">
        <h1 className="text-[26px] font-bold">Overview</h1>
        <p className="text-[18px] text-foreground/75">
          an overview of your shop's performance
        </p>
      </div>

      <Cards />

      <Charts className="my-6" />
    </div>
  );
}

export default page;
