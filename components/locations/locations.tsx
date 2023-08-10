"use client";

import React from "react";

import Icon from "../icon";
import Button from "../ui/button";

import { useQuery } from "react-query";
import axios from "axios";

import { cn } from "@/lib/utils";
import { LocationType } from "@/types/location";

function Locations() {
  const {
    data: locations,
    isError,
    isLoading,
  } = useQuery("locations", async () => {
    return (await axios.get("/api/location")).data;
  });

  if (isLoading)
    return (
      <div className="flex flex-col w-full border border-border rounded">
        <div className="flex w-full justify-between items-center px-6 py-3">
          <div className="flex flex-col gap-1">
            <p className="text-[16px] font-semibold">Your Locations</p>
            <p className="text-[14px] text-foreground/75">{`${0} Locations`}</p>
          </div>

          <Button variant="text" className="p-2" color="foreground">
            <Icon name="More" className="text-[21px]" />
          </Button>
        </div>

        <div className="grid gap-1 place-items-center h-full w-full pb-8 pt-2">
          <Icon name="MapPin" className="text-foreground text-[48px]" />
          <p>Loading...</p>
        </div>
      </div>
    );

  return (
    <div className="flex flex-col w-full border border-border rounded">
      <div className="flex w-full justify-between items-center px-6 py-3">
        <div className="flex flex-col gap-1">
          <p className="text-[16px] font-semibold">Your Locations</p>
          <p className="text-[14px] text-foreground/75">{`${
            locations.length ?? 0
          } Locations`}</p>
        </div>

        <Button variant="text" className="p-2" color="foreground">
          <Icon name="More" className="text-[21px]" />
        </Button>
      </div>

      {locations && locations?.length ? (
        (locations as LocationType[]).map(
          (
            {
              _id,
              address,
              receiver_name,
              receiver_last_name,
              receiver_phone_number,
            },
            idx,
            list
          ) => {
            return (
              <div
                key={_id}
                className={cn(
                  "px-8 py-4 w-full relative",
                  idx < list.length - 1 ? "border-b border-border" : ""
                )}
              >
                <div className="flex flex-col w-full gap-3">
                  <p className="text-[14px] font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                    {address}
                  </p>

                  <div className="flex flex-col w-full gap-2 text-foreground/75">
                    <div className="flex items-center gap-1">
                      <Icon name="SmartPhone" className="text-[18px]" />
                      <p className="text-[12px]">{receiver_phone_number}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="User" className="text-[18px]" />
                      <p className="text-[12px]">
                        {receiver_name + " " + receiver_last_name}
                      </p>
                    </div>
                  </div>

                  <button className="flex items-center gap-1 w-fit bg-transparent text-primary font-medium group">
                    Edit
                    <Icon
                      name="RightArrow"
                      className="text-[21px] group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            );
          }
        )
      ) : (
        <div className="grid gap-1 place-items-center h-full w-full pb-8 pt-2">
          <Icon name="MapPin" className="text-foreground text-[48px]" />
          <p>You have no locations set</p>
        </div>
      )}
    </div>
  );
}

export default Locations;
