import {
  Button,
  Collapse,
  IconButton,
  MenuItem,
  Pagination,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  useTheme,
} from "@mui/material";

import React from "react";
import SearchInput from "../ui/search-input";
import { Icons } from "../icons";
import { cn } from "@/lib/utils";
import CopyCell from "./copy-cell";
import ImagesCell from "./images-cell";
import UserCell from "./user-cell";
import BooleanCell from "./boolean-cell";

const Row = ({ noBorder = false }: { noBorder?: boolean }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow>
        <TableCell className="w-[20px] border-none">
          <IconButton
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          >
            {open ? (
              <Icons.ChevronUp className="text-[18px] text-lt-secondary-dark" />
            ) : (
              <Icons.ChevronDown className="text-[18px] text-lt-secondary-dark" />
            )}
          </IconButton>
        </TableCell>
        {properties.map(({ key }) => {
          if (key === "_id") return <CopyCell key={key} />;
          if (key === "images") return <ImagesCell key={key} />;
          if (key === "seller") return <UserCell key={key} />;
          if (key === "available") return <BooleanCell key={key} />;
          return (
            <TableCell
              className={cn("border-none", key === "_id" ? "w-[20px]" : "")}
              key={key}
            >
              {key}
            </TableCell>
          );
        })}
      </TableRow>
      <TableRow>
        <TableCell
          className={cn("py-0", noBorder ? "border-none" : "")}
          colSpan={properties.length + 1}
        >
          <Collapse in={open} timeout={"auto"} unmountOnExit>
            hello
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

function ProductsTable() {
  const [searchBy, setSearchBy] = React.useState("_id");

  return (
    <>
      <h1 className="mb-4">Products</h1>

      <div className="flex items-center w-full gap-3 h-[41px] relative">
        <SearchInput />

        <Select
          sx={{
            "&": {},
          }}
          onChange={(e) => {
            setSearchBy(e.target.value);
          }}
          value={searchBy}
          // IconComponent={Icons.ChevronDown}
          variant="outlined"
          color="primary"
          className="flex items-center h-full text-[14px] px-3 "
        >
          {properties.map(({ key }) => (
            <MenuItem
              key={key}
              value={key}
              className="text-[14px] rounded-[8px]"
            >
              {key}
            </MenuItem>
          ))}
        </Select>

        <div className="flex ml-auto items-center h-full relative">
          <Button variant="outlined" className="h-full capitalize">
            Add
          </Button>
        </div>
      </div>

      <div className="flex flex-col border border-solid border-border my-4 rounded-[8px]">
        <div className="relative ">
          <TableContainer className="overflow-x-auto">
            <Table size="small" className="overflow-auto w-full h-fit">
              <TableHead>
                <TableRow>
                  <TableCell className="" />

                  {properties.map(({ key }) => (
                    <TableCell className="" key={key}>
                      <Button color="accent" className="lowercase">
                        {key}
                      </Button>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {Array(10)
                  .fill("")
                  .map((item, idx, list) => (
                    <Row key={idx} noBorder={idx === list.length - 1} />
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <div className="sticky h-2 bottom-0 bg-slate-500" /> */}
        </div>

        <div className="flex items-center h-[40px] w-full mt-auto">
          <Pagination
            size="medium"
            count={2}
            siblingCount={0}
            boundaryCount={1}
          />
        </div>
      </div>
    </>
  );
}

export default ProductsTable;

const properties = [
  {
    key: "seller",
  },
  {
    key: "_id",
  },
  {
    key: "images",
  },
  {
    key: "title",
  },
  {
    key: "description",
  },
  {
    key: "category",
  },
  {
    key: "discount",
  },
  {
    key: "available",
  },
];
