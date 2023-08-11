"use client";

import React, { useEffect, useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "../ui/dialog";
import Button from "../ui/button";
import Icon from "../icon";

import { WithLanguageType } from "@/types/language";

import dynamic from "next/dynamic";
import Textarea from "../ui/textare";
import { isLtr } from "@/lib/utils";
import {
  ScrollArea,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "../ui/scroll-area";
import Input from "../ui/input";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const PickLocation = dynamic(
  () => import("@/components/locations/pick-location"),
  {
    loading: () => <p>loading...</p>,
    ssr: false,
  }
);

function NewLocation({ language }: WithLanguageType) {
  const [mapOpen, setMapOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const [coordinates, setCoordinates] = useState<{
    lat: number;
    lon: number;
  } | null>(null);
  const [address, setAddress] = useState("");
  const [reciver, setReciver] = useState({
    name: "",
    last_name: "",
    phone_number: "",
  });

  const queryClient = useQueryClient();

  const muatate = useMutation({
    mutationFn: async (data: {
      receiver_name: string;
      receiver_last_name: string;
      receiver_phone_number: string;
      address: string;
      lat: number;
      lon: number;
    }) => {
      return (await axios.post("/api/location", data)).data;
    },
    onSuccess(data, variables, context) {
      queryClient.setQueryData("locations", data);
      setOpen(false);
    },
  });

  useEffect(() => {
    if (!open) return;

    setCoordinates(null);
    setMapOpen(true);
    setAddress("");
    setReciver({
      name: "",
      last_name: "",
      phone_number: "",
    });
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="text" color="foreground" className="w-fit">
          <Icon name="Add" className="text-[21px]" />
          Add Location
        </Button>
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay />

        <DialogContent className="h-full w-full md:h-[min(80%,600px)] md:w-[min(80%,600px)] rounded-none md:rounded shadow-md shadow-foreground/25 p-0 border border-border block">
          <PickLocation
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            language={language}
            mapOpen={mapOpen}
            setOpen={setOpen}
            setOpenMap={setMapOpen}
            setAdressString={setAddress}
          />

          <div className="flex flex-col w-full h-full relative py-4">
            <div className="w-full flex items-center justify-between px-6 pb-4 border-b border-border">
              <div className="flex items-center gap-1 w-full relative">
                <Button
                  variant="text"
                  color="foreground"
                  className="p-2"
                  onClick={() => {
                    setMapOpen(true);
                  }}
                >
                  <Icon
                    name={isLtr(language) ? "ArrowLeft" : "ArrowRight"}
                    className="text-[21px]"
                  />
                </Button>
                <h3 className="text-[18px] font-semibold">Location Detail</h3>
              </div>

              <DialogClose asChild>
                <Button variant="text" color="foreground" className="p-2">
                  <Icon name="Close" className="text-[21px]" />
                </Button>
              </DialogClose>
            </div>

            <ScrollArea className="relative h-full w-full overflow-hidden">
              <ScrollAreaViewport className="h-full w-full py-4 px-6">
                <div className="flex flex-col relative gap-2">
                  <Textarea
                    dir={isLtr(language) ? "lrt" : "rtl"}
                    label="Adress"
                    required
                    minRows={3}
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    block
                  />

                  <p className="text-foreground/75 text-[14px]">
                    This adress is written based on the location you chosed on
                    the map.
                  </p>

                  <Button
                    variant="text"
                    className="w-fit"
                    onClick={() => {
                      setMapOpen(true);
                    }}
                  >
                    Edit Location on the map
                    <Icon name="RightArrow" className="text-[18px]" />
                  </Button>
                </div>

                <span className="inline-block w-full h-[1px] bg-border my-4" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full relative">
                  <Input
                    value={reciver.name}
                    label="Name"
                    onChange={(e) => {
                      setReciver((prev) => {
                        const clone = structuredClone(prev);
                        clone.name = e.target.value;
                        return clone;
                      });
                    }}
                    required
                  />

                  <Input
                    value={reciver.last_name}
                    onChange={(e) => {
                      setReciver((prev) => {
                        const clone = structuredClone(prev);

                        clone.last_name = e.target.value;
                        return clone;
                      });
                    }}
                    label="Last Name"
                    required
                  />

                  <Input
                    value={reciver.phone_number}
                    onChange={(e) => {
                      setReciver((prev) => {
                        const clone = structuredClone(prev);

                        clone.phone_number = e.target.value;
                        return clone;
                      });
                    }}
                    label="Phone Number"
                    required
                  />
                </div>

                <ScrollAreaScrollbar orientation="vertical">
                  <ScrollAreaThumb />
                </ScrollAreaScrollbar>
              </ScrollAreaViewport>
            </ScrollArea>

            <div className="sticky bottom-0 inset-x-0 flex items-center justify-end w-full px-6 pt-4 border-t border-border">
              <Button
                loading={muatate.isLoading}
                onClick={() => {
                  muatate.mutate({
                    address,
                    lat: coordinates?.lat ?? 0,
                    lon: coordinates?.lon ?? 0,
                    receiver_last_name: reciver.last_name,
                    receiver_name: reciver.name,
                    receiver_phone_number: reciver.phone_number,
                  });
                }}
              >
                Save
                <Icon name="RightArrow" className="text-[21px]" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}

export default NewLocation;
