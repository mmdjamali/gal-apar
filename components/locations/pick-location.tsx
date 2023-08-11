"use client";

import React, { useState, useRef } from "react";
import "leaflet/dist/leaflet.css";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "../ui/dialog";
import Button from "../ui/button";

import {
  ScrollArea,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "../ui/scroll-area";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import { Map } from "leaflet";
import axios from "axios";
import { WithLanguageType } from "@/types/language";
import Icon from "../icon";

type PickLocationProps = {
  mapOpen: boolean;
  setOpenMap: (state: boolean) => void;
  setOpen: (state: boolean) => void;
  setAdressString: (state: string) => void;
  coordinates: { lon: number; lat: number } | null;
  setCoordinates: (state: { lon: number; lat: number } | null) => void;
} & WithLanguageType;

function PickLocation({
  language,
  mapOpen,
  setOpen,
  setOpenMap,
  setAdressString,
  setCoordinates,
  coordinates,
}: PickLocationProps) {
  const [location, setLocation] = useState<[number, number]>([
    38.02563047085377, 46.365705728530884,
  ]);

  const [loading, setLoading] = useState<boolean>(false);

  const MapRef = useRef<null | Map>(null);

  return (
    <Dialog open={mapOpen} onOpenChange={setOpenMap}>
      <DialogTrigger className="hidden"></DialogTrigger>

      <DialogPortal>
        {/* <DialogOverlay /> */}

        <DialogContent className="h-full w-full md:h-[min(80%,600px)] md:w-[min(80%,600px)] rounded-none md:rounded shadow-md shadow-foreground/25 p-0 border border-border block">
          <div className="flex flex-col w-full h-full relative py-4">
            <div className="w-full flex items-center justify-between px-6 pb-4 border-b border-border">
              <div className="flex flex-col gap-1 w-full relative">
                <h3 className="text-[18px] font-semibold">
                  {language === "fa" ? "آدرس جدید" : "New Location"}
                </h3>
                <p className="text-foreground/75">
                  {language === "fa"
                    ? "لطفا موقعیت مکانی را مشخض کنید."
                    : "Please chose your location in the map."}
                </p>
              </div>

              <DialogClose asChild>
                <Button
                  onClick={() => {
                    if (!!coordinates) return;
                    setOpen(false);
                  }}
                  variant="text"
                  color="foreground"
                  className="p-2"
                >
                  <Icon name="Close" className="text-[21px]" />
                </Button>
              </DialogClose>
            </div>

            <ScrollArea className="w-full h-full overflow-hidden ">
              <ScrollAreaViewport className="realtive w-full h-full py-4">
                <MapContainer
                  ref={MapRef}
                  center={[
                    coordinates?.lat || 38.025681179731464,
                    coordinates?.lon || 46.36564135551453,
                  ]}
                  zoom={18}
                  className="relative w-full h-96 !z-[1]"
                >
                  <TileLayer
                    detectRetina
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  <Icon
                    name="MapPinAdd"
                    className="absolute inset-0 m-auto z-[999] text-[32px] text-neutral-900"
                  />
                  <MapEventComponent setLocation={setLocation} />
                </MapContainer>
              </ScrollAreaViewport>
              <ScrollAreaScrollbar orientation="vertical" className="z-[3]">
                <ScrollAreaThumb />
              </ScrollAreaScrollbar>
            </ScrollArea>

            <div className="flex items-center justify-end w-full bg-background pt-4 px-6 mt-auto sticky bottom-0 inset-x-0 z-[6] border-t border-border">
              <Button
                loading={loading}
                onClick={async () => {
                  try {
                    setLoading(true);

                    const res = await axios.get(
                      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${
                        location[0]
                      }&lon=${location[1]}&accept-language=${language ?? "en"}`
                    );

                    setLoading(false);
                    setAdressString(
                      (res?.data?.display_name?.split(",") as string[])
                        .reverse()
                        .join(",") ?? ""
                    );
                    setCoordinates({
                      lat: location[0],
                      lon: location[1],
                    });
                    setOpenMap(false);
                  } catch (err) {
                    setLoading(false);
                  }
                }}
              >
                Confirm
                <Icon name="RightArrow" className="text-[21px]" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}

export default PickLocation;

function MapEventComponent({
  setLocation,
}: {
  setLocation: (state: [number, number]) => void;
}) {
  const map = useMapEvents({
    moveend: () => {
      const { lat, lng } = map.getCenter();
      setLocation([lat, lng]);
    },
  });

  return null;
}
