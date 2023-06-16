import { cn } from "@/lib/utils";
import { TableCell } from "@mui/material";
import React from "react";

function UserCell() {
  return (
    <TableCell
      className={cn("border-none w-[0px] max-w-[140px] overflow-hidden")}
    >
      <div className="flex items-center gap-1">
        <div className="flex flex-shrink-0 w-[34px] aspect-square bg-yellow-400 rounded-[8px]" />
        <p className="text-ellipsis overflow-hidden">Ueerdjhfh</p>
      </div>
    </TableCell>
  );
}

export default UserCell;
