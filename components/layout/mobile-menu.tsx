import { Divider, Drawer, IconButton, SwipeableDrawer, Typography } from '@mui/material'
import React from 'react'
import { Icons } from '../icons'
import Link from 'next/link'
import { Dropdown } from "../ui/dropdown";

function MobileMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <IconButton
        className="text-lt-accent-main"
        onClick={() => {
          setOpen(true);
        }}
      >
        <Icons.Menu className="text-[21px]" />
      </IconButton>

      <Drawer
        sx={{
          "& .MuiPaper-root": {
            width: "min(100%,320px)",
          },
        }}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="flex flex-col w-full relative">
          <div className="py-1 flex items-center justify-between mx-4">
            <Icons.LogoEn className="h-[21px] text-lt-primary-main" />

            <IconButton
              className="text-lt-accent-main"
              onClick={() => {
                setOpen(false);
              }}
            >
              <Icons.Close className="text-[21px]" />
            </IconButton>
          </div>

          <Divider
            variant="fullWidth"
            className="border-lt-accent-main/5 mx-4"
          />

          <div className="flex flex-col gap-6 py-4 mx-4">
            {directLinks.map(({ title, url }, idx) => (
              <Link
                key={idx}
                href={url}
                className="flex group items-center justify-between gap-1  text-lt-accent-main/80 no-underline"
              >
                <p className="text-[13px] font-semibold">{title}</p>

                <Icons.ChevronRight className="text-[18px] group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
          <Divider
            variant="fullWidth"
            className="border-lt-accent-main/5 mx-4"
          />

          <div className="flex flex-col pt-4">
            <h3 className="text-lt-accent-main font-semibold mb-4 text-[14px] mx-4">
              Categories
            </h3>

            {categories.map(({ title, items }, idx) => (
              <Dropdown key={idx} title={title} items={items} />
            ))}
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default MobileMenu;

const directLinks = [
  {
    title: "Discounts and offers",
    url: "",
  },
  {
    title: "Customer club",
    url: "",
  },
  {
    title: "About us",
    url: "",
  },
];

const categories = [
  {
    title: "Phone",
    items: [
      {
        title: "Brands",
        items: [
          {
            title: "hello",
            items: [],
          },
        ],
      },
      {
        title: "Phone for your budget",
        items: [],
      },
      {
        title: "Phone ba",
        items: [],
      },
    ],
  },
  {
    title: "Fashion",
    items: [],
  },
  {
    title: "Cars",
    items: [],
  },
  {
    title: "Sport",
    items: [],
  },
];