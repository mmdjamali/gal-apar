import React from "react";

import {
  Chip,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import { Icons } from "../icons";

function DataTable() {
  React.useEffect(() => {
    console.log(window.innerHeight, window.innerWidth);
  }, []);``
  return (
    <TableContainer className="px-3 flex-shrink">
      <Table size="small">
        <TableHead>
          <TableRow className="text-lt-accent-main/60">
            <TableCell className="border-none text-center text-inherit">
              _id
            </TableCell>
            <TableCell className="border-none text-inherit">Status</TableCell>
            <TableCell className="border-none text-inherit">Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className="w-[20px]">
              <Tooltip title="Copy">
                <button className="border-none rounded text-white bg-lt-primary-main text-[18px] flex items-center justify-center p-1.5 cursor-pointer">
                  <Icons.Copy />
                </button>
              </Tooltip>
            </TableCell>
            <TableCell className="items-center overflow-hidden whitespace-nowrap text-ellipsis w-[80px]">
              <Chip
                size="small"
                label="Fail"
                className="rounded"
                color={"success"}
              />
            </TableCell>

            <TableCell className="overflow-hidden whitespace-nowrap text-ellipsis">
              {"My title :)"}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
