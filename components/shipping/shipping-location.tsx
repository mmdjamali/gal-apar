import React, { useContext, useEffect } from "react";

import Icon from "../icon";
import { useQuery } from "react-query";
import axios from "axios";
import { LocationType } from "@/types/location";
import { ShippingContext } from "./shipping-view";
import NewLocation from "../locations/new-location";
import { WithLanguageType } from "@/types/language";

function ShippingLocation({ language }: WithLanguageType) {
  const { location, setLocation } = useContext(ShippingContext);

  const {
    data: locations,
    isError,
    isLoading,
  } = useQuery("locations", async () => {
    return (await axios.get("/api/location")).data;
  });

  useEffect(() => {
    if (isLoading || location) return;

    if (locations[0]) setLocation(locations[0] as LocationType);
  }, [locations, isLoading]);

  if (isLoading)
    return (
      <Layout>
        <span className="h-[18px] w-full rounded bg-foreground/25 animate-pulse" />

        <span className="h-[18px] w-[120px] rounded bg-foreground/25 animate-pulse mt-1" />
      </Layout>
    );

  if (location)
    return (
      <Layout>
        <p>{locations[0]?.address ?? "No address defiend"}</p>

        <p className="text-[14px] text-foreground/75 mt-1">{`${location.receiver_name} ${location.receiver_last_name}`}</p>

        <button className="flex items-center justify-center w-fit mt-2 ml-auto text-primary">
          Change Location <Icon name="RightArrow" className="text-[21px]" />
        </button>
      </Layout>
    );

  return (
    <Layout>
      <div className="w-full flex flex-col items-center">
        <Icon name="MapPin" className="text-[35px]" />
        <p className="">You have no predefined locations</p>

        <NewLocation language={language} />
      </div>
    </Layout>
  );
}

export default ShippingLocation;

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col w-full relative rounded border border-border p-5">
    <div className="flex w-full items-center justify-between mb-3">
      <h3 className="text-[14px] font-semibold">Delivery Address</h3>
      <Icon name="MapPin" className="text-[21px]" />
    </div>
    {children}
  </div>
);
