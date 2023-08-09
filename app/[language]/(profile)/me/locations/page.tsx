import React from "react";
import dynamic from "next/dynamic";
import { PropsWithLanguage } from "@/types/language";
import Button from "@/components/ui/button";
import Icon from "@/components/icon";
import NewLocation from "@/components/locations/new-location";
import Locations from "@/components/locations/locations";

const PickLocation = dynamic(
  () => import("@/components/locations/pick-location"),
  {
    loading: () => <p>loading...</p>,
    ssr: false,
  }
);

function Location({ params }: PropsWithLanguage<{}>) {
  return (
    <div className="flex flex-col gap-4 py-6 w-full relative flex-shrink overflow-hidden">
      <Locations />

      <NewLocation language={params.language} />
    </div>
  );
}

export default Location;
