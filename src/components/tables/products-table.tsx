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

const Row = ({ noBorder = false }: { noBorder?: boolean }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow>
        <TableCell className="w-[20px] border-none px-0">
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
          MenuProps={{
            className:
              "[&>.MuiPaper-root]:p-1  [&>.MuiPaper-root]:border  [&>.MuiPaper-root]:border-solid [&>.MuiPaper-root]:border-lt-secondary-main",
          }}
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

      <TableContainer className="overflow-x-auto h-fit">
        <Table size="small" className="overflow-auto w-full h-fit">
          <TableHead>
            <TableRow>
              <TableCell className="border-none" />
              {properties.map(({ key }) => (
                <TableCell className="border-none" key={key}>
                  {key}
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

      <div className="flex items-center h-[40px] w-full border-0 border-t border-solid border-lt-secondary-main mt-auto">
        <Pagination
          size="medium"
          count={2}
          siblingCount={0}
          boundaryCount={1}
        />
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
