import React from "react";
import dynamic from "next/dynamic";

const PickLocation = dynamic(
  () => import("@/components/locations/pick-location"),
  {
    loading: () => <p>loading...</p>,
    ssr: false,
  }
);

function Locations() {
  return (
    <div className="flex flex-col py-6 w-full relative flex-shrink">
      <div className="flex flex-col w-full mb-6">
        <h1 className="text-[26px] font-bold">Locations</h1>
      </div>
      <PickLocation />
    </div>
  );
}

export default Locations;
