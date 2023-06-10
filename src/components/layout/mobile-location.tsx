"use client";

import { Drawer, IconButton, Typography } from "@mui/material";
import React, { useReducer } from "react";
import { Icons } from "../icons";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LocationType {
  country: string;
  province: string;
  state: string;
  city: string;
}

interface ActionType {
  type: "changeCountry" | "changeState" | "changeProvince" | "changeCity";
  payload: string;
}

function MobileLocation() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [current, setCurrent] = React.useState(0);

  const storedLocation = React.useMemo(() => {
    return JSON.parse(localStorage.getItem("galapar-location") ?? "{}");
  }, [open]);

  const [location, changeLocation] = useReducer(
    (prev: LocationType, action: ActionType) => {
      switch (action.type) {
        case "changeCountry": {
          setCurrent(1);
          return {
            ...prev,
            country: action.payload,
          };
        }
        case "changeProvince": {
          setCurrent(2);
          return {
            ...prev,
            province: action.payload,
          };
        }
        case "changeState": {
          setCurrent(2);
          return {
            ...prev,
            state: action.payload,
          };
        }
        case "changeCity": {
          setCurrent(3);
          return {
            ...prev,
            city: action.payload,
          };
        }
        default:
          return prev;
      }
    },
    {
      country: "",
      province: "",
      state: "",
      city: "",
    }
  );

  React.useEffect(() => {
    if (!open) {
      setCurrent(0);
    }
  }, [open]);

  React.useEffect(() => {
    if (current < 3) return;

    localStorage.setItem("galapar-location", JSON.stringify(location));

    setOpen(false);
  }, [current, location]);

  const functions = [
    // select country
    () => (
      <>
        {countries.map(
          ({ name, code }: { name: string; code: string }, idx, list) => (
            <div
              onClick={() => {
                changeLocation({
                  type: "changeCountry",
                  payload: code,
                });
              }}
              key={idx}
              className={cn(
                "py-3 flex items-center w-full justify-between cursor-pointer text-lt-accent-main/90 border-0 border-solid border-lt-accent-main/5",
                idx < list.length - 1 ? "border-b" : ""
              )}
            >
              <div className="flex items-center justify-center gap-2">
                <div className="relative w-[30px] aspect-[20/15]">
                  <Image
                    unoptimized
                    src={`https://linuxmint.com/web/img/flags/${code}.png`}
                    alt={name}
                    fill
                  />
                </div>
                <p className="font-medium text-[13px]">{name}</p>
              </div>
              <Icons.ChevronRight className="text-[18px]" />
            </div>
          )
        )}
      </>
    ),
    // select state or province
    () => (
      <>
        <IconButton
          onClick={() => {
            setCurrent(0);
          }}
        >
          <Icons.ArrowLeft className="text-[21px] text-lt-accent-main/90" />
        </IconButton>

        {countries
          .filter(({ code }: { code: string }) => code === location.country)[0]
          ["provinces"]?.map((name, idx, list) => (
            <div
              onClick={() => {
                changeLocation({
                  type: "changeProvince",
                  payload: name,
                });
              }}
              key={idx}
              className={cn(
                "py-3 flex items-center w-full justify-between cursor-pointer text-lt-accent-main/90 border-0 border-solid border-lt-accent-main/5",
                idx < list.length - 1 ? "border-b" : ""
              )}
            >
              <p className="font-medium text-[13px]">{name}</p>

              <Icons.ChevronRight className="text-[18px]" />
            </div>
          ))}
      </>
    ),
    // select city
    () => (
      <>
        <IconButton
          onClick={() => {
            setCurrent(1);
          }}
        >
          <Icons.ArrowLeft className="text-[21px] text-lt-accent-main/90" />
        </IconButton>
        {Provinces[0]["cities"]?.map((city, idx, list) => (
          <div
            onClick={() => {
              changeLocation({
                type: "changeCity",
                payload: city,
              });
            }}
            key={idx}
            className={cn(
              "py-3 flex items-center w-full justify-between cursor-pointer text-lt-accent-main/90 border-0 border-solid border-lt-accent-main/5",
              idx < list.length - 1 ? "border-b" : ""
            )}
          >
            <p className="font-medium text-[13px]">{city}</p>

            <Icons.ChevronRight className="text-[18px]" />
          </div>
        ))}
      </>
    ),
    // save the data and close panel
    () => {
      return <></>;
    },
  ];

  return (
    <>
      <div
        onClick={() => {
          setOpen(true);
        }}
        className="flex flex-shrink w-fit overflow-hidden items-center gap-1 justify-between py-2 cursor-pointer"
      >
        <Icons.Map className="text-[21px] text-lt-accent-main/75 flex-shrink-0" />

        <Typography className="text-lt-accent-main/75 flex-shrink text-[12px] select-none font-medium overflow-hidden text-ellipsis whitespace-nowrap">
          {Object.keys(storedLocation)[0]
            ? `Send to ${Object.values(storedLocation)
                .splice(1)
                .filter((item) => item)
                .join(", ")}`
            : "Choose your location"}
        </Typography>

        <Icons.ChevronRight className="text-[21px] text-lt-accent-main/75 flex-shrink-0" />
      </div>

      <Drawer anchor="bottom" onClose={() => {}} open={open}>
        <div className="min-h-screen relative">
          <div className="flex sticky top-0 bg-white z-[10] items-center justify-between mx-4 py-3 border-0 border-b border-solid border-lt-accent-main/5">
            <Typography variant="body2" className="leading-none">
              Choose Your Location
            </Typography>

            <IconButton
              onClick={() => {
                setOpen(false);
              }}
              className="p-0"
            >
              <Icons.Close className="test-[25px]" />
            </IconButton>
          </div>

          <div className="flex flex-col p-4 items-start relative">
            {functions[current]()}
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default MobileLocation;

const countries = [
  {
    name: "Turkey",
    code: "tr",
  },
  {
    name: "Azerbaijan",
    code: "az",
  },
  {
    name: "Japan",
    code: "jp",
  },
  {
    name: "France",
    code: "fr",
  },
  {
    name: "U.S America",
    code: "us",
  },
  {
    name: "Canada",
    code: "ca",
  },
  {
    name: "Netherland",
    code: "nl",
  },
  {
    name: "Belgium",
    code: "be",
  },
  {
    name: "Ukraine",
    code: "ua",
  },
  {
    name: "United Kingdom",
    code: "gb",
  },
  {
    name: "Iraq",
    code: "iq",
  },
  {
    name: "Germany",
    code: "de",
  },
  {
    name: "Iran",
    code: "ir",
    provinces: [
      "Alborz",
      "Ardabil",
      "Bushehr",
      "Chaharmahal and Bakhtiari",
      "East Azerbaijan",
      "Isfahan",
      "Fars",
      "Gilan",
      "Golestan",
      "Hamadan",
      "Hormozgan",
      "Ilam",
      "Kerman",
      "Kermanshah",
      "Khuzestan",
      "Kohgiluyeh and Boyer-Ahmad",
      "Kurdistan",
      "Lorestan",
      "Markazi (Central)",
      "Mazandaran",
      "North Khorasan",
      "Qazvin",
      "Qom",
      "Razavi Khorasan",
      "Semnan",
      "Sistan and Baluchestan",
      "South Khorasan",
      "Tehran",
      "West Azerbaijan",
      "Yazd",
      "Zanjan",
    ],
  },
];

const Provinces = [
  {
    name: "Ease Azerbaijan",
    cities: [
      "Tabriz",
      "Ahar",
      "Maragheh",
      "Marand",
      "Bonab",
      "Kaleybar",
      "Mianeh",
      "Shabestar",
      "Hashtrud",
      "Osku",
      "Khosroshahr (Jolfa)",
    ],
  },
];
